// Wrapper для server.js который инициализирует очистку кеша изображений перед запуском
// Используется вместо прямого запуска server.js

const path = require('path');
const fs = require('fs');

// Инициализируем кеш изображений перед запуском сервера
function initImageCache() {
  const cacheDir = path.join(process.cwd(), '.next', 'cache', 'images');
  
  if (!fs.existsSync(cacheDir)) {
    return;
  }

  const maxSizeMB = Number(process.env.IMAGE_CACHE_MAX_SIZE_MB) || 50;
  const maxFiles = Number(process.env.IMAGE_CACHE_MAX_FILES) || 200;
  const maxAgeDays = Number(process.env.IMAGE_CACHE_MAX_AGE_DAYS) || 7; // TTL кеша = 7 дней
  const maxSizeBytes = maxSizeMB * 1024 * 1024;
  const maxAgeMs = maxAgeDays * 24 * 60 * 60 * 1000; // Конвертируем дни в миллисекунды
  const now = Date.now();

  try {
    console.log('[Image Cache] Инициализация кеша изображений...');
    
    const stats = getCacheStats(cacheDir);
    const sizeMB = stats.totalSize / (1024 * 1024);
    
    console.log(`[Image Cache] Размер: ${formatSize(stats.totalSize)} (${stats.fileCount} файлов)`);
    
    // Определяем нужно ли очищать кеш
    const exceedsSize = sizeMB > maxSizeMB;
    const exceedsFiles = stats.fileCount > maxFiles;
    const hasOldFiles = stats.files.some(file => (now - file.mtime.getTime()) > maxAgeMs);
    
    if (exceedsSize || exceedsFiles || hasOldFiles) {
      const reasons = [];
      if (exceedsSize) reasons.push(`${maxSizeMB}MB`);
      if (exceedsFiles) reasons.push(`${maxFiles} файлов`);
      if (hasOldFiles) reasons.push(`${maxAgeDays} дней`);
      
      console.log(`[Image Cache] Очистка кеша (превышены лимиты: ${reasons.join(', ')})...`);
      const result = cleanupCache(cacheDir, maxSizeBytes, maxFiles, maxAgeMs, stats);
      
      console.log(
        `[Image Cache] ✅ Очистка завершена: удалено ${result.removedFiles} файлов, ` +
        `освобождено ${result.freedSpaceMB.toFixed(2)}MB. ` +
        `Текущий размер: ${result.currentSizeMB.toFixed(2)}MB (${result.currentFileCount} файлов)`
      );
    } else {
      console.log(`[Image Cache] ✅ Кеш в пределах нормы: ${sizeMB.toFixed(2)}MB (${stats.fileCount} файлов)`);
    }
  } catch (error) {
    console.error('[Image Cache] Ошибка при инициализации кеша:', error);
    // Не прерываем запуск сервера
  }
}

function getCacheStats(cacheDir) {
  const stats = { totalSize: 0, fileCount: 0, files: [] };
  
  function walkDir(dir) {
    if (!fs.existsSync(dir)) return;
    
    try {
      const entries = fs.readdirSync(dir, { withFileTypes: true });
      
      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        
        try {
          if (entry.isDirectory()) {
            walkDir(fullPath);
          } else if (entry.isFile()) {
            const fileStats = fs.statSync(fullPath);
            const size = fileStats.size;
            stats.totalSize += size;
            stats.fileCount += 1;
            stats.files.push({
              path: fullPath,
              size,
              mtime: fileStats.mtime,
            });
          }
        } catch (error) {
          // Игнорируем ошибки доступа к отдельным файлам
        }
      }
    } catch (error) {
      // Игнорируем ошибки чтения директории
    }
  }
  
  walkDir(cacheDir);
  return stats;
}

function cleanupCache(cacheDir, maxSizeBytes, maxFiles, maxAgeMs, stats) {
  const now = Date.now();
  const sortedFiles = [...stats.files].sort((a, b) => a.mtime.getTime() - b.mtime.getTime());
  
  let currentSize = stats.totalSize;
  let currentCount = stats.fileCount;
  let freedBytes = 0;
  let removedFiles = 0;
  
  for (const file of sortedFiles) {
    const fileAge = now - file.mtime.getTime();
    const isOld = fileAge > maxAgeMs;
    const exceedsSize = currentSize > maxSizeBytes;
    const exceedsCount = currentCount > maxFiles;
    
    // Удаляем файл если он старый (приоритет) ИЛИ превышены лимиты по размеру/количеству
    if (isOld || exceedsSize || exceedsCount) {
      try {
        fs.unlinkSync(file.path);
        currentSize -= file.size;
        currentCount -= 1;
        freedBytes += file.size;
        removedFiles += 1;
      } catch (error) {
        // Игнорируем ошибки удаления
      }
    } else {
      // Если файл не старый и лимиты не превышены, прекращаем очистку
      // (все старые файлы уже удалены, дальнейшие файлы новые и лимиты соблюдены)
      break;
    }
  }
  
  // Очищаем пустые директории
  try {
    cleanupEmptyDirs(cacheDir);
  } catch (error) {
    // Игнорируем ошибки
  }
  
  return {
    removedFiles,
    freedSpaceMB: freedBytes / (1024 * 1024),
    currentSizeMB: currentSize / (1024 * 1024),
    currentFileCount: currentCount,
  };
}

function cleanupEmptyDirs(dirPath) {
  if (!fs.existsSync(dirPath)) return;
  
  try {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dirPath, entry.name);
      if (entry.isDirectory()) {
        cleanupEmptyDirs(fullPath);
      }
    }
    
    const remainingEntries = fs.readdirSync(dirPath);
    if (remainingEntries.length === 0 && dirPath !== path.join(process.cwd(), '.next', 'cache', 'images')) {
      fs.rmdirSync(dirPath);
    }
  } catch (error) {
    // Игнорируем ошибки
  }
}

