import * as fs from 'fs';
import * as path from 'path';

interface CacheStats {
  totalSize: number;
  fileCount: number;
  files: Array<{ path: string; size: number; mtime: Date }>;
}

interface CacheCleanupOptions {
  maxSizeMB?: number;
  maxFiles?: number;
  cacheDir?: string;
}

interface CleanupResult {
  removedFiles: number;
  freedSpaceMB: number;
  currentSizeMB: number;
  currentFileCount: number;
}

const DEFAULT_MAX_SIZE_MB = 50;
const DEFAULT_MAX_FILES = 200;
const DEFAULT_CACHE_DIR = path.join(process.cwd(), '.next', 'cache', 'images');

/**
 * Получает статистику кеша изображений
 */
export function getImageCacheStats(cacheDir: string = DEFAULT_CACHE_DIR): CacheStats {
  const stats: CacheStats = {
    totalSize: 0,
    fileCount: 0,
    files: [],
  };

  try {
    if (!fs.existsSync(cacheDir)) {
      return stats;
    }

    const entries = fs.readdirSync(cacheDir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(cacheDir, entry.name);

      if (entry.isDirectory()) {
        // Рекурсивно обрабатываем поддиректории
        const subStats = getImageCacheStats(fullPath);
        stats.totalSize += subStats.totalSize;
        stats.fileCount += subStats.fileCount;
        stats.files.push(...subStats.files);
      } else if (entry.isFile()) {
        try {
          const fileStats = fs.statSync(fullPath);
          const size = fileStats.size;
          stats.totalSize += size;
          stats.fileCount += 1;
          stats.files.push({
            path: fullPath,
            size,
            mtime: fileStats.mtime,
          });
        } catch (error) {
          console.warn(`Ошибка при чтении файла ${fullPath}:`, error);
        }
      }
    }
  } catch (error) {
    console.error(`Ошибка при получении статистики кеша ${cacheDir}:`, error);
  }

  return stats;
}

/**
 * Очищает кеш изображений по LRU политике
 */
export function cleanupImageCache(
  options: CacheCleanupOptions = {}
): CleanupResult {
  const {
    maxSizeMB = DEFAULT_MAX_SIZE_MB,
    maxFiles = DEFAULT_MAX_FILES,
    cacheDir = DEFAULT_CACHE_DIR,
  } = options;

  const result: CleanupResult = {
    removedFiles: 0,
    freedSpaceMB: 0,
    currentSizeMB: 0,
    currentFileCount: 0,
  };

  try {
    if (!fs.existsSync(cacheDir)) {
      return result;
    }

    const stats = getImageCacheStats(cacheDir);
    const maxSizeBytes = maxSizeMB * 1024 * 1024;
    const currentSizeMB = stats.totalSize / (1024 * 1024);

    result.currentSizeMB = currentSizeMB;
    result.currentFileCount = stats.fileCount;

    // Проверяем, нужно ли очищать
    const exceedsSize = stats.totalSize > maxSizeBytes;
    const exceedsFiles = stats.fileCount > maxFiles;

    if (!exceedsSize && !exceedsFiles) {
      return result;
    }

    // Сортируем файлы по времени модификации (старые первыми - LRU)
    const sortedFiles = [...stats.files].sort((a, b) => a.mtime.getTime() - b.mtime.getTime());

    let currentSize = stats.totalSize;
    let currentCount = stats.fileCount;
    let freedBytes = 0;

    // Удаляем файлы пока не достигнем целевых значений
    for (const file of sortedFiles) {
      const shouldStopBySize = currentSize <= maxSizeBytes;
      const shouldStopByCount = currentCount <= maxFiles;

      if (shouldStopBySize && shouldStopByCount) {
        break;
      }

      try {
        fs.unlinkSync(file.path);
        currentSize -= file.size;
        currentCount -= 1;
        freedBytes += file.size;
        result.removedFiles += 1;
      } catch (error) {
        console.warn(`Ошибка при удалении файла ${file.path}:`, error);
      }
    }

    // Очищаем пустые директории
    try {
      cleanupEmptyDirectories(cacheDir);
    } catch (error) {
      console.warn(`Ошибка при очистке пустых директорий:`, error);
    }

    result.freedSpaceMB = freedBytes / (1024 * 1024);
    result.currentSizeMB = currentSize / (1024 * 1024);
    result.currentFileCount = currentCount;
  } catch (error) {
    console.error(`Ошибка при очистке кеша изображений:`, error);
    throw error;
  }

  return result;
}

/**
 * Рекурсивно удаляет пустые директории
 */
function cleanupEmptyDirectories(dirPath: string): void {
  try {
    if (!fs.existsSync(dirPath)) {
      return;
    }

    const entries = fs.readdirSync(dirPath, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dirPath, entry.name);
      if (entry.isDirectory()) {
        cleanupEmptyDirectories(fullPath);
      }
    }

    // Проверяем, пуста ли директория после рекурсивной очистки
    const remainingEntries = fs.readdirSync(dirPath);
    if (remainingEntries.length === 0 && dirPath !== DEFAULT_CACHE_DIR) {
      fs.rmdirSync(dirPath);
    }
  } catch (error) {
    // Игнорируем ошибки при удалении директорий
  }
}

/**
 * Форматирует размер в человекочитаемый формат
 */
export function formatSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(2)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

/**
 * Логирует статистику кеша
 */
export function logCacheStats(cacheDir: string = DEFAULT_CACHE_DIR): void {
  try {
    const stats = getImageCacheStats(cacheDir);
    const sizeMB = stats.totalSize / (1024 * 1024);
    const warningThresholdMB = Number(process.env.IMAGE_CACHE_MAX_SIZE_MB) || 50;

    console.log(`[Image Cache] Размер: ${formatSize(stats.totalSize)} (${stats.fileCount} файлов)`);

    if (sizeMB > warningThresholdMB) {
      console.warn(
        `[Image Cache] ⚠️  Размер кеша превышает ${warningThresholdMB}MB. Рекомендуется очистка.`
      );
    }
  } catch (error) {
    console.error('[Image Cache] Ошибка при логировании статистики:', error);
    // Не пробрасываем ошибку, чтобы не прерывать работу
  }
}

