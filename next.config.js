/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // GitHub Pages configuration
  basePath: '/mutai-enterprise',
  assetPrefix: '/mutai-enterprise/',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
