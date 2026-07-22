import type { NextConfig } from 'next'
import bundleAnalyzer from '@next/bundle-analyzer'

const withBundleAnalyzer = bundleAnalyzer({ enabled: process.env.ANALYZE === 'true' })

const nextConfig: NextConfig = {
  output: 'standalone',
  cacheComponents: true,
  outputFileTracingIncludes: {
    '/og': [
      './assets/fonts/*.ttf',
      './assets/og/*',
      './public/og/bg.*',
      './public/images/logo-with-text.png',
    ],
  },
  experimental: {
    instantNavigationDevToolsToggle: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  poweredByHeader: false,
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/mode/battle-royale',
        destination: 'https://battleroyale.kingmc.vn',
        permanent: false,
      },
    ]
  },
}

export default withBundleAnalyzer(nextConfig)
