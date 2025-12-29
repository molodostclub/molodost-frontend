// Stub для клиентского бандла
// Этот файл заменяет imageCache.ts в клиентском бандле
// Все функции возвращают пустые значения

interface CacheStats {
  totalSize: number;
  fileCount: number;
  files: Array<{ path: string; size: number; mtime: Date }>;
}

interface CleanupResult {
  removedFiles: number;
  freedSpaceMB: number;
  currentSizeMB: number;
  currentFileCount: number;
}

export function getImageCacheStats(_cacheDir?: string): CacheStats {
  return { totalSize: 0, fileCount: 0, files: [] };
}

export function cleanupImageCache(_options?: {
  maxSizeMB?: number;
  maxFiles?: number;
  cacheDir?: string;
}): CleanupResult {
  return { removedFiles: 0, freedSpaceMB: 0, currentSizeMB: 0, currentFileCount: 0 };
}

export function logCacheStats(_cacheDir?: string): void {
  // Пустая функция для клиентского бандла
}

export function formatSize(_bytes: number): string {
  return '0 B';
}

