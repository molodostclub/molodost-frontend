#!/usr/bin/env node

/**
 * Конвертация и сжатие статики public/images/ → WebP при билде.
 * JPG/PNG заменяются на .webp; пути в src/ обновляются автоматически.
 */

const fs = require('fs');
const path = require('path');

const IMAGES_DIR = path.join(__dirname, '..', 'public', 'images');
const WEBP_QUALITY = 82;
const MAX_SIZE = 2048;

function findFiles(dir, extensions) {
	const files = [];
	if (!fs.existsSync(dir)) return files;

	for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			files.push(...findFiles(full, extensions));
		} else if (extensions.includes(path.extname(entry.name).toLowerCase())) {
			files.push(full);
		}
	}
	return files;
}

function formatSize(bytes) {
	if (bytes < 1024) return `${bytes} B`;
	if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(2)} KB`;
	return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
}

async function main() {
	if (!fs.existsSync(IMAGES_DIR)) {
		console.log('ℹ️  public/images/ не найден — пропускаем');
		return;
	}

	const { optimizeToWebp } = await import('./lib/cms-media.mjs');
	const { updateStaticImageRefs } = await import('./lib/update-image-refs.mjs');
	const { safeUnlink } = await import('./lib/safe-fs.mjs');

	const sources = findFiles(IMAGES_DIR, ['.jpg', '.jpeg', '.png']);
	console.log(`🖼️  Статика: обработка ${sources.length} файлов в public/images/\n`);

	let converted = 0;
	let recompressed = 0;
	let skipped = 0;
	let errors = 0;
	let savedBytes = 0;

	for (const filePath of sources) {
		const rel = path.relative(IMAGES_DIR, filePath);
		const webpPath = filePath.replace(/\.(jpe?g|png)$/i, '.webp');
		if (fs.existsSync(webpPath)) {
			skipped += 1;
			continue;
		}
		const before = fs.statSync(filePath).size;

		try {
			const result = await optimizeToWebp(filePath, { quality: WEBP_QUALITY, maxSize: MAX_SIZE });
			if (result.converted && result.webpPath && result.webpPath !== filePath) {
				converted += 1;
				const after = fs.statSync(result.webpPath).size;
				savedBytes += before - after;
				console.log(`✅ ${rel} → ${path.basename(result.webpPath)} (${formatSize(before)} → ${formatSize(after)})`);
			} else if (result.converted) {
				recompressed += 1;
				const after = fs.statSync(filePath).size;
				savedBytes += result.saved ?? before - after;
				console.log(`✅ ${rel} (webp пересжат)`);
			} else {
				skipped += 1;
			}
		} catch (error) {
			errors += 1;
			console.error(`❌ ${rel}: ${error.message}`);
		}
	}

	const refUpdate = updateStaticImageRefs();

	let cleaned = 0;
	for (const filePath of findFiles(IMAGES_DIR, ['.jpg', '.jpeg', '.png'])) {
		const webpPath = filePath.replace(/\.(jpe?g|png)$/i, '.webp');
		if (!fs.existsSync(webpPath)) continue;
		try {
			await safeUnlink(filePath, { retries: 3, delayMs: 100 });
			cleaned += 1;
		} catch {
			// dev-сервер держит файл — webp уже используется в коде
		}
	}

	console.log(
		`\n📝 Пути в src/: ${refUpdate.replacements} замен в ${refUpdate.changedFiles} файлах`,
	);
	if (cleaned > 0) console.log(`🧹 Удалено устаревших jpg/png: ${cleaned}`);
	console.log(
		`✅ Готово: ${converted} → webp, ${recompressed} пересжато, ${skipped} без изменений, ${errors} ошибок`,
	);
	if (savedBytes > 0) {
		console.log(`💾 Сэкономлено: ${formatSize(savedBytes)}\n`);
	} else {
		console.log('');
	}

	if (errors > 0) {
		console.warn(`\n⚠️  ${errors} файлов не обработано (часто EBUSY при запущенном dev-сервере). Перезапустите build.\n`);
	}
}

main().catch((error) => {
	console.error('❌ Ошибка optimize-images:', error);
	process.exit(1);
});
