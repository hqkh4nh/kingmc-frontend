import type { ModeContent } from '@/data/modes'

interface Props {
  data: NonNullable<ModeContent['quickStart']>
}

export default function QuickStart({ data }: Props) {
  return (
    <section className="px-margin py-stack-2xl">
      <div className="mx-auto max-w-[var(--container-max)]">
        <header className="mb-stack-lg">
          <p className="text-overline text-on-surface-faded mb-3">
            <span className="text-gold-bright">01.</span> Bắt đầu chơi
          </p>
        </header>

        <div className="gap-gutter grid lg:grid-cols-12">
          <div className="bg-surface-2/60 rounded-2xl p-7 shadow-[0_0_0_1px_rgba(245,239,226,0.06)_inset] lg:col-span-7">
            <h3 className="font-display text-gold-bright mb-3 text-[20px] font-semibold tracking-tight">
              {data.welcomeTitle}
            </h3>
            <p className="text-on-surface-muted text-body-md whitespace-pre-line">
              {data.welcomeBody}
            </p>
          </div>

          <div className="flex flex-col gap-3 lg:col-span-5">
            {data.starterCommands.map((c) => (
              <div
                key={c.cmd}
                className="bg-surface-2/60 rounded-xl px-5 py-4 shadow-[0_0_0_1px_rgba(245,239,226,0.06)_inset]"
              >
                <code className="text-gold-bright font-mono text-[15px] font-semibold">
                  {c.cmd}
                </code>
                <p className="text-on-surface-muted mt-1.5 text-[13px]">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
