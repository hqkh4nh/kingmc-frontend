import Link from 'next/link'
import Icon from '@/components/server/Icon'
import type { LegalBlock, LegalDoc } from '@/data/legal'

/** `2026-07-21` → `21/07/2026` (parse thủ công để tránh lệch múi giờ). */
function formatDate(iso: string): string {
  const [y, m, d] = iso.split('-')
  return `${d}/${m}/${y}`
}

function Block({ block }: { block: LegalBlock }) {
  if (block.type === 'subheading') {
    return <h3 className="text-heading-md text-paper mt-stack-sm font-display">{block.text}</h3>
  }
  if (block.type === 'list') {
    return (
      <ul className="gap-stack-xs mt-3 flex flex-col">
        {block.items.map((item, i) => (
          <li key={i} className="text-body-md text-on-surface-muted flex gap-3">
            <span aria-hidden="true" className="bg-gold-bright/50 mt-[13px] h-px w-2.5 shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    )
  }
  return <p className="text-body-md text-on-surface-muted mt-3">{block.text}</p>
}

export default function LegalArticle({ doc }: { doc: LegalDoc }) {
  return (
    <article className="px-margin pb-stack-2xl pt-stack-2xl">
      <div className="mx-auto max-w-[var(--container-narrow)]">
        <Link
          href="/"
          className="text-on-surface-faded hover:text-gold-bright group inline-flex items-center gap-1.5 text-[13px] font-medium tracking-tight transition-colors duration-200"
        >
          <Icon
            name="arrow-left"
            size={16}
            className="transition-transform group-hover:-translate-x-0.5"
          />
          Về trang chủ
        </Link>

        <header className="mt-stack-md">
          <h1 className="text-display-lg text-paper font-display">{doc.title}</h1>
          <p className="text-body-md text-on-surface-muted mt-stack-sm">{doc.summary}</p>
          <p className="text-on-surface-faded mt-3 text-[13px] tracking-tight">
            Cập nhật lần cuối: {formatDate(doc.updatedAt)}
          </p>
        </header>

        {/* Mục lục */}
        <nav aria-label="Mục lục" className="bg-surface/40 edge-lit mt-stack-md rounded-2xl p-5">
          <p className="eyebrow text-on-surface-faded">MỤC LỤC</p>
          <ul className="mt-3 flex flex-col gap-1.5">
            {doc.sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="text-on-surface-muted hover:text-gold-bright text-[14px] tracking-tight transition-colors duration-200"
                >
                  {section.heading}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Nội dung */}
        <div className="mt-stack-lg gap-stack-lg flex flex-col">
          {doc.sections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-32">
              <h2 className="text-heading-lg text-paper font-display">{section.heading}</h2>
              <div className="mt-4">
                {section.blocks.map((block, i) => (
                  <Block key={i} block={block} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </article>
  )
}
