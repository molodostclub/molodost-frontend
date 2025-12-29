/**
 * Утилиты для мониторинга worker процессов Next.js
 * Отслеживает зависшие процессы и логирует их
 */

import * as os from 'os';
import * as child_process from 'child_process';

interface WorkerProcessInfo {
  pid: number;
  cpuTime: number;
  memory: number;
  command: string;
}

const MAX_CPU_TIME_MS = 5 * 60 * 1000; // 5 минут
const CHECK_INTERVAL_MS = 30000; // 30 секунд

let monitoringInterval: NodeJS.Timeout | null = null;
let isMonitoring = false;

/**
 * Получает информацию о процессах jest-worker
 */
function getWorkerProcesses(): WorkerProcessInfo[] {
  const processes: WorkerProcessInfo[] = [];

  try {
    // Используем ps для получения информации о процессах (работает в Linux/Unix)
    if (os.platform() === 'win32') {
      // На Windows используем tasklist
      return processes; // TODO: реализовать для Windows если необходимо
    }

    const psOutput = child_process.execSync(
      'ps -eo pid,etime,pcpu,rss,comm | grep jest-worker || true',
      { encoding: 'utf-8' }
    ).trim();

    if (!psOutput) {
      return processes;
    }

    const lines = psOutput.split('\n').filter(line => line.includes('jest-worker'));

    for (const line of lines) {
      const parts = line.trim().split(/\s+/);
      if (parts.length >= 5) {
        const pid = parseInt(parts[0], 10);
        if (!isNaN(pid)) {
          // Преобразуем CPU time из формата ps
          const cpuTime = parseCpuTime(parts[1]);
          const cpuPercent = parseFloat(parts[2]);
          const memoryKB = parseInt(parts[3], 10);

          processes.push({
            pid,
            cpuTime,
            memory: memoryKB * 1024, // Конвертируем в байты
            command: parts.slice(4).join(' '),
          });
        }
      }
    }
  } catch (error) {
    // Игнорируем ошибки при получении информации о процессах
    console.debug('[Worker Monitor] Ошибка при получении информации о процессах:', error);
  }

  return processes;
}

/**
 * Парсит время CPU из формата ps (HH:MM:SS или MM:SS)
 */
function parseCpuTime(timeStr: string): number {
  try {
    const parts = timeStr.split(':').map(Number);
    if (parts.length === 3) {
      // HH:MM:SS
      const [hours, minutes, seconds] = parts;
      return (hours * 3600 + minutes * 60 + seconds) * 1000;
    } else if (parts.length === 2) {
      // MM:SS
      const [minutes, seconds] = parts;
      return (minutes * 60 + seconds) * 1000;
    }
  } catch (error) {
    // Игнорируем ошибки парсинга
  }
  return 0;
}

/**
 * Завершает процесс по PID
 */
function killProcess(pid: number): boolean {
  try {
    process.kill(pid, 'SIGTERM');
    
    // Даем процессу время на завершение
    setTimeout(() => {
      try {
        process.kill(pid, 0); // Проверяем существование
        // Если процесс еще существует, принудительно завершаем
        process.kill(pid, 'SIGKILL');
      } catch {
        // Процесс уже завершен
      }
    }, 5000);

    return true;
  } catch (error) {
    console.error(`[Worker Monitor] Ошибка при завершении процесса ${pid}:`, error);
    return false;
  }
}

/**
 * Проверяет worker процессы и завершает зависшие
 */
function checkWorkerProcesses(): void {
  if (process.env.NODE_ENV !== 'production') {
    return; // Мониторинг только в production
  }

  try {
    const workers = getWorkerProcesses();

    for (const worker of workers) {
      if (worker.cpuTime > MAX_CPU_TIME_MS) {
        console.warn(
          `[Worker Monitor] ⚠️  Обнаружен зависший worker процесс: PID ${worker.pid}, ` +
          `CPU time: ${(worker.cpuTime / 1000 / 60).toFixed(2)} минут, ` +
          `Memory: ${(worker.memory / 1024 / 1024).toFixed(2)}MB`
        );

        const killed = killProcess(worker.pid);
        if (killed) {
          console.log(`[Worker Monitor] ✅ Завершен зависший worker процесс: PID ${worker.pid}`);
        } else {
          console.error(`[Worker Monitor] ❌ Не удалось завершить процесс: PID ${worker.pid}`);
        }
      }
    }
  } catch (error) {
    console.error('[Worker Monitor] Ошибка при проверке worker процессов:', error);
  }
}

/**
 * Запускает мониторинг worker процессов
 */
export function startWorkerMonitoring(): void {
  if (isMonitoring) {
    console.log('[Worker Monitor] Мониторинг уже запущен');
    return;
  }

  if (process.env.NODE_ENV !== 'production') {
    console.log('[Worker Monitor] Мониторинг отключен в dev режиме');
    return;
  }

  isMonitoring = true;
  console.log('[Worker Monitor] Запуск мониторинга worker процессов...');

  // Проверяем сразу при запуске
  checkWorkerProcesses();

  // Запускаем периодическую проверку
  monitoringInterval = setInterval(() => {
    checkWorkerProcesses();
  }, CHECK_INTERVAL_MS);

  console.log(`[Worker Monitor] Мониторинг запущен (проверка каждые ${CHECK_INTERVAL_MS / 1000} секунд)`);
}

/**
 * Останавливает мониторинг worker процессов
 */
export function stopWorkerMonitoring(): void {
  if (monitoringInterval) {
    clearInterval(monitoringInterval);
    monitoringInterval = null;
  }
  isMonitoring = false;
  console.log('[Worker Monitor] Мониторинг остановлен');
}

