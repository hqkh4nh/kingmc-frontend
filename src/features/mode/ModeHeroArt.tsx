'use client'

import Image from 'next/image'
import { useTilt } from '@/hooks/useTilt'

interface Props {
  src: string
  alt: string
  /** CSS color for the corner wash (a mode accent var). */
  accent: string
}

/**
 * Framed hero artwork: a double-bezel edge-lit plate with pointer tilt. Client
 * leaf so the server hero stays static. Tilt no-ops under reduced-motion / touch.
 */
export default function ModeHeroArt({ src, alt, accent }: Props) {
  const ref = useTilt<HTMLDivElement>({ max: 5, scale: 1.02 })
  return (
    <div className="[perspective:1200px]">
      <div ref={ref} className="bg-surface/40 shadow-hard rounded-lg p-2 will-change-transform">
        <div className="relative aspect-[16/10] overflow-hidden rounded-md lg:aspect-[7/8]">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
            priority
          />
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background: `linear-gradient(155deg, transparent 42%, color-mix(in srgb, ${accent} 55%, transparent) 125%)`,
            }}
          />
        </div>
      </div>
    </div>
  )
}
