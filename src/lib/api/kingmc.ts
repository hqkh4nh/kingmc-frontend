import 'server-only'
import { env } from '@/lib/env'

export interface KingmcStats {
  minecraft_player_count: number
  discord_member_count: number
  discord_member_online_count: number
  registered_player_count: number
  timestamp: string
}

export async function fetchKingmcStats(): Promise<KingmcStats> {
  const res = await fetch(`${env.KINGMC_API_BASE}/api/kingmc`, {
    signal: AbortSignal.timeout(5000),
    headers: { accept: 'application/json' },
  })
  if (!res.ok) throw new Error(`upstream ${res.status}`)
  return res.json()
}
