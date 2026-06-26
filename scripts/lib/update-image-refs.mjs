import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const SRC = path.join(ROOT, 'src');

const SCAN_EXTS = ['.ts', '.tsx', '.css.ts', '.css'];
const REF_RE = /\/images\/[A-Za-z0-9._\-/]+\.(?:jpe?g|png)/gi;

export function collectSourceFiles(dir = SRC, out = []) {
	if (!fs.existsSync(dir)) return out;
	for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) collectSourceFiles(full, out);
		else if (SCAN_EXTS.some((ext) => entry.name.endsWith(ext))) out.push(full);
	}
	return out;
}

/**
 * Replace /images/foo.jpg → /images/foo.webp in src when webp exists on disk.
 * Returns number of files changed.
 */
export function updateStaticImageRefs({ dryRun = false } = {}) {
	const publicRoot = path.join(ROOT, 'public');
	const files = collectSourceFiles();
	let changedFiles = 0;
	let replacements = 0;

	for (const filePath of files) {
		const original = fs.readFileSync(filePath, 'utf8');
		const next = original.replace(REF_RE, (match) => {
			const webp = match.replace(/\.(jpe?g|png)$/i, '.webp');
			const webpDisk = path.join(publicRoot, webp.replace(/^\//, ''));
			if (webp !== match && fs.existsSync(webpDisk)) {
				replacements += 1;
				return webp;
			}
			return match;
		});

		if (next !== original) {
			changedFiles += 1;
			if (!dryRun) fs.writeFileSync(filePath, next);
		}
	}

	return { changedFiles, replacements };
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
	const dryRun = process.argv.includes('--dry-run');
	const result = updateStaticImageRefs({ dryRun });
	console.log(
		dryRun ? '[dry-run] ' : '',
		`Updated ${result.changedFiles} files, ${result.replacements} path replacements`,
	);
}
