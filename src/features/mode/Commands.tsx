'use client'

import type { ModeContent } from '@/data/modes'
import { useScrollReveal } from '@/hooks/useScrollReveal'

interface Props {
  commands: NonNullable<ModeContent['commands']>
}

type Category = Props['commands'][number]

function CategoryCard({ cat, index }: { cat: Category; index: number }) {
  const { ref, revealed } = useScrollReveal<HTMLDivElement>()
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 50}ms` }}
      className={`bg-surface/40 shadow-hard ease-fluid rounded-3xl p-6 transition-all duration-700 motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none ${
        revealed ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
    >
      <p className="eyebrow text-gold-deep mb-4">{cat.category}</p>
      <ul className="flex flex-col gap-3">
        {cat.items.map((c) => (
          <li key={c.cmd} className="flex flex-col gap-0.5">
            <code className="text-paper font-mono text-[14px] font-semibold">{c.cmd}</code>
            <p className="text-on-surface-muted text-[13px] leading-snug">{c.desc}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Commands({ commands }: Props) {
  return (
    <section className="px-margin py-stack-2xl">
      <div className="mx-auto max-w-[var(--container-max)]">
        <header className="mb-stack-lg">
          <h2 className="font-display text-paper text-[clamp(2rem,4vw,3rem)] leading-[1.05] font-semibold tracking-[-0.02em]">
            Lệnh trong game.
          </h2>
        </header>

        <div className="gap-gutter grid sm:grid-cols-2">
          {commands.map((cat, i) => (
            <CategoryCard key={cat.category} cat={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
