import { Suspense } from 'react'
import Logo from '@/components/server/Logo'
import { siteConfig } from '@/config/site'
import PlayerCountServer from '@/features/player-count/PlayerCountServer'
import ConnectionCard from './ConnectionCard'
import HeroBackdrop from './HeroBackdrop'
import HeroCTA from './HeroCTA'

export default function Hero() {
  const { tagline } = siteConfig.brand
  return (
    <section
      id="hero"
      className="px-margin pt-stack-2xl pb-stack-2xl relative isolate flex min-h-dvh flex-col items-center justify-center overflow-hidden"
    >
      <HeroBackdrop />

      <div className="max-w-narrow relative z-10 flex w-full flex-1 flex-col items-center justify-center text-center">
        {/* Eyebrow — pill badge, not a bare line */}
        <div className="animate-fade mb-stack-md [animation-delay:60ms]">
          <span className="rounded-pill text-overline text-on-surface-muted edge-lit bg-surface/40 inline-flex items-center px-4 py-2 backdrop-blur-sm">
            MÁY CHỦ MINECRAFT · SỐ 2 VIỆT NAM
          </span>
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
    </section>
  )
}
