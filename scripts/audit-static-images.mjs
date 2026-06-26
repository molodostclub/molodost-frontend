import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.join(ROOT, 'src');
const PUBLIC_IMAGES = path.join(ROOT, 'public', 'images');

const EXT_RE = /\.(jpe?g|png|webp|gif|svg)/i;
const REF_RE = /\/images\/[A-Za-z0-9._\-/]+/g;

function walkFiles(dir, exts, out = []) {
	if (!fs.existsSync(dir)) return out;
	for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) walkFiles(full, exts, out);
		else if (exts.some((e) => entry.name.endsWith(e))) out.push(full);
	}
	return out;
}

const refs = new Set();
for (const file of walkFiles(SRC, ['.ts', '.tsx', '.css.ts', '.css'])) {
	const raw = fs.readFileSync(file, 'utf8');
	for (const m of raw.matchAll(REF_RE)) {
		const ref = m[0].replace(/\?.*$/, '');
		if (EXT_RE.test(ref)) refs.add(ref);
	}
}

const missing = [];
const heavy = [];
for (const ref of refs) {
	const disk = path.join(ROOT, 'public', ref.replace(/^\//, ''));
	if (!fs.existsSync(disk)) {
		const webp = disk.replace(/\.(jpe?g|png)$/i, '.webp');
		if (!fs.existsSync(webp)) missing.push(ref);
	} else if (/\.(jpe?g|png)$/i.test(ref)) {
		const size = fs.statSync(disk).size;
		if (size > 200 * 1024) heavy.push({ ref, kb: Math.round(size / 1024) });
	}
}

console.log('Static /images/ refs:', refs.size);
console.log('Missing on disk:', missing.length);
if (missing.length) console.log(missing.join('\n'));
console.log('Heavy jpg/png refs (>200KB):', heavy.length);
heavy.sort((a, b) => b.kb - a.kb).slice(0, 15).forEach(({ ref, kb }) => console.log(`${kb}KB ${ref}`));
