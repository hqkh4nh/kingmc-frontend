'use client'

import { useRef } from 'react'
import Button from '@/components/client/Button'
import Icon from '@/components/server/Icon'
import { siteConfig } from '@/config/site'
import { useCopyIp } from '@/hooks/useCopyIp'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

/**
 * Wraps a child in a magnetic field: the element drifts a fraction of the way
 * toward the cursor while hovered, then springs back. Off under reduced-motion.
 */
function Magnetic({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLSpanElement>(null)
  const reduced = usePrefersReducedMotion()

  const onMove = (e: React.PointerEvent<HTMLSpanElement>) => {
    if (reduced) return
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const x = e.clientX - (r.left + r.width / 2)
    const y = e.clientY - (r.top + r.height / 2)
    el.style.transform = `translate3d(${x * 0.25}px, ${y * 0.35}px, 0)`
  }
  const reset = () => {
    const el = ref.current
    if (el) el.style.transform = 'translate3d(0,0,0)'
  }

  return (
    <span
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={reset}
      className="inline-flex transition-transform duration-500 ease-fluid will-change-transform"
    >
      {children}
    </span>
  )
}

export default function HeroCTA() {
  const playNow = useCopyIp({ ip: 'kingmc.vn', scrollToId: 'join-guide' })
  return (
    <div className="animate-rise mt-stack-md flex flex-wrap items-center justify-center gap-3 [animation-delay:560ms]">
      <Magnetic>
        <Button variant="primary" size="lg" onClick={playNow} className="pr-2.5">
          Chơi ngay
          {/* Button-in-button trailing icon — nested circle, kinetic on hover */}
          <span className="bg-gold-ink/15 ml-1 flex h-9 w-9 items-center justify-center rounded-full transition-all duration-500 ease-fluid group-hover:translate-x-0.5 group-hover:-translate-y-px group-hover:scale-105">
            <Icon name="arrow-right" size={18} />
          </span>
        </Button>
      </Magnetic>
      <a
        href={siteConfig.social.discord}
        target="_blank"
        rel="noopener noreferrer"
        className="group rounded-pill text-paper inline-flex h-14 items-center gap-2.5 bg-transparent px-7 text-[15px] font-medium shadow-[0_0_0_1px_rgba(245,239,226,0.18)_inset] transition-all duration-200 ease-out hover:-translate-y-px hover:shadow-[0_0_0_1px_rgba(220,184,116,0.5)_inset,0_8px_24px_-8px_rgba(0,0,0,0.4)] active:scale-[0.97]"
      >
        <Icon
          name="discord"
          size={18}
          className="text-on-surface-muted group-hover:text-accent-bright transition-colors"
        />
        Tham gia Discord
      </a>
    </div>
  )
}
