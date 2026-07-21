'use client'

import Image from 'next/image'
import Link from 'next/link'
import Chip from '@/components/server/Chip'
import Icon from '@/components/server/Icon'
import { siteConfig, type GameMode } from '@/config/site'
import { useScrollReveal } from '@/hooks/useScrollReveal'

function Panel({ mode, index }: { mode: GameMode; index: number }) {
  const { ref, revealed } = useScrollReveal<HTMLDivElement>()
  const flipped = index % 2 === 1

  return (
    <div
      ref={ref}
      className={`gap-gutter grid items-center transition-all duration-[900ms] ease-fluid motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:blur-0 motion-reduce:transition-none lg:grid-cols-2 ${
        revealed ? 'translate-y-0 opacity-100 blur-0' : 'translate-y-16 opacity-0 blur-md'
      }`}
    >
      {/* Media */}
      <div className={`relative ${flipped ? 'lg:order-2' : ''}`}>
        <div className="ring-accent/10 relative aspect-[16/10] overflow-hidden rounded-3xl shadow-[0_40px_120px_-40px_rgba(0,0,0,0.8)] ring-1">
          <Image
            src={mode.thumbnail}
            alt={mode.title}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 [background:linear-gradient(120deg,transparent_40%,rgba(88,180,255,0.12)_100%)]"
          />
        </div>
      </div>

      {/* Copy */}
      <div className={`${flipped ? 'lg:order-1 lg:pr-10' : 'lg:pl-10'}`}>
        <span className="text-accent/70 font-mono text-[13px] tracking-[0.3em]">
          {String(index + 1).padStart(2, '0')} / {String(siteConfig.gameModes.length).padStart(2, '0')}
        </span>
        <div className="mt-3 flex items-center gap-3">
          <h2 className="font-display text-paper text-[clamp(2rem,4vw,3rem)] leading-tight font-bold">
            {mode.title}
          </h2>
          {mode.tag && <Chip color={mode.tag.color}>{mode.tag.label}</Chip>}
        </div>
        <p className="text-on-surface-muted mt-4 max-w-md text-[16px] leading-relaxed">
          {mode.description}
        </p>
        <Link
          href={mode.href}
          className="group text-accent-bright mt-6 inline-flex items-center gap-2 font-mono text-[13px] tracking-[0.2em] uppercase transition-all hover:gap-3.5"
        >
          Explore
          <Icon name="arrow-right" size={16} />
        </Link>
      </div>
    </div>
  )
}

export default function CinematicModes() {
  return (
    <section id="cinematic-modes" className="px-margin py-stack-2xl relative">
      <div className="gap-stack-2xl mx-auto flex max-w-[var(--container-max)] flex-col">
        <header className="text-center">
          <span className="text-accent-bright/80 font-mono text-[11px] tracking-[0.4em] uppercase">
            [ Game Modes ]
          </span>
          <h2 className="font-display text-paper mt-4 text-[clamp(2.5rem,6vw,4.5rem)] leading-none font-bold">
            Ba thế giới. Một IP.
          </h2>
        </header>
        {siteConfig.gameModes.map((mode, i) => (
          <Panel key={mode.id} mode={mode} index={i} />
        ))}
      </div>
    </section>
  )
}
