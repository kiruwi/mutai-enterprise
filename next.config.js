/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Removed 'output: export' for Vercel deployment
  images: {
    domains: ['vercel.com'], // Add any external domains you'll load images from
  },
  // Keeping trailingSlash for consistency with current URLs
  trailingSlash: true,
};

module.exports = nextConfig;
