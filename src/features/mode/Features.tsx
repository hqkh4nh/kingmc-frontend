'use client'

import type { ModeContent } from '@/data/modes'
import { useScrollReveal } from '@/hooks/useScrollReveal'

interface Props {
  features: NonNullable<ModeContent['features']>
}

type Feature = Props['features'][number]

function FeatureTile({
  feature,
  index,
  span2,
  lead,
}: {
  feature: Feature
  index: number
  span2: boolean
  lead: boolean
}) {
  const { ref, revealed } = useScrollReveal<HTMLElement>()
  return (
    <article
      ref={ref}
      style={{ transitionDelay: `${index * 60}ms` }}
      className={`bg-surface/40 edge-lit group ease-fluid motion-reduce:blur-0 relative overflow-hidden rounded-3xl transition-all duration-700 motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none ${
        revealed ? 'blur-0 translate-y-0 opacity-100' : 'translate-y-8 opacity-0 blur-sm'
      } ${span2 ? 'sm:col-span-2' : ''} ${lead ? 'p-8' : 'p-6'}`}
    >
      {lead && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 [background:radial-gradient(90%_80%_at_100%_0%,color-mix(in_srgb,var(--color-gold)_14%,transparent),transparent_60%)]"
        />
      )}
      <div className="relative">
        <h3
          className={`font-display text-paper group-hover:text-gold-bright font-semibold tracking-tight transition-colors ${
            lead ? 'text-[22px]' : 'text-[18px]'
          }`}
        >
          {feature.title}
        </h3>
        <p
          className={`text-on-surface-muted mt-2 leading-[1.65] ${lead ? 'max-w-lg text-[15px]' : 'text-[14px]'}`}
        >
          {feature.body}
        </p>
        {feature.command && (
          <code className="rounded-pill bg-paper/[0.05] text-gold-bright mt-4 inline-block px-3 py-1 font-mono text-[12.5px]">
            {feature.command}
          </code>
        )}
      </div>
    </article>
  )
}

export default function Features({ features }: Props) {
  const last = features.length - 1
  const oddTail = last % 2 === 1 // remaining tiles after the lead form an odd count

  return (
    <section className="px-margin py-stack-2xl">
      <div className="mx-auto max-w-[var(--container-max)]">
        <header className="mb-stack-lg">
          <h2 className="font-display text-paper text-[clamp(2rem,4vw,2.75rem)] leading-[1.05] font-semibold tracking-[-0.02em]">
            Cái gì làm nên server.
          </h2>
        </header>

        <div className="gap-gutter grid sm:grid-cols-2">
          {features.map((feature, i) => (
            <FeatureTile
              key={feature.title}
              feature={feature}
              index={i}
              lead={i === 0}
              span2={i === 0 || (i === last && oddTail)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
