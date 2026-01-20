const NextBundleAnalyzer = require('@next/bundle-analyzer');
const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');
const webpack = require('webpack');
const path = require('path');

const withVanillaExtract = createVanillaExtractPlugin();
const withAnalyzer = !!process.env.ANALYZE;
const withBundleAnalyzer = NextBundleAnalyzer({
  enabled: withAnalyzer,
  openAnalyzer: withAnalyzer,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  output: 'standalone',
  
  // Явно отключаем dev-режим в production
  // Это предотвращает попытки подключения к dev server на порту 38559
  ...(process.env.NODE_ENV === 'production' && {
    // Отключаем все dev-специфичные фичи в production
    swcMinify: true,
    compiler: {
      removeConsole: process.env.NODE_ENV === 'production' ? {
        exclude: ['error', 'warn'],
      } : false,
    },
  }),

  images: {
    // Уменьшаем время кеширования с года до 7 дней для лучшей ротации
    minimumCacheTTL: 604800, // 7 дней в секундах (было 31536000 - год)
    // Оптимизируем размеры изображений - оставляем только нужные
    // Ограничиваем максимальные размеры для предотвращения обработки слишком больших изображений
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048], // Максимум 2048px
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // Максимум 384px
    formats: ['image/webp', 'image/avif'],
    // Ограничиваем качество для уменьшения нагрузки
    dangerouslyAllowSVG: false,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // В production используем только production домены
    domains: process.env.NODE_ENV === 'production' ? [] : ['127.0.0.1'],
    remotePatterns: [
      // В production разрешаем только production домены
      ...(process.env.NODE_ENV === 'production' 
        ? [
            { protocol: 'https', hostname: 'admin.molodost.club', port: '', pathname: '**' },
          ]
        : [
            { protocol: 'http', hostname: '0.0.0.0', port: '1337', pathname: '**' },
            { protocol: 'http', hostname: 'localhost', port: '1337', pathname: '**' },
            { protocol: 'http', hostname: '127.0.0.1', port: '1337', pathname: '**' },
            { protocol: 'https', hostname: 'admin.molodost.club', port: '', pathname: '**' },
            { protocol: 'http', hostname: 'admin.molodost.club', port: '1337', pathname: '**' },
          ]
      ),
    ],
    // Отключаем unoptimized в production - используем только оптимизацию Next.js
    unoptimized: false,
  },

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
      {
        source: '/_next/image',
        headers: [
          // Уменьшаем время кеширования в браузере до 7 дней (совпадает с minimumCacheTTL)
          { key: 'Cache-Control', value: 'public, max-age=604800, s-maxage=604800, immutable' },
          { key: 'X-Robots-Tag', value: 'noindex, nofollow' },
        ],
      },
    ];
  },

  webpack(config, { isServer }) {
    // Исключаем Node.js модули из клиентского бандла
    if (!isServer) {
      // Настраиваем fallback для Node.js модулей
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        child_process: false,
        path: false,
        os: false,
      };

      // Игнорируем импорты Node.js модулей везде
      if (!config.plugins) {
        config.plugins = [];
      }
      config.plugins.push(
        new webpack.IgnorePlugin({
          resourceRegExp: /^(fs|child_process|path|os)$/,
        })
      );

      // Исключаем Node.js-специфичные утилиты из клиентского бандла
      // Заменяем на stub-файлы чтобы избежать ошибок импорта
      const originalAlias = config.resolve.alias || {};
      config.resolve.alias = {
        ...originalAlias,
      };
      
      // Заменяем только при точном совпадении пути
      const utilsPath = path.resolve(__dirname, 'src/utils');
      config.resolve.alias['@utils/imageCache$'] = path.join(utilsPath, 'imageCache.stub.ts');
      config.resolve.alias['@utils/workerMonitor$'] = path.join(utilsPath, 'workerMonitor.stub.ts');
      config.resolve.alias['@utils/initImageCache$'] = path.join(utilsPath, 'initImageCache.stub.ts');
    }

    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [{ loader: '@svgr/webpack', options: { svgo: true } }],
    });

    return config;
  },
};

module.exports = withBundleAnalyzer(withVanillaExtract(nextConfig));
