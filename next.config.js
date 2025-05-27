/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Désactive ESLint pendant le build
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Ignore les erreurs TypeScript pendant le build (optionnel)
    ignoreBuildErrors: false,
  },
}

module.exports = nextConfig 