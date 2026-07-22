'use client'

import Image from 'next/image'
import Link from 'next/link'
import Icon from '@/components/server/Icon'
import { siteConfig, type GameMode } from '@/config/site'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const KICKER: Record<GameMode['id'], string> = {
  kingsmp: 'Sinh tồn cộng đồng',
  'mega-earth': 'Bản đồ Trái Đất',
  'battle-royale': 'Đấu trường sinh tồn',
}

/** Square-cornered Minecraft-style tag: mono, gold plate, ink text. */
function ModeTag({ label }: { label: string }) {
  return (
    <span className="bg-gold text-gold-ink rounded-none px-2.5 py-1.5 font-mono text-[11px] font-semibold tracking-[0.14em] uppercase">
      {label}
    </span>
  )
}

function ModeCard({ mode, featured = false }: { mode: GameMode; featured?: boolean }) {
  const { ref, revealed } = useScrollReveal<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={`ease-fluid motion-reduce:blur-0 transition-all duration-[900ms] motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none ${
        revealed ? 'blur-0 translate-y-0 opacity-100' : 'translate-y-14 opacity-0 blur-md'
      }`}
    >
      <Link
        href={mode.href}
        aria-label={`Khám phá mode ${mode.title}`}
        className={`group ring-paper/10 ease-fluid relative block overflow-hidden rounded-lg ring-1 transition-[transform,box-shadow] duration-300 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_rgba(0,0,0,0.55)] motion-reduce:transition-none ${
          featured ? 'h-[360px] md:h-[480px]' : 'h-[280px]'
        }`}
      >
        <Image
          src={mode.thumbnail}
          alt=""
          fill
          sizes={featured ? '100vw' : '(min-width: 768px) 50vw, 100vw'}
          className="ease-fluid object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        {/* Reading scrim — smooth multi-stop falloff toward the copy */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,14,20,0)_30%,rgba(11,14,20,0.55)_60%,rgba(11,14,20,0.92)_100%)]"
        />
        {/* Hover deepen — the image scales up on hover, so darken the whole
            frame to keep text (especially the gold kicker) crisp. Opacity-only, no blur. */}
        <div
          aria-hidden="true"
          className="ease-fluid bg-ink/45 absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        {mode.tag && (
          <span className="absolute top-4 right-4">
            <ModeTag label={mode.tag.label} />
          </span>
        )}

        <div className={`absolute inset-x-0 bottom-0 ${featured ? 'p-6 md:p-10' : 'p-6'}`}>
          <span className="text-gold-bright font-mono text-[13px] font-semibold tracking-[0.14em] uppercase [text-shadow:0_2px_6px_rgba(0,0,0,0.9),0_0_2px_rgba(0,0,0,0.8)]">
            {KICKER[mode.id]}
          </span>
          <h3
            className={`font-display text-paper mt-2 leading-tight [text-shadow:0_2px_8px_rgba(0,0,0,0.5)] ${
              featured ? 'text-[clamp(2rem,4vw,3rem)]' : 'text-[clamp(1.5rem,2.4vw,1.9rem)]'
            }`}
          >
            {mode.title}
          </h3>
          <p
            className={`text-paper/90 mt-2.5 leading-relaxed [text-shadow:0_1px_5px_rgba(0,0,0,0.55)] ${
              featured ? 'max-w-xl text-[15px]' : 'line-clamp-2 max-w-md text-[14px]'
            }`}
          >
            {mode.description}
          </p>
          <span className="border-paper/25 text-paper group-hover:bg-surface-2 group-hover:border-paper/40 mt-5 inline-flex items-center gap-2 rounded-sm border px-4 py-2.5 font-mono text-[12px] font-medium tracking-[0.15em] uppercase transition-colors duration-200">
            Khám phá
            <Icon
              name="arrow-right"
              size={14}
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </span>
        </div>
      </Link>
    </div>
  )
}

export default function GameModes() {
  const [first, ...others] = siteConfig.gameModes as GameMode[]
  if (!first) return null

  return (
    <section id="game-modes" className="px-margin py-stack-2xl relative">
      <div className="mx-auto max-w-[var(--container-max)]">
        <header className="mb-stack-lg max-w-2xl">
          <h2 className="font-display text-paper text-display-lg font-semibold">
            Chọn thế giới <span className="text-gold-bright">của bạn.</span>
          </h2>
        </header>

        <div className="gap-gutter flex flex-col">
          <ModeCard mode={first} featured />
          <div className="gap-gutter grid md:grid-cols-2">
            {others.map((mode) => (
              <ModeCard key={mode.id} mode={mode} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
