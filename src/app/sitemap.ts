import type { MetadataRoute } from 'next'
import { env } from '@/lib/env'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [
    { url: `${env.NEXT_PUBLIC_SITE_URL}/`, lastModified: now, priority: 1.0 },
    { url: `${env.NEXT_PUBLIC_SITE_URL}/mode/kingsmp`, lastModified: now, priority: 0.9 },
    { url: `${env.NEXT_PUBLIC_SITE_URL}/mode/mega-earth`, lastModified: now, priority: 0.9 },
    { url: `${env.NEXT_PUBLIC_SITE_URL}/mode/battle-royale`, lastModified: now, priority: 0.9 },
  ]
}
