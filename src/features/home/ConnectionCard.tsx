'use client'

import CopyButton from '@/components/client/CopyButton'
import { siteConfig } from '@/config/site'
import { useCountUp } from '@/hooks/useCountUp'

const formatVi = new Intl.NumberFormat('vi-VN')

interface Props {
  initialPlayerCount: number | null
}

export default function ConnectionCard({ initialPlayerCount }: Props) {
  const { mainIp } = siteConfig.server
  const isServerStarting = initialPlayerCount === 0
  const hasCount = typeof initialPlayerCount === 'number' && initialPlayerCount > 0
  const animated = useCountUp(hasCount ? initialPlayerCount : null)
  const countText = hasCount && animated !== null ? formatVi.format(animated) : null

  return (
    <div className="rounded-pill bg-paper/[0.04] inline-flex flex-wrap items-center gap-4 py-3 pr-3 pl-6 leading-none shadow-[0_0_0_1px_rgba(245,239,226,0.12)_inset,0_12px_40px_-12px_rgba(0,0,0,0.65)] backdrop-blur-md">
      <span className="flex items-center gap-3">
        <span className="relative flex h-2.5 w-2.5">
          <span className="bg-moss absolute inset-0 rounded-full" />
          <span className="bg-moss/60 absolute inset-0 animate-ping rounded-full" />
        </span>
        {initialPlayerCount === null && (
          <span
            className="bg-paper/10 inline-block h-4 w-12 animate-pulse rounded"
            aria-hidden="true"
          />
        )}
        {isServerStarting && (
          <span className="text-on-surface-muted text-[14px] italic">Server đang khởi động...</span>
        )}
        {countText && (
          <span className="text-paper text-[16px] font-semibold tabular-nums">
            {countText}
            <span className="text-on-surface-faded ml-2 text-[14px] font-normal">đang chơi</span>
          </span>
        )}
      </span>
      <span aria-hidden="true" className="bg-paper/15 hidden h-5 w-px sm:block" />
      <code className="text-paper font-mono text-[16px] font-medium tracking-tight">{mainIp}</code>
      <CopyButton text={mainIp} />
    </div>
  )
}
