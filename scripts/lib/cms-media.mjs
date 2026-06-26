import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { safeReplaceFile, safeUnlink, tempPathFor } from './safe-fs.mjs';

const IMAGE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp']);
const VIDEO_EXTENSIONS = new Set(['.mp4', '.mov', '.webm', '.m4v']);

export function isVideoExt(ext) {
	return VIDEO_EXTENSIONS.has(ext.toLowerCase());
}

export function isImageExt(ext) {
	return IMAGE_EXTENSIONS.has(ext.toLowerCase());
}

export function resolveUploadPath(uploadsDir, url) {
	if (!url) return null;
	const backupRoot = path.dirname(uploadsDir);
	return path.join(backupRoot, url.replace(/^\//, ''));
}

export async function copyMediaToCms({
	uploadsDir,
	publicRoot,
	sourceUrl,
	destRelativePath,
	webpQuality = 82,
	maxSize = 2048,
}) {
	const srcPath = resolveUploadPath(uploadsDir, sourceUrl);
	if (!srcPath || !fs.existsSync(srcPath)) {
		console.warn(`  missing upload: ${sourceUrl}`);
		return null;
	}

	const ext = path.extname(srcPath).toLowerCase();
	const publicDir = publicRoot || path.join(process.cwd(), 'public');

	let relativeDest = destRelativePath;
	if (isVideoExt(ext)) {
		relativeDest = destRelativePath.replace(/\.webp$/i, ext);
	} else if (!relativeDest.endsWith('.webp')) {
		relativeDest = relativeDest.replace(/\.[a-z0-9]+$/i, '.webp');
	}

	const destPath = path.join(publicDir, relativeDest.replace(/^\//, ''));
	fs.mkdirSync(path.dirname(destPath), { recursive: true });

	if (isVideoExt(ext)) {
		fs.copyFileSync(srcPath, destPath);
		return relativeDest.startsWith('/') ? relativeDest : `/${relativeDest}`;
	}

	await sharp(srcPath)
		.rotate()
		.resize(maxSize, maxSize, { fit: 'inside', withoutEnlargement: true })
		.webp({ quality: webpQuality })
		.toFile(destPath);

	return relativeDest.startsWith('/') ? relativeDest : `/${relativeDest}`;
}

export async function optimizeToWebp(filePath, { quality = 80, maxSize = 2048 } = {}) {
	const ext = path.extname(filePath).toLowerCase();
	if (ext === '.webp') {
		const tempPath = tempPathFor(filePath);
		await sharp(filePath)
			.rotate()
			.resize(maxSize, maxSize, { fit: 'inside', withoutEnlargement: true })
			.webp({ quality })
			.toFile(tempPath);
		const before = fs.statSync(filePath).size;
		const after = fs.statSync(tempPath).size;
		if (after >= before) {
			await safeUnlink(tempPath);
			return { converted: false, reason: 'no_improvement' };
		}
		await safeReplaceFile(tempPath, filePath);
		return { converted: true, saved: before - after, webpPath: filePath };
	}

	if (!['.jpg', '.jpeg', '.png'].includes(ext)) {
		return { converted: false, reason: 'skipped' };
	}

	const webpPath = filePath.replace(/\.(jpe?g|png)$/i, '.webp');
	const tempPath = tempPathFor(webpPath);
	await sharp(filePath)
		.rotate()
		.resize(maxSize, maxSize, { fit: 'inside', withoutEnlargement: true })
		.webp({ quality })
		.toFile(tempPath);

	await safeReplaceFile(tempPath, webpPath);
	try {
		await safeUnlink(filePath, { retries: 8, delayMs: 200 });
	} catch {
		// Windows/dev-server может держать файл — webp уже создан, путь в коде обновится
	}
	return { converted: true, webpPath };
}

/** @deprecated use optimizeToWebp */
export const optimizeCmsWebp = optimizeToWebp;
