import { z } from 'zod'

const schema = z.object({
  NEXT_PUBLIC_SITE_URL: z.string().url().default('https://kingmc.vn'),
  KINGMC_API_BASE: z.string().url().default('https://api.kingmc.vn'),
})

const parsed = schema.safeParse({
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  KINGMC_API_BASE: process.env.KINGMC_API_BASE,
})

if (!parsed.success) {
  console.error('Invalid environment variables:', parsed.error.flatten().fieldErrors)
  throw new Error('Environment validation failed')
}

export const env = parsed.data
