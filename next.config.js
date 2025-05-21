/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ignore build errors and continue building
  typescript: {
    // Ignore TypeScript errors during build
    ignoreBuildErrors: true,
  },
  eslint: {
    // Ignore ESLint errors during build
    ignoreDuringBuilds: true,
  },
  // Output in a format compatible with Netlify
  output: 'export',
  // Images optimization needs to be handled differently with 'export'
  images: {
    unoptimized: true,
  },
  // Don't generate a 404 page as Netlify will handle it
  trailingSlash: true,
};

module.exports = nextConfig;
