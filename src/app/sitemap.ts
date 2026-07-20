import type { MetadataRoute } from 'next'
import { LEGAL_SLUGS } from '@/data/legal'
import { env } from '@/lib/env'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [
    { url: `${env.NEXT_PUBLIC_SITE_URL}/`, lastModified: now, priority: 1.0 },
    { url: `${env.NEXT_PUBLIC_SITE_URL}/mode/kingsmp`, lastModified: now, priority: 0.9 },
    { url: `${env.NEXT_PUBLIC_SITE_URL}/mode/mega-earth`, lastModified: now, priority: 0.9 },
    ...LEGAL_SLUGS.map((slug) => ({
      url: `${env.NEXT_PUBLIC_SITE_URL}/legal/${slug}`,
      lastModified: now,
      priority: 0.5,
    })),
  ]
}
