#!/usr/bin/env node

/**
 * Скрипт оптимизации изображений для проекта
 * Использует Sharp для сжатия и оптимизации всех изображений в public/images/
 * 
 * Запускается автоматически перед билдом (prebuild)
 */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Конфигурация оптимизации
const CONFIG = {
  // Директория с изображениями
  imagesDir: path.join(__dirname, '..', 'public', 'images'),
  
  // Максимальная ширина для больших изображений (px)
  maxWidth: 2048,
  
  // Максимальная высота для больших изображений (px)
  maxHeight: 2048,
  
  // Качество JPEG (1-100, рекомендуется 80-85)
  jpegQuality: 82,
  
  // Качество PNG (0-100, рекомендуется 80-90)
  pngQuality: 85,
  
  // Минимальный размер файла для оптимизации (bytes)
  // Файлы меньше этого размера не обрабатываются
  minFileSize: 1024, // 1KB
  
  // Расширения файлов для обработки (в нижнем регистре)
  extensions: ['.jpg', '.jpeg', '.png'],
};

// Статистика обработки
const stats = {
  processed: 0,
  skipped: 0,
  errors: 0,
  totalOriginalSize: 0,
  totalOptimizedSize: 0,
  files: [],
};

/**
 * Рекурсивно находит все изображения в директории
 */
function findImages(dir) {
  const files = [];
  
  try {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      
      if (entry.isDirectory()) {
        // Рекурсивно обрабатываем поддиректории
        files.push(...findImages(fullPath));
      } else if (entry.isFile()) {
        const ext = path.extname(entry.name).toLowerCase();
        if (CONFIG.extensions.includes(ext)) {
          files.push(fullPath);
        }
      }
    }
  } catch (error) {
    console.error(`Ошибка при чтении директории ${dir}:`, error.message);
  }
  
  return files;
}

/**
 * Получает размер файла в байтах
 */
function getFileSize(filePath) {
  try {
    return fs.statSync(filePath).size;
  } catch {
    return 0;
  }
}

/**
 * Форматирует размер в читаемый вид
 */
function formatSize(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(2)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
}

/**
 * Оптимизирует одно изображение
 */
async function optimizeImage(filePath) {
  const originalSize = getFileSize(filePath);
  
  // Пропускаем маленькие файлы
  if (originalSize < CONFIG.minFileSize) {
    stats.skipped++;
    return { success: false, reason: 'too_small' };
  }
  
  try {
    // Читаем метаданные изображения
    const metadata = await sharp(filePath).metadata();
    const ext = path.extname(filePath).toLowerCase();
    
    // Пропускаем файлы, которые уже достаточно маленькие
    // и имеют разумные размеры
    if (
      originalSize < 100 * 1024 && // < 100KB
      metadata.width <= CONFIG.maxWidth &&
      metadata.height <= CONFIG.maxHeight
    ) {
      stats.skipped++;
      return { success: false, reason: 'already_optimized' };
    }
    
    // Создаем Sharp pipeline
    let pipeline = sharp(filePath);
    
    // Определяем, нужно ли ресайзить
    const needsResize = 
      metadata.width > CONFIG.maxWidth || 
      metadata.height > CONFIG.maxHeight;
    
    if (needsResize) {
      pipeline = pipeline.resize(CONFIG.maxWidth, CONFIG.maxHeight, {
        fit: 'inside',
        withoutEnlargement: true,
      });
    }
    
    // Настраиваем параметры сжатия в зависимости от формата
    if (ext === '.jpg' || ext === '.jpeg') {
      pipeline = pipeline.jpeg({
        quality: CONFIG.jpegQuality,
        progressive: true,
        mozjpeg: true, // Используем mozjpeg для лучшего сжатия
      });
    } else if (ext === '.png') {
      pipeline = pipeline.png({
        quality: CONFIG.pngQuality,
        compressionLevel: 9,
        adaptiveFiltering: true,
      });
    }
    
    // Создаем временный файл для результата
    const tempPath = filePath + '.tmp';
    
    // Сохраняем оптимизированное изображение
    await pipeline.toFile(tempPath);
    
    const optimizedSize = getFileSize(tempPath);
    const saved = originalSize - optimizedSize;
    const savedPercent = ((saved / originalSize) * 100).toFixed(1);
    
    // Заменяем оригинальный файл только если размер уменьшился
    if (optimizedSize < originalSize) {
      // На Windows нужно сначала удалить оригинальный файл
      if (process.platform === 'win32') {
        fs.unlinkSync(filePath);
      }
      fs.renameSync(tempPath, filePath);
      
      stats.processed++;
      stats.totalOriginalSize += originalSize;
      stats.totalOptimizedSize += optimizedSize;
      stats.files.push({
        path: path.relative(CONFIG.imagesDir, filePath),
        originalSize,
        optimizedSize,
        saved,
        savedPercent: parseFloat(savedPercent),
      });
      
      return {
        success: true,
        originalSize,
        optimizedSize,
        saved,
        savedPercent: parseFloat(savedPercent),
      };
    } else {
      // Если размер не уменьшился, удаляем временный файл
      fs.unlinkSync(tempPath);
      stats.skipped++;
      return { success: false, reason: 'no_improvement' };
    }
  } catch (error) {
    // Удаляем временный файл в случае ошибки
    const tempPath = filePath + '.tmp';
    if (fs.existsSync(tempPath)) {
      try {
        fs.unlinkSync(tempPath);
      } catch {
        // Игнорируем ошибки удаления
      }
    }
    
    stats.errors++;
    console.error(`Ошибка при обработке ${filePath}:`, error.message);
    return { success: false, reason: 'error', error: error.message };
  }
}

