import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { safeReplaceFile, tempPathFor } from './safe-fs.mjs';

/**
 * LCP и above-the-fold: пересжатие существующих WebP + генерация mobile-вариантов.
 * Запускается в prebuild после конвертации jpg/png.
 */
export const CRITICAL_IMAGES = [
	{
		file: 'main-cover2.webp',
		quality: 78,
		maxSize: 1200,
		recompress: true,
	},
	{
		file: 'main-cover2-mobile.webp',
		source: 'main-cover2.webp',
		quality: 72,
		maxSize: 828,
		variant: true,
	},
	{
		file: 'our-symbol-mobile.webp',
		quality: 76,
		maxSize: 400,
		recompress: true,
	},
	{
		file: 'our-idols-mobile.webp',
		quality: 76,
		maxSize: 400,
		recompress: true,
	},
];

function formatSize(bytes) {
	if (bytes < 1024) return `${bytes} B`;
	if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(2)} KB`;
	return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
}

async function writeWebp(srcPath, destPath, { quality, maxSize }) {
	const tempPath = tempPathFor(destPath);
	await sharp(srcPath)
		.rotate()
		.resize(maxSize, maxSize, { fit: 'inside', withoutEnlargement: true })
		.webp({ quality, effort: 6 })
		.toFile(tempPath);
	await safeReplaceFile(tempPath, destPath);
	return fs.statSync(destPath).size;
}

export async function processCriticalImages(imagesDir) {
	let processed = 0;
	let skipped = 0;
	let errors = 0;
	let savedBytes = 0;

	console.log(`\n🎯 Критические WebP (${CRITICAL_IMAGES.length} правил):\n`);

	for (const rule of CRITICAL_IMAGES) {
		const destPath = path.join(imagesDir, rule.file);
		const srcPath = rule.source
			? path.join(imagesDir, rule.source)
			: destPath;

		if (!fs.existsSync(srcPath)) {
			console.warn(`⚠️  ${rule.file}: источник не найден (${rule.source || rule.file})`);
			skipped += 1;
			continue;
		}

		try {
			if (rule.variant) {
				const before = fs.existsSync(destPath) ? fs.statSync(destPath).size : 0;
				const after = await writeWebp(srcPath, destPath, rule);
				processed += 1;
				if (before > 0) {
					savedBytes += before - after;
				}
				console.log(
					`✅ ${rule.file} ← ${rule.source} (${before ? `${formatSize(before)} → ` : ''}${formatSize(after)})`,
				);
				continue;
			}

			if (!rule.recompress) {
				skipped += 1;
				continue;
			}

			const before = fs.statSync(destPath).size;
			const tempPath = tempPathFor(destPath);
			await sharp(srcPath)
				.rotate()
				.resize(rule.maxSize, rule.maxSize, { fit: 'inside', withoutEnlargement: true })
				.webp({ quality: rule.quality, effort: 6 })
				.toFile(tempPath);
			const after = fs.statSync(tempPath).size;

			if (after >= before) {
				await fs.promises.unlink(tempPath).catch(() => {});
				console.log(`⏭️  ${rule.file} — без улучшения (${formatSize(before)})`);
				skipped += 1;
				continue;
			}

			await safeReplaceFile(tempPath, destPath);
			processed += 1;
			savedBytes += before - after;
			console.log(`✅ ${rule.file} (${formatSize(before)} → ${formatSize(after)})`);
		} catch (error) {
			errors += 1;
			console.error(`❌ ${rule.file}: ${error.message}`);
		}
	}

	return { processed, skipped, errors, savedBytes };
}
