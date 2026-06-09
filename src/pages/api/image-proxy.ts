import type { NextApiRequest, NextApiResponse } from 'next';
// Импортируем напрямую, а не через index.ts (чтобы избежать попадания в клиентский бандл)
import { validateImageSize, isValidImageUrl } from '../../utils/imageValidation';

/**
 * API route для проксирования изображений с проверками и таймаутами
 * Используется для безопасной обработки изображений с ограничениями
 */

const IMAGE_TIMEOUT_MS = 30000; // 30 секунд
const MAX_SIZE_MB = 10;
const MAX_WIDTH = 4000;
const MAX_HEIGHT = 4000;
const UPSTREAM_CONNECT_TIMEOUT_MS = 10000;

type Data = {
  error?: string;
  message?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | Buffer>
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { url } = req.query;

  if (!url || typeof url !== 'string') {
    return res.status(400).json({ error: 'URL изображения обязателен' });
  }

  if (!isValidImageUrl(url)) {
    return res.status(400).json({ error: 'Недопустимый формат URL изображения' });
  }

  try {
    // Создаем таймаут
    const timeoutPromise = new Promise<never>((_, reject) => {
      setTimeout(() => {
        reject(new Error('Таймаут при загрузке изображения (30 секунд)'));
      }, IMAGE_TIMEOUT_MS);
    });

    // Валидация размера изображения
    const validationPromise = validateImageSize(url, {
      maxSizeMB: MAX_SIZE_MB,
      maxWidth: MAX_WIDTH,
      maxHeight: MAX_HEIGHT,
    });

    // Выполняем валидацию с таймаутом
    const validation = await Promise.race([validationPromise, timeoutPromise]);

    if (!validation.valid) {
      console.warn(`[Image Proxy] Изображение не прошло валидацию: ${url}, ошибка: ${validation.error}`);
      return res.status(400).json({ 
        error: validation.error || 'Изображение не прошло валидацию',
      });
    }

    const controller = new AbortController();
    const connectTimeout = setTimeout(() => {
      controller.abort('Upstream image request timed out');
    }, UPSTREAM_CONNECT_TIMEOUT_MS);

    // Загружаем изображение с таймаутом
    const fetchPromise = fetch(url, { signal: controller.signal }).then(async (response) => {
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.startsWith('image/')) {
        throw new Error('Ответ не является изображением');
      }

      const buffer = await response.arrayBuffer();
      return { buffer: Buffer.from(buffer), contentType };
    });

    const imageData = await Promise.race([fetchPromise, timeoutPromise]);
    clearTimeout(connectTimeout);

    // Устанавливаем заголовки и отправляем изображение
    res.setHeader('Content-Type', imageData.contentType);
    res.setHeader('Cache-Control', 'public, max-age=604800, s-maxage=604800');
    res.send(imageData.buffer);
  } catch (error) {
    if (error instanceof Error && (error.name === 'AbortError' || error.message.includes('timed out'))) {
      return res.status(504).json({
        error: 'Таймаут соединения с источником изображения',
        message: 'Источник изображения не ответил вовремя.',
      });
    }

    console.error('[Image Proxy] Ошибка при обработке изображения:', error);

    if (error instanceof Error && error.message.includes('Таймаут')) {
      console.warn(`[Image Proxy] Таймаут при обработке изображения: ${url}`);
      return res.status(504).json({ 
        error: 'Таймаут при загрузке изображения',
        message: 'Изображение слишком долго загружается. Попробуйте позже или используйте другое изображение.',
      });
    }

    return res.status(500).json({ 
      error: 'Ошибка при загрузке изображения',
      message: error instanceof Error ? error.message : 'Неизвестная ошибка',
    });
  }
}

