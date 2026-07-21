'use client'

import Icon from '@/components/server/Icon'
import { useCopyIp } from '@/hooks/useCopyIp'

/**
 * Chunky "block button": a hard bottom shadow that collapses as the button is
 * pressed, so it reads as a physical Minecraft block being pushed in.
 */
export default function VoxelPlayButton() {
  const playNow = useCopyIp({ ip: 'kingmc.vn', scrollToId: 'voxel-modes' })
  return (
    <button
      onClick={playNow}
      className="bg-gold text-gold-ink focus-visible:ring-gold-bright/70 focus-visible:ring-offset-ink inline-flex h-14 items-center gap-2.5 rounded-lg px-9 text-[16px] font-bold tracking-wide uppercase shadow-[0_6px_0_0_var(--color-gold-deep),0_10px_20px_-6px_rgba(0,0,0,0.5)] transition-all duration-100 hover:brightness-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:translate-y-1.5 active:shadow-[0_1px_0_0_var(--color-gold-deep),0_4px_10px_-4px_rgba(0,0,0,0.5)]"
    >
      <Icon name="arrow-right" size={18} />
      Chơi ngay
    </button>
  )
}
