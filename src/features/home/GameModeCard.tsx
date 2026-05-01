import Link from 'next/link'
import Chip from '@/components/server/Chip'
import Icon from '@/components/server/Icon'
import type { GameMode } from '@/config/site'

interface Props {
  mode: GameMode
  featured?: boolean
}

const gradients: Record<string, string> = {
  kingsmp: 'from-moss-deep/40 via-surface-2 to-surface-3',
  'mega-earth': 'from-lapis-deep/40 via-surface-2 to-surface-3',
  'battle-royale': 'from-rust-deep/45 via-surface-2 to-surface-3',
}

export default function GameModeCard({ mode, featured = false }: Props) {
  const gradient = gradients[mode.id] ?? 'from-surface-2 to-surface-3'
  return (
    <Link
      href={mode.href}
      aria-label={`Khám phá mode ${mode.title}`}
      className={`group bg-surface-2 relative flex flex-col overflow-hidden rounded-2xl transition-all duration-500 ease-out hover:-translate-y-1 ${
        featured ? 'h-full' : ''
      } shadow-[0_0_0_1px_rgba(245,239,226,0.06)_inset,0_4px_16px_-4px_rgba(0,0,0,0.4)] hover:shadow-[0_0_0_1px_rgba(220,184,116,0.25)_inset,0_24px_56px_-12px_rgba(0,0,0,0.55),0_0_48px_-12px_rgba(200,163,86,0.18)]`}
    >
      <div
        className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br ${gradient} ${
          featured ? 'aspect-[5/4]' : 'aspect-[16/10]'
        }`}
      >
        <div className="text-paper/8 group-hover:text-paper/15 absolute inset-0 flex items-center justify-center transition-all duration-700 ease-out group-hover:scale-110">
          <Icon name={mode.icon} size={featured ? 220 : 140} />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(0,0,0,0.45)_100%)]"
        />
        <span className="text-paper/40 absolute top-5 left-5 font-mono text-[11px] tracking-[0.2em]">
          / {mode.id.slice(0, 2).toUpperCase()}
        </span>
        {mode.tag && (
          <div className="absolute top-5 right-5">
            <div className="animate-tag-pulse rounded-full">
              <Chip color={mode.tag.color}>{mode.tag.label}</Chip>
            </div>
          </div>
        )}
      </div>

      <div
        className={`flex flex-1 flex-col px-7 ${featured ? 'gap-3 pt-7 pb-7' : 'gap-2.5 pt-5 pb-6'}`}
      >
        <h3
          className={`font-display text-paper group-hover:text-gold-bright tracking-[-0.02em] transition-colors duration-300 ${
            featured ? 'text-[28px] leading-[1.1]' : 'text-[22px] leading-[1.15]'
          }`}
        >
          {mode.title}
        </h3>
        <p className="text-on-surface-muted flex-1 text-[14.5px] leading-[1.65]">
          {mode.description}
        </p>
        <span className="text-on-surface-faded group-hover:text-gold-bright mt-3 inline-flex items-center gap-1.5 text-[12px] font-medium tracking-[0.18em] uppercase transition-all duration-300 group-hover:gap-2.5">
          Vào xem
          <Icon name="arrow-right" size={14} />
        </span>
      </div>
    </Link>
  )
}
