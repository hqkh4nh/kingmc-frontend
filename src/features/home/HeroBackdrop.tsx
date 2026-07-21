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
        className="absolute -inset-x-8 -top-16 bottom-0 bg-cover bg-center will-change-transform"
        style={{ backgroundImage: 'url(/images/hero-background.png)' }}
      />
      {/* Reading scrim — deepens toward the fold */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,16,24,0.62)_0%,rgba(11,16,24,0.86)_58%,var(--color-ink)_100%)]" />
      {/* Volumetric beam from top-center, drifts on pointer */}
      <div
        ref={glow}
        className="animate-drift absolute inset-x-0 -top-1/3 h-[120%] will-change-transform [background:radial-gradient(60%_50%_at_50%_0%,rgba(var(--glow-accent),0.20),transparent_70%)]"
      />
    </div>
  )
}