function formatSize(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(2)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

/**
 * Упрощенный мониторинг worker процессов
 * Проверяет и завершает зависшие процессы jest-worker
 */
function startWorkerMonitoring() {
  if (process.platform === 'win32') {
    // На Windows мониторинг не реализован
    return;
  }

  const MAX_CPU_TIME_MS = 5 * 60 * 1000; // 5 минут
  const CHECK_INTERVAL_MS = 30000; // 30 секунд

  function checkWorkers() {
    try {
      const { execSync } = require('child_process');
      
      // Получаем процессы jest-worker
      const psOutput = execSync(
        'ps -eo pid,etime,comm | grep jest-worker | grep -v grep || true',
        { encoding: 'utf-8', stdio: 'pipe' }
      ).trim();

      if (!psOutput) return;

      const lines = psOutput.split('\n');
      for (const line of lines) {
        const parts = line.trim().split(/\s+/);
        if (parts.length >= 3) {
          const pid = parseInt(parts[0], 10);
          if (!isNaN(pid)) {
            const etime = parts[1]; // Время работы процесса
            const cpuTime = parseEtime(etime);
            
            if (cpuTime > MAX_CPU_TIME_MS) {
              console.warn(
                `[Worker Monitor] ⚠️  Зависший worker процесс: PID ${pid}, время работы: ${etime}`
              );
              
              try {
                process.kill(pid, 'SIGTERM');
                console.log(`[Worker Monitor] ✅ Завершен worker процесс: PID ${pid}`);
              } catch (error) {
                console.error(`[Worker Monitor] Ошибка при завершении процесса ${pid}:`, error.message);
              }
            }
          }
        }
      }
    } catch (error) {
      // Игнорируем ошибки мониторинга
    }
  }

  function parseEtime(etime) {
    // Парсим время из формата ps etime (DD-HH:MM:SS или HH:MM:SS или MM:SS)
    try {
      if (etime.includes('-')) {
        // DD-HH:MM:SS
        const [days, time] = etime.split('-');
        const [hours, minutes, seconds] = time.split(':').map(Number);
        return (parseInt(days, 10) * 86400 + hours * 3600 + minutes * 60 + seconds) * 1000;
      } else {
        const parts = etime.split(':').map(Number);
        if (parts.length === 3) {
          // HH:MM:SS
          const [hours, minutes, seconds] = parts;
          return (hours * 3600 + minutes * 60 + seconds) * 1000;
        } else if (parts.length === 2) {
          // MM:SS
          const [minutes, seconds] = parts;
          return (minutes * 60 + seconds) * 1000;
        }
      }
    } catch {
      return 0;
    }
    return 0;
  }

  // Запускаем периодическую проверку
  setInterval(checkWorkers, CHECK_INTERVAL_MS);
  console.log(`[Worker Monitor] Мониторинг worker процессов запущен (проверка каждые ${CHECK_INTERVAL_MS / 1000} секунд)`);
}

// Явно устанавливаем NODE_ENV=production если не установлен
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = 'production';
}

// Убеждаемся что мы в production режиме
if (process.env.NODE_ENV !== 'production') {
  console.warn('[Server Init] ⚠️  ВНИМАНИЕ: NODE_ENV не установлен в production!');
  console.warn('[Server Init] Устанавливаем NODE_ENV=production принудительно');
  process.env.NODE_ENV = 'production';
}

// Отключаем все dev-фичи Next.js
process.env.NEXT_TELEMETRY_DISABLED = '1';

// Инициализируем кеш только в production
if (process.env.NODE_ENV === 'production') {
  initImageCache();
  
  // Запускаем мониторинг worker процессов (упрощенная версия)
  startWorkerMonitoring();
}

// Запускаем оригинальный server.js
const serverPath = path.join(__dirname, 'server.js');
if (!fs.existsSync(serverPath)) {
  console.error('[Server Init] Ошибка: server.js не найден');
  process.exit(1);
}

console.log('[Server Init] ✅ Запуск сервера в режиме:', process.env.NODE_ENV);

// Перехватываем необработанные ошибки подключения чтобы предотвратить падение сервера
process.on('uncaughtException', (error) => {
  // Игнорируем ошибки подключения к несуществующим портам (ECONNREFUSED)
  if (error.code === 'ECONNREFUSED' || error.message?.includes('ECONNREFUSED')) {
    console.error('[Server Init] ⚠️  Ошибка подключения (игнорируется):', error.message);
    console.error('[Server Init] Это может быть попытка подключения к dev server в production режиме');
    return; // Не прерываем работу сервера
  }
  
  // Для остальных ошибок логируем и перезапускаем
  console.error('[Server Init] ❌ Критическая ошибка:', error);
  process.exit(1);
});

// Перехватываем необработанные promise rejections
process.on('unhandledRejection', (reason, promise) => {
  const errorMessage = reason?.message || String(reason);
  
  // Игнорируем ошибки подключения к несуществующим портам
  if (errorMessage.includes('ECONNREFUSED') || errorMessage.includes('38559')) {
    console.error('[Server Init] ⚠️  Промис отклонен (игнорируется):', errorMessage);
    console.error('[Server Init] Это может быть попытка подключения к dev server в production режиме');
    return; // Не прерываем работу сервера
  }
  
  console.error('[Server Init] ⚠️  Необработанное отклонение промиса:', reason);
});

require(serverPath);

