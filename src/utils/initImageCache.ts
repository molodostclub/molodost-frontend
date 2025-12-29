import { cleanupImageCache, logCacheStats } from './imageCache';

/**
 * Инициализирует и очищает кеш изображений при старте сервера
 */
export function initImageCache(): void {
  if (process.env.NODE_ENV !== 'production') {
    // В dev режиме не очищаем кеш автоматически
    return;
  }

  try {
    console.log('[Image Cache] Инициализация кеша изображений...');

    // Логируем текущую статистику
    logCacheStats();

    // Очищаем кеш если он превышает лимиты
    const result = cleanupImageCache({
      maxSizeMB: Number(process.env.IMAGE_CACHE_MAX_SIZE_MB) || 50,
      maxFiles: Number(process.env.IMAGE_CACHE_MAX_FILES) || 200,
    });

    if (result.removedFiles > 0) {
      console.log(
        `[Image Cache] ✅ Очистка завершена: удалено ${result.removedFiles} файлов, ` +
          `освобождено ${result.freedSpaceMB.toFixed(2)}MB. ` +
          `Текущий размер: ${result.currentSizeMB.toFixed(2)}MB (${result.currentFileCount} файлов)`
      );
    } else {
      console.log(
        `[Image Cache] ✅ Кеш в пределах нормы: ${result.currentSizeMB.toFixed(2)}MB (${result.currentFileCount} файлов)`
      );
    }
  } catch (error) {
    console.error('[Image Cache] Ошибка при инициализации кеша:', error);
    // Не прерываем запуск сервера из-за ошибок кеша
  }
}

