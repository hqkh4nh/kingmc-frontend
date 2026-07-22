'use client'

import { useParallax } from '@/hooks/useParallax'

/**
 * The layered, motion-reactive backdrop behind the hero: a parallax photo plate,
 * a slow-drifting volumetric light beam, and a settling scrim. All layers are
 * GPU-only transforms and go still under reduced-motion (handled inside useParallax).
 */
export default function HeroBackdrop() {
  const photo = useParallax<HTMLDivElement>({ speed: -0.12, pointer: 18 })
  const glow = useParallax<HTMLDivElement>({ speed: -0.28, pointer: 40 })

  return (
    <div aria-hidden="true" className="absolute inset-0 -z-20 overflow-hidden">
      {/* Photo plate — slightly oversized so parallax never reveals an edge */}
      <div
        ref={photo}
        className="absolute -inset-x-8 -top-16 bottom-0 bg-cover bg-center [filter:saturate(0.9)] will-change-transform"
        style={{ backgroundImage: 'url(/images/hero-background.png)' }}
      />
      {/* Cool grade — pulls the warm photo toward the blue-black palette */}
      <div className="absolute inset-0 bg-[#2c3b57] opacity-30 mix-blend-color" />
      {/* Reading scrim — clear through the middle, deepens toward the fold */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,14,20,0.5)_0%,rgba(11,14,20,0.35)_40%,rgba(11,14,20,0.95)_100%)]" />
      {/* Volumetric beam from top-center, drifts on pointer */}
      <div
        ref={glow}
        className="animate-drift absolute inset-x-0 -top-1/3 h-[120%] will-change-transform [background:radial-gradient(60%_50%_at_50%_0%,rgba(var(--glow-accent),0.20),transparent_70%)]"
      />
    </div>
  )
}
