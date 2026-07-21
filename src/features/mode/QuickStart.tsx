'use client'

import type { ModeContent } from '@/data/modes'
import { useScrollReveal } from '@/hooks/useScrollReveal'

interface Props {
  data: NonNullable<ModeContent['quickStart']>
}

export default function QuickStart({ data }: Props) {
  const { ref, revealed } = useScrollReveal<HTMLDivElement>()
  return (
    <section className="px-margin py-stack-2xl">
      <div className="mx-auto max-w-[var(--container-max)]">
        <header className="mb-stack-lg">
          <h2 className="font-display text-paper text-[clamp(2rem,4vw,2.75rem)] leading-[1.05] font-semibold tracking-[-0.02em]">
            Bắt đầu chơi.
          </h2>
        </header>

        <div
          ref={ref}
          className={`gap-gutter grid transition-all duration-700 ease-fluid motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none lg:grid-cols-12 ${
            revealed ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <div className="bg-surface/40 edge-lit rounded-3xl p-7 lg:col-span-7">
            <h3 className="font-display text-gold-bright mb-3 text-[20px] font-semibold tracking-tight">
              {data.welcomeTitle}
            </h3>
            <p className="text-on-surface-muted text-body-md whitespace-pre-line">
              {data.welcomeBody}
            </p>
          </div>

          <div className="flex flex-col gap-3 lg:col-span-5">
            {data.starterCommands.map((c) => (
              <div key={c.cmd} className="bg-surface/40 edge-lit rounded-2xl px-5 py-4">
                <code className="text-gold-bright font-mono text-[15px] font-semibold">{c.cmd}</code>
                <p className="text-on-surface-muted mt-1.5 text-[13px]">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
