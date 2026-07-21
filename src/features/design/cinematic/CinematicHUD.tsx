'use client'

import { useQuery } from '@tanstack/react-query'
import CopyButton from '@/components/client/CopyButton'
import { siteConfig } from '@/config/site'
import { useCountUp } from '@/hooks/useCountUp'

const formatVi = new Intl.NumberFormat('vi-VN')

/**
 * Launcher-style HUD readout. Reuses the SAME react-query key + endpoint as the
 * editorial player count (no duplicate source), presented as a HUD with corner
 * brackets, a count-up figure and the connect address.
 */
export default function CinematicHUD() {
  const { mainIp } = siteConfig.server
  const { data } = useQuery({
    queryKey: ['kingmc-stats'],
    queryFn: async (): Promise<{ minecraft_player_count: number }> => {
      const r = await fetch('/api/kingmc', { signal: AbortSignal.timeout(5000) })
      if (!r.ok) throw new Error(`api ${r.status}`)
      return r.json()
    },
    refetchInterval: 30_000,
    staleTime: 30_000,
  })

  const count = data?.minecraft_player_count ?? null
  const hasCount = typeof count === 'number' && count > 0
  const animated = useCountUp(hasCount ? count : null)

  return (
    <div className="relative inline-flex flex-wrap items-center gap-x-8 gap-y-3 px-6 py-4">
      {/* HUD corner brackets */}
      <span className="border-accent/60 pointer-events-none absolute top-0 left-0 h-4 w-4 border-t border-l" />
      <span className="border-accent/60 pointer-events-none absolute top-0 right-0 h-4 w-4 border-t border-r" />
      <span className="border-accent/60 pointer-events-none absolute bottom-0 left-0 h-4 w-4 border-b border-l" />
      <span className="border-accent/60 pointer-events-none absolute right-0 bottom-0 h-4 w-4 border-b border-r" />

      <span className="flex items-center gap-3">
        <span className="relative flex h-2.5 w-2.5">
          <span className="bg-accent absolute inset-0 rounded-full" />
          <span className="bg-accent/60 absolute inset-0 animate-ping rounded-full" />
        </span>
        <span className="flex flex-col leading-none">
          <span className="text-on-surface-faded font-mono text-[10px] tracking-[0.2em] uppercase">
            Online
          </span>
          <span className="text-paper mt-1 font-mono text-[22px] font-semibold tabular-nums">
            {animated !== null ? formatVi.format(animated) : '····'}
          </span>
        </span>
      </span>

      <span aria-hidden="true" className="bg-paper/15 hidden h-8 w-px sm:block" />

      <span className="flex items-center gap-3">
        <span className="flex flex-col leading-none">
          <span className="text-on-surface-faded font-mono text-[10px] tracking-[0.2em] uppercase">
            Connect
          </span>
          <code className="text-accent-bright mt-1 font-mono text-[18px] font-medium tracking-tight">
            {mainIp}
          </code>
        </span>
        <CopyButton text={mainIp} />
      </span>
    </div>
  )
}
