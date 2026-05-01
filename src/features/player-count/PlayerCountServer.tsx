import { cacheLife } from 'next/cache'
import { fetchKingmcStats } from '@/lib/api/kingmc'
import PlayerCountClient from './PlayerCountClient'

async function getStats() {
  'use cache'
  cacheLife({ revalidate: 30, expire: 300 })
  return fetchKingmcStats()
}

export default async function PlayerCountServer() {
  let initial: number | null = null
  try {
    const stats = await getStats()
    initial = stats.minecraft_player_count
  } catch {
    initial = null
  }
  return <PlayerCountClient initial={initial} />
}
