'use client'

import Icon from '@/components/server/Icon'
import { siteConfig } from '@/config/site'
import { useCopyIp } from '@/hooks/useCopyIp'
import { useParallax } from '@/hooks/useParallax'
import CinematicHUD from './CinematicHUD'
import ParticleField from './ParticleField'

export default function CinematicHero() {
  const { brand, social } = siteConfig
  const playNow = useCopyIp({ ip: 'kingmc.vn', scrollToId: 'cinematic-modes' })
  const plate = useParallax<HTMLDivElement>({ speed: -0.1, pointer: 24 })

  return (
    <section className="relative isolate flex min-h-dvh flex-col items-center justify-center overflow-hidden px-6">
      {/* Parallax photo plate */}
      <div aria-hidden="true" className="absolute inset-0 -z-30 overflow-hidden">
        <div
          ref={plate}
          className="absolute -inset-x-10 -inset-y-16 bg-cover bg-center will-change-transform"
          style={{ backgroundImage: 'url(/images/hero-background.png)' }}
        />
      </div>
      {/* Heavy cinematic grade: cold vignette + fold fade */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 [background:radial-gradient(120%_90%_at_50%_20%,transparent_20%,rgba(5,7,12,0.7)_70%,var(--color-ink)_100%)]"
      />
      {/* God-rays from top */}
      <div
        aria-hidden="true"
        className="animate-drift absolute inset-x-0 -top-1/4 -z-10 h-[130%] opacity-70 [background:conic-gradient(from_180deg_at_50%_0%,transparent_0deg,rgba(88,180,255,0.10)_12deg,transparent_24deg,rgba(88,180,255,0.08)_38deg,transparent_50deg)]"
      />
      <ParticleField />

      <div className="relative z-10 flex flex-col items-center text-center">
        <span className="text-accent-bright/80 animate-fade mb-6 font-mono text-[11px] tracking-[0.4em] uppercase [animation-delay:60ms]">
          [ Server Online ]
        </span>

        <h1
          className="animate-rise font-display text-paper text-display-3xl font-bold [animation-delay:160ms]"
          style={{ textShadow: '1.5px 0 rgba(255,80,80,0.35), -1.5px 0 rgba(88,180,255,0.4)' }}
        >
          {brand.nameUpper}
        </h1>
        <p className="animate-rise text-on-surface-muted mt-4 max-w-lg text-[17px] [animation-delay:320ms]">
          {brand.tagline}.
        </p>

        {/* PLAY — launcher-grade glowing pill */}
        <div className="animate-rise mt-10 flex flex-wrap items-center justify-center gap-4 [animation-delay:480ms]">
          <button
            onClick={playNow}
            className="group rounded-pill bg-accent text-ink glow-accent animate-tag-pulse focus-visible:ring-accent-bright/70 focus-visible:ring-offset-ink relative inline-flex h-16 items-center gap-3 px-12 text-[18px] font-bold tracking-wide uppercase transition-transform duration-200 ease-out hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.97]"
          >
            <Icon name="arrow-right" size={20} />
            Play
          </button>
          <a
            href={social.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="group text-paper rounded-pill inline-flex h-16 items-center gap-2.5 px-8 text-[15px] font-medium tracking-wide uppercase shadow-[0_0_0_1px_rgba(143,208,255,0.3)_inset] backdrop-blur-sm transition-all duration-200 hover:shadow-[0_0_0_1px_rgba(143,208,255,0.7)_inset]"
          >
            <Icon name="discord" size={18} />
            Discord
          </a>
        </div>

        <div className="animate-rise mt-12 [animation-delay:640ms]">
          <CinematicHUD />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-6 z-10 flex justify-center">
        <span className="text-on-surface-faded font-mono text-[10px] tracking-[0.3em] uppercase opacity-60">
          scroll ▾
        </span>
      </div>
    </section>
  )
}
