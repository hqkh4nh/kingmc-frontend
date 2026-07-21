import type { MetadataRoute } from 'next'
import { env } from '@/lib/env'

export default function robots(): MetadataRoute.Robots {
  return {
    // /design/* holds internal design-preview variants — keep them out of crawlers.
    rules: [{ userAgent: '*', allow: '/', disallow: '/design/' }],
    sitemap: `${env.NEXT_PUBLIC_SITE_URL}/sitemap.xml`,
  }
}
