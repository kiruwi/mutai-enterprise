/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  // Conditional basePath and assetPrefix for GitHub Pages
  basePath: isProd ? '/mutai-enterprise' : '',
  assetPrefix: isProd ? '/mutai-enterprise/' : '',
  images: {
    unoptimized: true, // Required for static export
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp'],
    minimumCacheTTL: 60
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'
  },
  trailingSlash: true,
  experimental: {
    optimizePackageImports: ['@heroicons/react']
  }
};

export default nextConfig;
