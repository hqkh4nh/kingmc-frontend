import type { ModeContent } from '@/data/modes'

interface Props {
  features: NonNullable<ModeContent['features']>
}

export default function Features({ features }: Props) {
  return (
    <section className="px-margin py-stack-2xl">
      <div className="mx-auto max-w-[var(--container-max)]">
        <header className="mb-stack-lg">
          <p className="text-overline text-on-surface-faded mb-3">
            <span className="text-gold-bright">02.</span> Tính năng nổi bật
          </p>
          <h2 className="font-display text-paper text-[clamp(2rem,4vw,2.75rem)] leading-[1.05] font-semibold tracking-[-0.02em]">
            Cái gì làm nên server.
          </h2>
        </header>

        <div className="gap-gutter grid md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <article
              key={f.title}
              className="bg-surface-2/60 hover:bg-surface-2 group rounded-2xl p-6 shadow-[0_0_0_1px_rgba(245,239,226,0.06)_inset] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_0_1px_rgba(220,184,116,0.2)_inset,0_8px_24px_-12px_rgba(0,0,0,0.4)]"
            >
              <h3 className="font-display text-paper group-hover:text-gold-bright mb-2 text-[18px] font-semibold tracking-tight transition-colors">
                {f.title}
              </h3>
              <p className="text-on-surface-muted text-[14px] leading-[1.65]">{f.body}</p>
              {f.command && (
                <code className="rounded-pill bg-paper/[0.05] text-gold-bright mt-4 inline-block px-3 py-1 font-mono text-[12.5px]">
                  {f.command}
                </code>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
