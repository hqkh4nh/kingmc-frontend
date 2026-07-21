'use client'

import Image from 'next/image'
import Link from 'next/link'
import Chip from '@/components/server/Chip'
import Icon from '@/components/server/Icon'
import { siteConfig, type GameMode } from '@/config/site'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const ACCENT: Record<GameMode['id'], string> = {
  kingsmp: 'var(--color-moss)',
  'mega-earth': 'var(--color-lapis)',
  'battle-royale': 'var(--color-rust)',
}

const KICKER: Record<GameMode['id'], string> = {
  kingsmp: 'Sinh tồn cộng đồng',
  'mega-earth': 'Bản đồ Trái Đất',
  'battle-royale': 'Đấu trường sinh tồn',
}

function Panel({ mode, index }: { mode: GameMode; index: number }) {
  const { ref, revealed } = useScrollReveal<HTMLDivElement>()
  const flipped = index % 2 === 1
  const accent = ACCENT[mode.id]

  return (
    <div
      ref={ref}
      style={{ ['--panel-accent' as string]: accent }}
      className={`gap-gutter grid items-center transition-all duration-[900ms] ease-fluid motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:blur-0 motion-reduce:transition-none lg:grid-cols-2 ${
        revealed ? 'translate-y-0 opacity-100 blur-0' : 'translate-y-14 opacity-0 blur-md'
      }`}
    >
      {/* Media */}
      <div className={flipped ? 'lg:order-2' : ''}>
        <div className="group relative aspect-[16/10] overflow-hidden rounded-3xl shadow-[0_40px_100px_-40px_rgba(0,0,0,0.75)] ring-1 ring-[color-mix(in_srgb,var(--panel-accent)_20%,transparent)]">
          <Image
            src={mode.thumbnail}
            alt={mode.title}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 ease-fluid group-hover:scale-[1.05]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 [background:linear-gradient(120deg,transparent_45%,color-mix(in_srgb,var(--panel-accent)_35%,transparent)_100%)]"
          />
        </div>
      </div>

      {/* Copy */}
      <div className={flipped ? 'lg:order-1 lg:pr-10' : 'lg:pl-10'}>
        <span className="text-[12px] font-semibold tracking-[0.22em] text-[color:var(--panel-accent)] uppercase">
          {KICKER[mode.id]}
        </span>
        <div className="mt-3 flex flex-wrap items-center gap-3">
          <h3 className="font-display text-paper text-[clamp(1.9rem,4vw,2.75rem)] leading-tight font-bold">
            {mode.title}
          </h3>
          {mode.tag && <Chip color={mode.tag.color}>{mode.tag.label}</Chip>}
        </div>
        <p className="text-on-surface-muted mt-4 max-w-md text-[16px] leading-relaxed">
          {mode.description}
        </p>
        <Link
          href={mode.href}
          aria-label={`Khám phá mode ${mode.title}`}
          className="group mt-6 inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.2em] text-[color:var(--panel-accent)] uppercase transition-all hover:gap-3.5"
        >
          Khám phá
          <Icon name="arrow-right" size={16} />
        </Link>
      </div>
    </div>
  )
}

export default function GameModes() {
  const modes = siteConfig.gameModes as GameMode[]

  return (
    <section id="game-modes" className="px-margin py-stack-2xl relative">
      <div className="mx-auto max-w-[var(--container-max)]">
        <header className="mb-stack-lg max-w-2xl">
          <p className="text-overline text-on-surface-faded mb-3">Thế giới của bạn</p>
          <h2 className="font-display text-paper text-display-lg font-semibold">
            Ba{' '}
            <span className="font-editorial text-accent-bright text-[1.05em] italic">
              chế độ chơi.
            </span>
          </h2>
        </header>

        <div className="gap-stack-2xl flex flex-col">
          {modes.map((mode, i) => (
            <Panel key={mode.id} mode={mode} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
