import { Suspense } from 'react'
import Logo from '@/components/server/Logo'
import PlayerCountServer from '@/features/player-count/PlayerCountServer'
import ConnectionCard from './ConnectionCard'
import HeroBackdrop from './HeroBackdrop'
import HeroCTA from './HeroCTA'

export default function Hero() {
  return (
    <section
      id="hero"
      className="px-margin pt-stack-2xl pb-stack-2xl relative isolate flex min-h-dvh flex-col items-center justify-center overflow-hidden"
    >
      <HeroBackdrop />

      <div className="max-w-narrow relative z-10 flex w-full flex-1 flex-col items-center justify-center text-center">
        {/* Eyebrow — pill badge, not a bare line */}
        <div className="mb-stack-md">
          <span className="rounded-pill eyebrow text-on-surface-muted edge-lit bg-surface/40 inline-flex items-center px-4 py-2 backdrop-blur-sm">
            MÁY CHỦ MINECRAFT VIỆT NAM
          </span>
        </div>

        {/* Brand wordmark — the hero visual carries the size, so the H1 below is a label */}
        <Logo variant="with-text" maxHeight={210} className="animate-drift" />

        {/* Real text H1 — a mono label of the three modes, names matching the cards below
            so newcomers map hero → section. Gold squares are aria-hidden separators;
            {' '} keeps real word spacing in the accessible text (KingSMP Mega Earth …). */}
        <h1 className="text-paper/80 mt-stack-sm font-mono text-[14px] leading-relaxed font-semibold tracking-[0.18em] uppercase">
          <span className="whitespace-nowrap">
            KingSMP
            <span
              aria-hidden="true"
              className="bg-gold ml-2 inline-block h-1.5 w-1.5 align-middle"
            />
          </span>{' '}
          <span className="whitespace-nowrap">
            Mega Earth
            <span
              aria-hidden="true"
              className="bg-gold ml-2 inline-block h-1.5 w-1.5 align-middle"
            />
          </span>{' '}
          <span className="whitespace-nowrap">Battle Royale</span>
        </h1>

        <HeroCTA />

        <div className="mt-stack-lg">
          <Suspense fallback={<ConnectionCard initialPlayerCount={null} />}>
            <PlayerCountServer />
          </Suspense>
        </div>
      </div>
    </section>
  )
}
