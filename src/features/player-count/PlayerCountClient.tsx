'use client'

import { useQuery } from '@tanstack/react-query'
import ConnectionCard from '@/features/home/ConnectionCard'

interface KingmcStats {
  minecraft_player_count: number
}

export default function PlayerCountClient({ initial }: { initial: number | null }) {
  const { data } = useQuery({
    queryKey: ['kingmc-stats'],
    queryFn: async (): Promise<KingmcStats> => {
      const r = await fetch('/api/kingmc', { signal: AbortSignal.timeout(5000) })
      if (!r.ok) throw new Error(`api ${r.status}`)
      return r.json()
    },
    initialData: initial !== null ? { minecraft_player_count: initial } : undefined,
    refetchInterval: 30_000,
    staleTime: 30_000,
  })

  return <ConnectionCard initialPlayerCount={data?.minecraft_player_count ?? initial} />
}
