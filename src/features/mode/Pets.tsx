'use client'

import type { PetsInfo } from '@/data/modes/types'
import { useScrollReveal } from '@/hooks/useScrollReveal'

interface Props {
  data: PetsInfo
}

const TONE_CLASSES: Record<PetsInfo['tiers'][number]['tone'], string> = {
  moss: 'bg-moss-deep/15 ring-moss/35 text-moss',
  lapis: 'bg-lapis-deep/15 ring-lapis/35 text-lapis',
  gold: 'bg-gold-deep/15 ring-gold/40 text-gold-bright',
}

const TONE_NUMERAL: Record<PetsInfo['tiers'][number]['tone'], string> = {
  moss: 'text-moss',
  lapis: 'text-lapis',
  gold: 'text-gold-bright',
}

export default function Pets({ data }: Props) {
  const { ref, revealed } = useScrollReveal<HTMLDivElement>()
  return (
    <section className="px-margin py-stack-2xl">
      <div
        ref={ref}
        className={`mx-auto max-w-[var(--container-max)] transition-all duration-700 ease-fluid motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none ${
          revealed ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <div className="gap-gutter grid items-start md:grid-cols-12">
          <div className="md:col-span-7">
            <h2 className="font-display text-paper text-[clamp(2rem,4vw,2.75rem)] leading-[1.08] font-semibold tracking-[-0.02em]">
              Hệ Đệ Tử.
            </h2>
            <p className="text-body-md text-on-surface-muted mt-stack-sm max-w-md">
              {data.description}
            </p>
            <p className="text-on-surface-faded mt-stack-sm font-mono text-[12px] tracking-tight">
              {data.hint}
            </p>
          </div>
          <div className="relative h-[320px] md:col-span-5">
            {data.tiers.map((tier, i) => (
              <article
                key={tier.rarity}
                className={`absolute rounded-2xl px-5 py-4 ring-1 backdrop-blur-sm transition-transform duration-500 ease-[var(--ease-spring-soft)] ${TONE_CLASSES[tier.tone]} ${
                  i === 0
                    ? 'top-0 left-0 w-[68%]'
                    : i === 1
                      ? 'top-[110px] left-[24%] w-[68%]'
                      : 'top-[210px] right-0 w-[44%]'
                }`}
              >
                <p
                  className={`font-mono font-semibold tracking-tight tabular-nums ${TONE_NUMERAL[tier.tone]} ${
                    i === 2 ? 'text-[44px] leading-none' : 'text-[64px] leading-none'
                  }`}
                >
                  {tier.percent}
                  <span className="ml-0.5 text-[20px] opacity-60">%</span>
                </p>
                <p className="text-paper mt-2 text-[14px] font-semibold">{tier.rarity}</p>
                <p className="text-on-surface-muted mt-1 text-[12px] leading-[1.5]">
                  {tier.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
