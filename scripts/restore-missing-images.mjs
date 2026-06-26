import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');

const missing = [
	'/images/about/hudruk.jpg',
	'/images/about/service.jpg',
	'/images/about/altay.png',
	'/images/about/nachalo.png',
	'/images/about/turclub.png',
	'/images/baikal/blagodat/4.jpg',
	'/images/baikal/zvuk/14.jpg',
	'/images/baikal/baikal-map-color.jpg',
	'/images/mars/kont-dom.jpeg',
	'/images/mars/grid4.jpeg',
	'/images/baikal/olhon/olhon1.jpg',
	'/images/how-we-trip-cover.jpg',
	'/images/kurily/main.jpg',
	'/images/mars/main.jpeg',
];

function gitShow(commit, relativePosix) {
	return execSync(`git show ${commit}:${relativePosix}`, {
		cwd: ROOT,
		encoding: null,
		maxBuffer: 50 * 1024 * 1024,
	});
}

function lastCommitWithFile(relativePosix) {
	try {
		return execSync(`git log -1 --format=%H --diff-filter=AM -- "${relativePosix}"`, {
			cwd: ROOT,
			encoding: 'utf8',
		}).trim();
	} catch {
		return '';
	}
}

for (const ref of missing) {
	const relativePosix = `public${ref}`.replace(/\\/g, '/');
	const abs = path.join(ROOT, relativePosix);

	if (fs.existsSync(abs)) {
		console.log('exists', ref);
		continue;
	}

	const commit = lastCommitWithFile(relativePosix);
	if (!commit) {
		console.log('NOT IN GIT', ref);
		continue;
	}

	try {
		fs.mkdirSync(path.dirname(abs), { recursive: true });
		fs.writeFileSync(abs, gitShow(commit, relativePosix));
		console.log('restored', ref, commit.slice(0, 7));
	} catch (error) {
		console.log('FAILED', ref, error.message);
	}
}
