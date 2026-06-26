import fs from 'fs';
import path from 'path';
import os from 'os';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function isRetriable(err) {
	return ['EBUSY', 'EPERM', 'EACCES', 'UNKNOWN'].includes(err.code) || err.errno === -4094;
}

function tempPathFor(targetPath) {
	const base = path.basename(targetPath);
	return path.join(os.tmpdir(), `molodost-img-${process.pid}-${Date.now()}-${base}.tmp`);
}

function writeTargetFromTemp(tempPath, targetPath) {
	try {
		fs.copyFileSync(tempPath, targetPath);
		return;
	} catch (err) {
		if (!isRetriable(err)) throw err;
	}

	const data = fs.readFileSync(tempPath);
	fs.writeFileSync(targetPath, data);
}

/**
 * Atomically replace target with temp file contents.
 * Retries on Windows EBUSY/EPERM/UNKNOWN; temp file lives outside public/.
 */
export async function safeReplaceFile(tempPath, targetPath, { retries = 8, delayMs = 150 } = {}) {
	if (!fs.existsSync(tempPath)) {
		throw new Error(`Temp file missing: ${tempPath}`);
	}

	for (let attempt = 0; attempt <= retries; attempt += 1) {
		try {
			if (fs.existsSync(targetPath)) {
				try {
					fs.renameSync(tempPath, targetPath);
					return;
				} catch (err) {
					if (!isRetriable(err)) throw err;
					writeTargetFromTemp(tempPath, targetPath);
					await safeUnlink(tempPath, { retries: 3, delayMs: 100 });
					return;
				}
			}

			fs.renameSync(tempPath, targetPath);
			return;
		} catch (err) {
			if (attempt === retries) throw err;
			if (!isRetriable(err)) throw err;
			await sleep(delayMs * (attempt + 1));
		}
	}
}

export async function safeUnlink(filePath, options) {
	const retries = options?.retries ?? 8;
	const delayMs = options?.delayMs ?? 150;
	for (let attempt = 0; attempt <= retries; attempt += 1) {
		try {
			if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
			return;
		} catch (err) {
			if (attempt === retries) throw err;
			if (!['EBUSY', 'EPERM', 'EACCES', 'ENOENT', 'UNKNOWN'].includes(err.code)) throw err;
			await sleep(delayMs * (attempt + 1));
		}
	}
}

export { tempPathFor };
