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
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  reactStrictMode: true,
  output: 'standalone',
  images: {
    // 2 hours
    minimumCacheTTL: 2 * 60 * 60,
    domains: ['127.0.0.1'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '0.0.0.0',
        port: '1337',
        pathname: '*',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '*',
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '1337',
        pathname: '*',
      },
      ...['http', 'https'].map((protocol) => ({
        protocol,
        hostname: 'admin.molodost.club',
        port: '',
        pathname: '*',
      })),
    ],
  },
};

module.exports = withBundleAnalyzer(withVanillaExtract(nextConfig));
