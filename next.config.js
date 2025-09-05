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
    minimumCacheTTL: 31536000,
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
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
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
