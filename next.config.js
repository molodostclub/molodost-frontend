const NextBundleAnalyzer = require('@next/bundle-analyzer');
const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');

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
    domains: ['127.0.0.1'],
    remotePatterns: [
      { protocol: 'http', hostname: '0.0.0.0', port: '1337', pathname: '**' },
      { protocol: 'http', hostname: 'localhost', port: '1337', pathname: '**' },
      { protocol: 'http', hostname: '127.0.0.1', port: '1337', pathname: '**' },
      { protocol: 'https', hostname: 'admin.molodost.club', port: '', pathname: '**' },
      { protocol: 'http', hostname: 'admin.molodost.club', port: '1337', pathname: '**' },
    ],
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

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [{ loader: '@svgr/webpack', options: { svgo: true } }],
    });

    return config;
  },
};

module.exports = withBundleAnalyzer(withVanillaExtract(nextConfig));
