/**
 * Утилиты для валидации изображений перед обработкой
 */

export interface ImageValidationResult {
  valid: boolean;
  error?: string;
  width?: number;
  height?: number;
  sizeBytes?: number;
}

export interface ImageValidationOptions {
  maxSizeMB?: number;
  maxWidth?: number;
  maxHeight?: number;
}

const DEFAULT_MAX_SIZE_MB = 10;
const DEFAULT_MAX_WIDTH = 4000;
const DEFAULT_MAX_HEIGHT = 4000;
const DEFAULT_MAX_SIZE_BYTES = DEFAULT_MAX_SIZE_MB * 1024 * 1024;

/**
 * Проверяет размер файла изображения
 */
export async function validateImageSize(
  imageUrl: string,
  options: ImageValidationOptions = {}
): Promise<ImageValidationResult> {
  const {
    maxSizeMB = DEFAULT_MAX_SIZE_MB,
    maxWidth = DEFAULT_MAX_WIDTH,
    maxHeight = DEFAULT_MAX_HEIGHT,
  } = options;

  const maxSizeBytes = maxSizeMB * 1024 * 1024;

  try {
    // Получаем информацию о размере файла через HEAD запрос
    const response = await fetch(imageUrl, { method: 'HEAD' });
    
    if (!response.ok) {
      return {
        valid: false,
        error: `Не удалось получить информацию об изображении: ${response.statusText}`,
      };
    }

    const contentLength = response.headers.get('content-length');
    if (!contentLength) {
      // Если нет заголовка Content-Length, пытаемся получить размер через GET
      return await validateImageSizeByFetching(imageUrl, maxSizeBytes, maxWidth, maxHeight);
    }

    const sizeBytes = parseInt(contentLength, 10);
    if (isNaN(sizeBytes)) {
      return {
        valid: false,
        error: 'Не удалось определить размер изображения',
      };
    }

    if (sizeBytes > maxSizeBytes) {
      return {
        valid: false,
        error: `Размер изображения (${(sizeBytes / 1024 / 1024).toFixed(2)}MB) превышает максимальный (${maxSizeMB}MB)`,
        sizeBytes,
      };
    }

    // Проверяем размеры изображения (требуется загрузка изображения)
    const dimensions = await getImageDimensions(imageUrl);
    if (!dimensions) {
      return {
        valid: true, // Размер файла OK, но не удалось проверить размеры
        sizeBytes,
      };
    }

    if (dimensions.width > maxWidth || dimensions.height > maxHeight) {
      return {
        valid: false,
        error: `Разрешение изображения (${dimensions.width}x${dimensions.height}) превышает максимальное (${maxWidth}x${maxHeight})`,
        width: dimensions.width,
        height: dimensions.height,
        sizeBytes,
      };
    }

    return {
      valid: true,
      width: dimensions.width,
      height: dimensions.height,
      sizeBytes,
    };
  } catch (error) {
    console.error('[Image Validation] Ошибка при проверке размера изображения:', error);
    return {
      valid: false,
      error: error instanceof Error ? error.message : 'Неизвестная ошибка при проверке изображения',
    };
  }
}

/**
 * Проверяет размер изображения, загружая его (fallback)
 */
async function validateImageSizeByFetching(
  imageUrl: string,
  maxSizeBytes: number,
  maxWidth: number,
  maxHeight: number
): Promise<ImageValidationResult> {
  try {
    const response = await fetch(imageUrl);
    if (!response.ok) {
      return {
        valid: false,
        error: `Не удалось загрузить изображение: ${response.statusText}`,
      };
    }

    const contentLength = response.headers.get('content-length');
    if (contentLength) {
      const sizeBytes = parseInt(contentLength, 10);
      if (!isNaN(sizeBytes) && sizeBytes > maxSizeBytes) {
        return {
          valid: false,
          error: `Размер изображения превышает максимальный`,
          sizeBytes,
        };
      }
    }

    // Для проверки размеров нужно загрузить изображение
    const dimensions = await getImageDimensions(imageUrl);
    if (dimensions && (dimensions.width > maxWidth || dimensions.height > maxHeight)) {
      return {
        valid: false,
        error: `Разрешение изображения (${dimensions.width}x${dimensions.height}) превышает максимальное`,
        width: dimensions.width,
        height: dimensions.height,
      };
    }

    return {
      valid: true,
      width: dimensions?.width,
      height: dimensions?.height,
    };
  } catch (error) {
    return {
      valid: false,
      error: error instanceof Error ? error.message : 'Ошибка при загрузке изображения',
    };
  }
}

/**
 * Получает размеры изображения
 */
async function getImageDimensions(imageUrl: string): Promise<{ width: number; height: number } | null> {
  try {
    // В Node.js окружении можно использовать sharp для проверки размеров
    // Но для упрощения проверяем через загрузку изображения
    return new Promise((resolve) => {
      // Для браузерного окружения используем Image объект
      if (typeof window !== 'undefined') {
        const img = new Image();
        img.onload = () => {
          resolve({ width: img.width, height: img.height });
        };
        img.onerror = () => {
          resolve(null);
        };
        img.src = imageUrl;
      } else {
        // Для серверного окружения возвращаем null (размеры проверяются на уровне обработки)
        resolve(null);
      }
    });
  } catch (error) {
    console.error('[Image Validation] Ошибка при получении размеров изображения:', error);
    return null;
  }
}

/**
 * Проверяет URL изображения на валидность
 */
export function isValidImageUrl(url: string): boolean {
  if (!url || typeof url !== 'string') {
    return false;
  }

  try {
    const urlObj = new URL(url);
    const extension = urlObj.pathname.toLowerCase().split('.').pop();
    const validExtensions = ['jpg', 'jpeg', 'png', 'webp', 'gif', 'svg', 'avif'];
    
    return validExtensions.includes(extension || '');
  } catch {
    // Если не URL, проверяем как путь
    const extension = url.toLowerCase().split('.').pop();
    const validExtensions = ['jpg', 'jpeg', 'png', 'webp', 'gif', 'svg', 'avif'];
    return validExtensions.includes(extension || '');
  }
}

