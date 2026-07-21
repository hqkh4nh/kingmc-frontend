import Link from 'next/link'
import Button from '@/components/client/Button'
import Chip from '@/components/server/Chip'
import CopyButton from '@/components/client/CopyButton'
import Icon from '@/components/server/Icon'
import { siteConfig } from '@/config/site'
import type { ModeContent } from '@/data/modes'
import ModeHeroArt from './ModeHeroArt'

const MODE_ACCENT: Record<ModeContent['id'], string> = {
  kingsmp: 'var(--color-moss)',
  'mega-earth': 'var(--color-lapis)',
  'battle-royale': 'var(--color-rust)',
}

const MODE_OVERLAY: Record<ModeContent['id'], string> = {
  kingsmp: 'rgba(63, 90, 58, 0.5)',
  'mega-earth': 'rgba(44, 70, 99, 0.5)',
  'battle-royale': 'rgba(125, 69, 37, 0.5)',
}

interface Props {
  mode: ModeContent
}

interface Fact {
  label: string
  value: string
  icon?: 'computer' | 'smartphone'
}

function buildFacts(info: ModeContent['quickInfo']): Fact[] {
  const facts: Fact[] = [{ label: 'Phiên bản', value: info.versions }]
  facts.push({
    label: 'Thiết bị',
    value: info.devices === 'pc-only' ? 'Chỉ PC' : 'PC & điện thoại',
    icon: info.devices === 'pc-only' ? 'computer' : 'smartphone',
  })
  if (info.pvp) facts.push({ label: 'PvP', value: info.pvp === 'on' ? 'Bật' : 'Tắt' })
  if (info.difficulty) facts.push({ label: 'Độ khó', value: info.difficulty })
  if (info.notes && info.notes.length > 0)
    facts.push({ label: 'Lưu ý', value: info.notes.join(', ') })
  return facts
}

export default function ModeHero({ mode }: Props) {
  const { mainIp } = siteConfig.server
  const accent = MODE_ACCENT[mode.id]
  const facts = buildFacts(mode.quickInfo)

  return (
    <section className="px-margin pt-stack-2xl pb-stack-xl relative isolate flex min-h-dvh items-center overflow-hidden">
      {/* Ambient blurred backdrop + mode overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 scale-110 bg-cover bg-center blur-2xl"
        style={{
          backgroundImage: `linear-gradient(180deg, ${MODE_OVERLAY[mode.id]} 0%, rgba(11,16,24,0.9) 55%, rgba(11,16,24,1) 100%), url(${mode.hero.backgroundImage})`,
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: `radial-gradient(ellipse at 25% 15%, color-mix(in srgb, ${accent} 22%, transparent), transparent 55%)`,
        }}
      />

      <div className="gap-gutter relative z-10 mx-auto grid w-full max-w-[var(--container-max)] items-center lg:grid-cols-12">
        {/* Copy */}
        <div className="lg:col-span-7">
          <Link
            href="/"
            className="text-on-surface-faded hover:text-gold-bright text-overline inline-flex items-center gap-2 transition-colors"
          >
            <Icon name="arrow-left" size={11} weight="thin" />
            Trang chủ
          </Link>

          {mode.hero.badge && (
            <div className="mt-stack-md">
              <Chip color={mode.hero.badge.color}>{mode.hero.badge.label}</Chip>
            </div>
          )}

          <h1 className="font-display text-paper mt-stack-sm text-[clamp(2.5rem,6vw,4rem)] leading-[1.02] font-bold tracking-[-0.03em]">
            {mode.name}
          </h1>

          <p className="text-body-lg text-on-surface-muted mt-stack-md max-w-xl">
            {mode.hero.longDescription}
          </p>

          {/* Quick-facts, folded in from the old QuickInfo section */}
          <dl className="mt-stack-md flex flex-wrap gap-x-8 gap-y-4">
            {facts.map((f) => (
              <div key={f.label}>
                <dt className="text-overline text-on-surface-faded">{f.label}</dt>
                <dd className="text-paper mt-1 inline-flex items-center gap-2 text-[15px] font-semibold">
                  {f.icon && <Icon name={f.icon} size={16} className="text-on-surface-muted" />}
                  {f.value}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-stack-lg flex flex-wrap items-center gap-3">
            <div className="rounded-pill bg-paper/[0.04] edge-lit inline-flex items-center gap-3 py-2.5 pr-2 pl-4 backdrop-blur-md">
              <code className="text-paper font-mono text-[14px] tracking-tight">{mainIp}</code>
              <CopyButton text={mainIp} />
            </div>
            <a href={siteConfig.social.discord} target="_blank" rel="noopener noreferrer">
              <Button variant="primary" size="md">
                <Icon name="discord" size={16} />
                Tham gia Discord
              </Button>
            </a>
          </div>
        </div>

        {/* Artwork */}
        <div className="mt-stack-lg lg:col-span-5 lg:mt-0">
          <ModeHeroArt src={`/images/modes/${mode.id}.webp`} alt={mode.name} accent={accent} />
        </div>
      </div>
    </section>
  )
}
