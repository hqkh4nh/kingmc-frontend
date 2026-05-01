'use client'

import { useState } from 'react'
import type { ModeContent, Rank } from '@/data/modes'

interface Props {
  ranks: NonNullable<ModeContent['ranks']>
}

export default function Ranks({ ranks }: Props) {
  return (
    <section className="px-margin py-stack-2xl">
      <div className="mx-auto max-w-[var(--container-max)]">
        <header className="mb-stack-lg">
          <p className="text-overline text-on-surface-faded mb-3">
            <span className="text-gold-bright">04.</span> Ranks
          </p>
          <h2 className="font-display text-paper text-[clamp(2rem,4vw,2.75rem)] leading-[1.05] font-semibold tracking-[-0.02em]">
            Quyền lợi theo cấp bậc.
          </h2>
        </header>

        <div className="gap-gutter grid md:grid-cols-2 lg:grid-cols-3">
          {ranks.map((rank) => (
            <RankCard key={rank.id} rank={rank} />
          ))}
        </div>
      </div>
    </section>
  )
}

function RankCard({ rank }: { rank: Rank }) {
  const [expanded, setExpanded] = useState(false)
  const visible = expanded ? rank.benefits : rank.benefits.slice(0, 5)
  const hasMore = rank.benefits.length > 5

  return (
    <article
      className={`bg-surface-2/60 relative flex flex-col overflow-hidden rounded-2xl p-6 shadow-[0_0_0_1px_rgba(245,239,226,0.06)_inset]`}
    >
      {rank.accent && (
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br ${rank.accent} opacity-60`}
        />
      )}

      <div className="mb-3 flex items-baseline justify-between gap-2">
        <h3 className="font-display text-paper text-[20px] font-semibold tracking-tight">
          {rank.label}
        </h3>
        {rank.price && (
          <span className="text-gold-bright font-mono text-[13px] font-semibold tracking-tight">
            {rank.price}
          </span>
        )}
      </div>

      {rank.preview && (
        <p className="text-on-surface-muted mb-3 font-mono text-[12px] italic">
          Preview: {rank.preview}
        </p>
      )}

      <ul className="text-on-surface-muted mb-4 flex flex-col gap-1.5 text-[13px]">
        {visible.map((b, i) => (
          <li key={i} className="flex gap-2">
            <span className="text-gold-bright select-none">♦</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>

      {hasMore && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="text-gold-bright hover:text-paper mb-4 self-start text-[12px] font-medium tracking-[0.16em] uppercase transition-colors"
        >
          {expanded ? '— Thu gọn' : `+ ${rank.benefits.length - 5} quyền lợi khác`}
        </button>
      )}

      {rank.extra && rank.extra.length > 0 && expanded && (
        <ul className="text-on-surface-faded border-paper/10 mt-auto flex flex-col gap-1.5 border-t pt-4 text-[12px]">
          {rank.extra.map((e, i) => (
            <li key={i} className="flex gap-2">
              <span className="select-none">+</span>
              <span>{e}</span>
            </li>
          ))}
        </ul>
      )}

      {rank.requires && (
        <p className="text-on-surface-faded mt-3 text-[11px] tracking-tight italic">
          Yêu cầu: {rank.requires}
        </p>
      )}

      {rank.joinMessage && (
        <p className="text-on-surface-faded mt-2 font-mono text-[11px]">↳ {rank.joinMessage}</p>
      )}
    </article>
  )
}
