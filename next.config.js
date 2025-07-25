// Next.js configuration
// Set NEXT_STATIC_EXPORT=true during GitHub Pages build to enable static export
/** @type {import('next').NextConfig} */
const isStaticExport = process.env.NEXT_STATIC_EXPORT === 'true';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Static export is handled via Netlify build (see netlify.toml)
  images: {
    domains: [], // Add any external domains you'll load images from
    ...(isStaticExport && { unoptimized: true }),
  },
  // Static HTML export when building for GitHub Pages
  ...(isStaticExport && { output: 'export' }),
  // Trailing slash keeps internal links consistent for Pages & Vercel
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: '/news',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
