import Image from 'next/image'
import Link from 'next/link'
import Chip from '@/components/server/Chip'
import Icon from '@/components/server/Icon'
import { siteConfig, type GameMode } from '@/config/site'

const ACCENT: Record<GameMode['id'], string> = {
  kingsmp: 'var(--color-accent)',
  'mega-earth': 'var(--color-lapis)',
  'battle-royale': 'var(--color-rust)',
}

export default function VoxelModes() {
  return (
    <section id="voxel-modes" className="px-margin py-stack-2xl relative">
      <div className="mx-auto max-w-[var(--container-max)]">
        <header className="mb-stack-lg text-center">
          <span className="rounded text-overline text-gold-ink bg-gold px-3 py-1.5 shadow-[0_3px_0_0_var(--color-gold-deep)]">
            CHỌN THẾ GIỚI
          </span>
          <h2 className="font-display text-paper mt-5 text-[clamp(2.25rem,5vw,3.5rem)] leading-tight font-bold">
            Ba chế độ. Một khối IP.
          </h2>
        </header>

        <div className="gap-gutter grid md:grid-cols-3">
          {siteConfig.gameModes.map((mode) => (
            <Link
              key={mode.id}
              href={mode.href}
              aria-label={`Khám phá mode ${mode.title}`}
              style={{ ['--card-accent' as string]: ACCENT[mode.id] }}
              className="group bg-surface-2 relative flex flex-col overflow-hidden rounded-xl shadow-[0_8px_0_0_rgba(0,0,0,0.3)] transition-all duration-150 hover:-translate-y-2 hover:shadow-[0_16px_0_0_color-mix(in_srgb,var(--card-accent)_60%,black),0_28px_40px_-16px_rgba(0,0,0,0.6)]"
            >
              <div className="relative aspect-[16/11] overflow-hidden">
                <Image
                  src={mode.thumbnail}
                  alt={mode.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-200 group-hover:scale-105"
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-1.5"
                  style={{ background: ACCENT[mode.id] }}
                />
                {mode.tag && (
                  <div className="absolute top-4 right-4">
                    <Chip color={mode.tag.color}>{mode.tag.label}</Chip>
                  </div>
                )}
              </div>
              <div className="flex flex-1 flex-col gap-2.5 px-6 pt-5 pb-6">
                <h3 className="font-display text-paper text-[22px] font-bold group-hover:text-[color:var(--card-accent)]">
                  {mode.title}
                </h3>
                <p className="text-on-surface-muted flex-1 text-[14px] leading-relaxed">
                  {mode.description}
                </p>
                <span className="text-on-surface-faded mt-2 inline-flex items-center gap-1.5 text-[12px] font-bold tracking-[0.15em] uppercase group-hover:gap-2.5 group-hover:text-[color:var(--card-accent)]">
                  Vào xem
                  <Icon name="arrow-right" size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
