import { cacheLife } from 'next/cache'
import { fetchKingmcStats, type KingmcStats } from '@/lib/api/kingmc'
import PlayerCountClient from './PlayerCountClient'

async function getStats(): Promise<KingmcStats | null> {
  'use cache'
  cacheLife({ revalidate: 30, expire: 300 })
  try {
    return await fetchKingmcStats()
  } catch {
    return null
  }
}

export default async function PlayerCountServer() {
  const stats = await getStats()
  return <PlayerCountClient initial={stats?.minecraft_player_count ?? null} />
}
