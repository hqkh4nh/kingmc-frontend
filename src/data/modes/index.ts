import { battleRoyale } from './battle-royale'
import { kingsmp } from './kingsmp'
import { megaEarth } from './mega-earth'
import type { ModeContent, ModeId } from './types'

export const modes: Record<ModeId, ModeContent> = {
  kingsmp,
  'mega-earth': megaEarth,
  'battle-royale': battleRoyale,
}

export function getModeById(id: string): ModeContent | undefined {
  return modes[id as ModeId]
}

export const MODE_IDS: ModeId[] = ['kingsmp', 'mega-earth', 'battle-royale']

export type { ModeContent, ModeFeature, ModeId, Rank } from './types'
