import Link from 'next/link'
import Button from '@/components/client/Button'
import Chip from '@/components/server/Chip'
import CopyButton from '@/components/client/CopyButton'
import Icon from '@/components/server/Icon'
import { siteConfig } from '@/config/site'
import type { ModeContent } from '@/data/modes'

const MODE_OVERLAY: Record<ModeContent['id'], string> = {
  kingsmp: 'rgba(63, 90, 58, 0.55)',
  'mega-earth': 'rgba(44, 70, 99, 0.55)',
  'battle-royale': 'rgba(125, 69, 37, 0.55)',
}

interface Props {
  mode: ModeContent
}

export default function ModeHero({ mode }: Props) {
  const { mainIp } = siteConfig.server
  return (
    <section className="px-margin pt-stack-2xl pb-stack-xl relative isolate flex min-h-[70vh] items-end overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(180deg, ${MODE_OVERLAY[mode.id]} 0%, rgba(11,16,24,0.85) 60%, rgba(11,16,24,1) 100%), url(${mode.hero.backgroundImage})`,
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_30%_20%,rgba(200,163,86,0.15),transparent_55%)]"
      />

      <div className="relative z-10 mx-auto w-full max-w-[var(--container-max)]">
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

        <h1 className="font-display text-paper mt-stack-sm text-[clamp(2.25rem,5vw,2.75rem)] leading-[1.05] font-semibold tracking-[-0.025em]">
          {mode.name}
        </h1>

        <p className="text-body-lg text-on-surface-muted mt-stack-md max-w-2xl">
          {mode.hero.longDescription}
        </p>

        <div className="mt-stack-md flex flex-wrap items-center gap-3">
          <div className="rounded-pill bg-paper/[0.04] inline-flex items-center gap-3 py-2.5 pr-2 pl-4 shadow-[0_0_0_1px_rgba(245,239,226,0.1)_inset] backdrop-blur-md">
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
    </section>
  )
}
