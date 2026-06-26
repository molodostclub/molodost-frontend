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
  staticPageGenerationTimeout: 90,
  
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
    remotePatterns: [],
    // Отключаем unoptimized в production - используем только оптимизацию Next.js
    unoptimized: false,
  },

  async redirects() {
    return [
      { source: '/nash-altay', destination: '/manjerok', permanent: true },
    ];
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
      {
        source: '/images/:path*',
        headers: [
          // Кеширование статических изображений на 1 год (они уже оптимизированы в билде)
          { key: 'Cache-Control', value: 'public, max-age=31536000, s-maxage=31536000, immutable' },
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
