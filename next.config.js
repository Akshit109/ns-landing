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
  // Remove static export to enable API routes
  // output: 'export', // Commented out to enable API routes
  // Images optimization can be enabled with server-side rendering
  images: {
    unoptimized: true, // Keep this for now
  },
  // trailingSlash: true, // Not needed with server-side rendering
};

module.exports = nextConfig;