/**
 * Основная функция
 */
async function main() {
  console.log('🖼️  Начинаем оптимизацию изображений...\n');
  console.log(`📁 Директория: ${CONFIG.imagesDir}`);
  console.log(`⚙️  Максимальный размер: ${CONFIG.maxWidth}x${CONFIG.maxHeight}px`);
  console.log(`📊 Качество JPEG: ${CONFIG.jpegQuality}%, PNG: ${CONFIG.pngQuality}%\n`);
  
  // Проверяем существование директории
  if (!fs.existsSync(CONFIG.imagesDir)) {
    console.error(`❌ Директория ${CONFIG.imagesDir} не найдена!`);
    process.exit(1);
  }
  
  // Находим все изображения
  console.log('🔍 Поиск изображений...');
  const images = findImages(CONFIG.imagesDir);
  console.log(`✅ Найдено изображений: ${images.length}\n`);
  
  if (images.length === 0) {
    console.log('ℹ️  Изображения не найдены. Завершаем работу.');
    process.exit(0);
  }
  
  // Обрабатываем каждое изображение
  console.log('⚡ Обработка изображений...\n');
  
  for (let i = 0; i < images.length; i++) {
    const imagePath = images[i];
    const relativePath = path.relative(CONFIG.imagesDir, imagePath);
    
    process.stdout.write(`[${i + 1}/${images.length}] ${relativePath}... `);
    
    const result = await optimizeImage(imagePath);
    
    if (result.success) {
      console.log(
        `✅ ${formatSize(result.originalSize)} → ${formatSize(result.optimizedSize)} ` +
        `(${result.savedPercent}% меньше)`
      );
    } else if (result.reason === 'too_small' || result.reason === 'already_optimized') {
      console.log('⏭️  пропущено (уже оптимизировано)');
    } else if (result.reason === 'no_improvement') {
      console.log('⏭️  пропущено (без улучшений)');
    } else {
      console.log(`❌ ошибка: ${result.error || result.reason}`);
    }
  }
  
  // Выводим статистику
  console.log('\n' + '='.repeat(60));
  console.log('📊 Статистика оптимизации:');
  console.log('='.repeat(60));
  console.log(`✅ Обработано: ${stats.processed} файлов`);
  console.log(`⏭️  Пропущено: ${stats.skipped} файлов`);
  console.log(`❌ Ошибок: ${stats.errors} файлов`);
  
  if (stats.processed > 0) {
    const totalSaved = stats.totalOriginalSize - stats.totalOptimizedSize;
    const totalSavedPercent = ((totalSaved / stats.totalOriginalSize) * 100).toFixed(1);
    
    console.log('\n💾 Размеры:');
    console.log(`   До:   ${formatSize(stats.totalOriginalSize)}`);
    console.log(`   После: ${formatSize(stats.totalOptimizedSize)}`);
    console.log(`   Сэкономлено: ${formatSize(totalSaved)} (${totalSavedPercent}%)\n`);
    
    // Топ-10 файлов с наибольшей экономией
    if (stats.files.length > 0) {
      const topSaved = [...stats.files]
        .sort((a, b) => b.saved - a.saved)
        .slice(0, 10);
      
      console.log('🏆 Топ-10 файлов по экономии:');
      topSaved.forEach((file, index) => {
        console.log(
          `   ${index + 1}. ${file.path}: ` +
          `${formatSize(file.saved)} (${file.savedPercent}%)`
        );
      });
    }
  }
  
  console.log('\n✅ Оптимизация завершена!\n');
}

// Запускаем скрипт
main().catch((error) => {
  console.error('\n❌ Критическая ошибка:', error);
  process.exit(1);
});

