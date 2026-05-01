import { Suspense } from 'react'
import Logo from '@/components/server/Logo'
import { siteConfig } from '@/config/site'
import PlayerCountServer from '@/features/player-count/PlayerCountServer'
import ConnectionCard from './ConnectionCard'
import HeroCTA from './HeroCTA'

export default function Hero() {
  const { tagline } = siteConfig.brand
  return (
    <section
      id="hero"
      className="px-margin pb-stack-2xl pt-stack-2xl relative isolate flex min-h-[100vh] items-center justify-center overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(180deg, rgba(11,16,24,0.65) 0%, rgba(11,16,24,0.85) 60%, rgba(11,16,24,1) 100%), url(/images/hero-background.png)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_0%,rgba(200,163,86,0.18),transparent_55%)]"
      />
      <div className="relative z-10 flex w-full max-w-[var(--container-narrow)] flex-col items-center text-center">
        <div className="animate-fade mb-stack-md flex flex-col items-center gap-2 [animation-delay:60ms]">
          <p className="text-overline text-on-surface-faded">
            MÁY CHỦ MINECRAFT <span className="text-on-surface-muted/60">·</span> SỐ 1 VIỆT NAM
          </p>
          <span aria-hidden="true" className="bg-gold-bright/60 h-px w-16" />
        </div>
        <div className="animate-rise [animation-delay:240ms]">
          <Logo variant="with-text" maxHeight={300} className="animate-drift" />
        </div>
        <h1 className="sr-only">{siteConfig.brand.name}</h1>
        <p className="animate-rise text-body-lg text-on-surface-muted mt-stack-md max-w-md [animation-delay:420ms]">
          {tagline}.
        </p>
        <HeroCTA />
        <div className="animate-rise mt-stack-lg [animation-delay:720ms]">
          <Suspense fallback={<ConnectionCard initialPlayerCount={null} />}>
            <PlayerCountServer />
          </Suspense>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-8 flex justify-center">
        <a
          href="#game-modes"
          aria-label="Cuộn xuống xem các chế độ chơi"
          className="group text-on-surface-faded hover:text-gold-bright flex flex-col items-center gap-2 transition-colors duration-300"
        >
          <span aria-hidden="true" className="block h-6 w-px bg-current" />
          <span className="text-[10px] font-medium tracking-[0.25em] uppercase opacity-60 transition-opacity duration-300 group-hover:opacity-100">
            cuộn
          </span>
        </a>
      </div>
    </section>
  )
}
