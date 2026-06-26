#!/usr/bin/env node

/**
 * Конвертация stray JPG/PNG в public/cms/ → WebP при билде.
 * Уже существующие .webp не трогаем (идемпотентный prebuild).
 */

const fs = require('fs');
const path = require('path');

const CMS_DIR = path.join(__dirname, '..', 'public', 'cms');
const CONTENT_DIR = path.join(__dirname, '..', 'src', 'content');

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

function updateJsonPaths(oldPath, newPath) {
	for (const file of ['houses.json', 'trips.json', 'ecosystem.json']) {
		const jsonPath = path.join(CONTENT_DIR, file);
		if (!fs.existsSync(jsonPath)) continue;
		const raw = fs.readFileSync(jsonPath, 'utf8');
		if (!raw.includes(oldPath)) continue;
		fs.writeFileSync(jsonPath, raw.split(oldPath).join(newPath));
	}
}

function toPublicPath(absPath) {
	return '/' + path.relative(path.join(__dirname, '..', 'public'), absPath).replace(/\\/g, '/');
}

async function main() {
	if (!fs.existsSync(CMS_DIR)) {
		console.log('ℹ️  public/cms/ не найден — пропускаем оптимизацию CMS');
		return;
	}

	const { optimizeToWebp } = await import('./lib/cms-media.mjs');
	const { safeUnlink } = await import('./lib/safe-fs.mjs');
	const sources = findFiles(CMS_DIR, ['.jpg', '.jpeg', '.png']);

	console.log(`🖼️  CMS: проверка ${sources.length} JPG/PNG в public/cms/\n`);

	let converted = 0;
	let skipped = 0;
	let errors = 0;

	for (const filePath of sources) {
		const rel = path.relative(CMS_DIR, filePath);
		const webpPath = filePath.replace(/\.(jpe?g|png)$/i, '.webp');

		if (fs.existsSync(webpPath)) {
			skipped += 1;
			try {
				await safeUnlink(filePath, { retries: 3, delayMs: 100 });
			} catch {
				// webp уже используется, jpg можно удалить позже
			}
			continue;
		}

		try {
			const result = await optimizeToWebp(filePath, { quality: 80, maxSize: 2048 });
			if (result.converted && result.webpPath) {
				const oldPublic = toPublicPath(filePath);
				const newPublic = toPublicPath(result.webpPath);
				if (oldPublic !== newPublic) {
					updateJsonPaths(oldPublic, newPublic);
				}
				converted += 1;
				console.log(`✅ ${rel} → ${path.basename(result.webpPath)}`);
			} else {
				skipped += 1;
			}
		} catch (error) {
			errors += 1;
			console.error(`❌ ${rel}: ${error.message}`);
		}
	}

	console.log(`\n✅ CMS готово: ${converted} конвертировано, ${skipped} пропущено, ${errors} ошибок\n`);

	if (errors > 0) {
		console.warn('⚠️  Часть файлов не обработана (часто EBUSY при запущенном dev-сервере).\n');
	}
}

main().catch((error) => {
	console.error('❌ Ошибка optimize-cms-images:', error);
	process.exit(1);
});
