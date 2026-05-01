import type { StaticImageData } from 'next/image'

import type { ChipColor, IconName } from '@/config/site'

export type ModeId = 'kingsmp' | 'mega-earth' | 'battle-royale'

export interface ModeContent {
  id: ModeId
  name: string
  tagline: string
  hero: {
    badge?: { label: string; color: ChipColor }
    backgroundImage: string | StaticImageData
    longDescription: string
    icon: IconName
  }
  quickInfo: {
    versions: string
    devices: 'pc-only' | 'pc-mobile'
    pvp?: 'on' | 'off'
    difficulty?: string
    keepInventory?: boolean
    notes?: string[]
  }
  quickStart?: {
    welcomeTitle: string
    welcomeBody: string
    starterCommands: { cmd: string; desc: string }[]
  }
  features?: ModeFeature[]
  commands?: { category: string; items: { cmd: string; desc: string }[] }[]
  ranks?: Rank[]
  rules?: { title: string; items: string[] }[]
  pets?: PetsInfo
}

export interface ModeFeature {
  title: string
  body: string
  command?: string
  cta?: { label: string; href?: string }
}

export interface Rank {
  id: string
  label: string
  prefix?: string
  accent?: string // tailwind gradient string vd 'from-gold/30 to-gold/10'
  price?: string
  requires?: string
  benefits: string[]
  extra?: string[]
  joinMessage?: string
  preview?: string
  duration?: 'permanent' | 'monthly'
}

export interface PetsInfo {
  description: string
  hint: string
  tiers: { rarity: string; percent: number; description: string; tone: 'moss' | 'lapis' | 'gold' }[]
}
