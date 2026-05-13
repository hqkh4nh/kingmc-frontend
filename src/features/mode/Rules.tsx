import Accordion from '@/components/client/Accordion'
import type { ModeContent } from '@/data/modes'

interface Props {
  rules: NonNullable<ModeContent['rules']>
}

export default function Rules({ rules }: Props) {
  return (
    <section className="px-margin py-stack-2xl">
      <div className="mx-auto max-w-[var(--container-max)]">
        <header className="mb-stack-lg">
          <p className="text-overline text-on-surface-faded mb-3">
            <span className="text-gold-bright">04.</span> Luật
          </p>
          <h2 className="font-display text-paper text-[clamp(2rem,4vw,2.75rem)] leading-[1.05] font-semibold tracking-[-0.02em]">
            Đọc trước khi tham gia.
          </h2>
        </header>

        <div className="gap-stack-sm flex flex-col">
          {rules.map((group) => (
            <Accordion key={group.title} title={group.title}>
              <ol className="text-on-surface-muted list-decimal pl-5 text-[14px] leading-[1.7]">
                {group.items.map((item, i) => (
                  <li key={i} className="mb-1.5">
                    {item}
                  </li>
                ))}
              </ol>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  )
}
