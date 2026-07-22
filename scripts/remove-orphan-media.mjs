import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');

const ORPHAN_MEDIA = [
	'public/images/katalka/main_2026.webp',
	'public/images/baikal/grid-bottom.webp',
	'public/images/baikal/houseSound-2.webp',
	'public/images/our-altay-cover.webp',
	'public/images/baikal/grid-top.webp',
	'public/images/baikal/houseSound-1.webp',
	'public/images/festival/alwaysInBase.webp',
	'public/images/baikal/grid-top-left.webp',
	'public/images/baza/baza3.webp',
	'public/images/baikal/grid-top-right.webp',
	'public/images/baikal/grid-bottom-left.webp',
	'public/images/baikal/grid-bottom-right.webp',
	'public/images/baikal/sauna1.webp',
	'public/images/baikal/beach2.webp',
	'public/images/baikal/luxiping1.webp',
	'public/images/baikal/beach4.webp',
	'public/images/baikal/sauna4.webp',
	'public/images/baikal/beach1.webp',
	'public/images/baikal/beach5.webp',
	'public/images/baikal/sauna3.webp',
	'public/images/baikal/sauna2.webp',
	'public/images/baikal/sauna5.webp',
	'public/images/baikal/beach3.webp',
];

let removed = 0;
for (const rel of ORPHAN_MEDIA) {
	const abs = path.join(ROOT, rel);
	if (!fs.existsSync(abs)) continue;
	fs.unlinkSync(abs);
	removed += 1;
	console.log('removed', rel);
}
console.log(`\nRemoved ${removed} orphan media files`);
