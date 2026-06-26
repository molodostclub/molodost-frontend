import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const CONTENT = path.join(ROOT, 'src', 'content');

const refs = new Set();
for (const file of ['houses.json', 'trips.json', 'ecosystem.json']) {
	const raw = fs.readFileSync(path.join(CONTENT, file), 'utf8');
	for (const m of raw.matchAll(/\/cms\/[A-Za-z0-9._\-/]+/g)) refs.add(m[0]);
}

const missing = [...refs].filter((r) => !fs.existsSync(path.join(ROOT, 'public', r.replace(/^\//, ''))));
const emptyHouses = JSON.parse(fs.readFileSync(path.join(CONTENT, 'houses.json'), 'utf8')).filter(
	(h) => !h.pictures?.length,
);
const emptyTrips = JSON.parse(fs.readFileSync(path.join(CONTENT, 'trips.json'), 'utf8')).filter(
	(t) => !t.pictures?.length,
);

console.log('JSON refs:', refs.size);
console.log('Missing files:', missing.length);
if (missing.length) console.log(missing.join('\n'));
console.log('Houses without pictures:', emptyHouses.length, emptyHouses.map((h) => h.slug).join(', '));
console.log('Trips without pictures:', emptyTrips.length, emptyTrips.map((t) => t.slug).join(', '));
