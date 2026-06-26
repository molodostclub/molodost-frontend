import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');

function walkFiles(dir, out = []) {
	if (!fs.existsSync(dir)) return out;
	for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) walkFiles(full, out);
		else out.push(full);
	}
	return out;
}

function collectTextRoots() {
	const roots = [path.join(ROOT, 'src'), path.join(ROOT, 'scripts')];
	const exts = new Set(['.ts', '.tsx', '.json', '.css.ts', '.css', '.js', '.mjs']);
	return roots.flatMap((dir) =>
		walkFiles(dir).filter((f) => exts.has(path.extname(f).toLowerCase())),
	);
}

const corpus = collectTextRoots()
	.map((f) => fs.readFileSync(f, 'utf8'))
	.join('\n');

function auditDir(publicSubdir, urlPrefix) {
	const dir = path.join(ROOT, 'public', publicSubdir);
	if (!fs.existsSync(dir)) return { total: 0, unreferenced: [] };

	const media = walkFiles(dir).filter((f) => !path.basename(f).startsWith('.'));
	const unreferenced = [];

	for (const file of media) {
		const rel = path.relative(path.join(ROOT, 'public'), file).replace(/\\/g, '/');
		const url = `/${rel}`;
		const base = path.basename(rel);
		const withoutExt = rel.replace(/\.[a-z0-9]+$/i, '');

		const referenced =
			corpus.includes(url) ||
			corpus.includes(url.replace(/\.webp$/i, '.jpg')) ||
			corpus.includes(url.replace(/\.webp$/i, '.png')) ||
			corpus.includes(url.replace(/\.webp$/i, '.jpeg')) ||
			corpus.includes(withoutExt) ||
			corpus.includes(base);

		if (!referenced) unreferenced.push({ url, size: fs.statSync(file).size });
	}

	unreferenced.sort((a, b) => b.size - a.size);
	return { total: media.length, unreferenced };
}

const images = auditDir('images', '/images');
const cms = auditDir('cms', '/cms');

function print(title, result) {
	console.log(`\n=== ${title} ===`);
	console.log(`Files: ${result.total}, unreferenced: ${result.unreferenced.length}`);
	const mb = result.unreferenced.reduce((s, f) => s + f.size, 0) / 1024 / 1024;
	console.log(`Orphan size: ${mb.toFixed(2)} MB`);
	result.unreferenced.slice(0, 30).forEach(({ url, size }) => {
		console.log(`  ${(size / 1024).toFixed(0)} KB  ${url}`);
	});
	if (result.unreferenced.length > 30) console.log(`  ... +${result.unreferenced.length - 30} more`);
}

print('public/images', images);
print('public/cms', cms);
