import type { ModeContent } from '@/data/modes'

interface Props {
  commands: NonNullable<ModeContent['commands']>
}

export default function Commands({ commands }: Props) {
  return (
    <section className="px-margin py-stack-2xl">
      <div className="mx-auto max-w-[var(--container-max)]">
        <header className="mb-stack-lg">
          <p className="text-overline text-on-surface-faded mb-3">
            <span className="text-gold-bright">03.</span> Lệnh thường dùng
          </p>
        </header>

        <div className="gap-gutter grid md:grid-cols-2 lg:grid-cols-3">
          {commands.map((cat) => (
            <div
              key={cat.category}
              className="bg-surface-2/60 rounded-2xl p-6 shadow-[0_0_0_1px_rgba(245,239,226,0.06)_inset]"
            >
              <p className="text-overline text-on-surface-faded mb-3">{cat.category}</p>
              <ul className="flex flex-col gap-2.5">
                {cat.items.map((c) => (
                  <li key={c.cmd} className="flex flex-col gap-0.5">
                    <code className="text-gold-bright font-mono text-[14px] font-semibold">
                      {c.cmd}
                    </code>
                    <p className="text-on-surface-muted text-[13px]">{c.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
