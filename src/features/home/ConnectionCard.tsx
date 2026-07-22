'use client'

import CopyButton from '@/components/client/CopyButton'
import { siteConfig } from '@/config/site'
import { useCountUp } from '@/hooks/useCountUp'

const formatVi = new Intl.NumberFormat('vi-VN')

interface Props {
  initialPlayerCount: number | null
}

/**
 * Per-character render keyed by position-from-the-right, so a digit that changes
 * on a live refetch remounts and replays the gold flash while untouched digits
 * stay still. Right-aligned keys keep the units digit stable when 999 -> 1.000.
 */
function FlashDigits({ text }: { text: string }) {
  const chars = Array.from(text)
  const last = chars.length - 1
  return (
    <span className="text-gold font-mono text-[1.75rem] leading-none font-medium tracking-tight tabular-nums">
      {chars.map((ch, i) => (
        <span key={`${last - i}-${ch}`} className="animate-digit-flash inline-block">
          {ch}
        </span>
      ))}
    </span>
  )
}

export default function ConnectionCard({ initialPlayerCount }: Props) {
  const { mainIp } = siteConfig.server
  const isServerStarting = initialPlayerCount === 0
  const hasCount = typeof initialPlayerCount === 'number' && initialPlayerCount > 0
  const animated = useCountUp(hasCount ? initialPlayerCount : null, { durationMs: 900 })
  const countText = hasCount && animated !== null ? formatVi.format(animated) : null

  return (
    <div className="edge-lit bg-paper/[0.04] inline-flex flex-wrap items-center gap-x-5 gap-y-3 rounded-sm px-5 py-3.5 leading-none backdrop-blur-md">
      <span className="flex items-center gap-3.5">
        <span className="bg-live animate-live-blink h-2.5 w-2.5 rounded-full" />
        {initialPlayerCount === null && (
          <span
            className="bg-paper/10 inline-block h-7 w-20 animate-pulse rounded"
            aria-hidden="true"
          />
        )}
        {isServerStarting && (
          <span className="text-on-surface-muted text-[14px] italic">Server đang khởi động...</span>
        )}
        {countText && (
          <span className="flex items-baseline gap-2.5">
            <FlashDigits text={countText} />
            <span className="eyebrow text-on-surface-faded">Đang chơi</span>
          </span>
        )}
      </span>
      <span aria-hidden="true" className="bg-paper/15 hidden h-8 w-px sm:block" />
      <span className="flex items-center gap-2">
        <code className="text-paper font-mono text-[16px] font-medium tracking-tight">
          {mainIp}
        </code>
        <CopyButton text={mainIp} />
      </span>
    </div>
  )
}
