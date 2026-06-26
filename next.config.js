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
  experimental: {
    outputFileTracingIncludes: {
      '/_next/image': ['./node_modules/sharp/**/*', './node_modules/@img/**/*'],
    },
  },
  
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
    // Кеш оптимизированных вариантов на диске Next.js (для внешних/не-prebuild src)
    minimumCacheTTL: 2592000, // 30 дней
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Только WebP: AVIF-кодирование в 5–10× медленнее sharp, источники уже WebP после prebuild
    formats: ['image/webp'],
    dangerouslyAllowSVG: false,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    domains: process.env.NODE_ENV === 'production' ? [] : ['127.0.0.1'],
    remotePatterns: [],
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
          // Совпадает с minimumCacheTTL; для nginx см. комментарий в Dockerfile
          { key: 'Cache-Control', value: 'public, max-age=2592000, s-maxage=2592000, immutable' },
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
