import type { HTMLAttributes } from 'react'

export type ChipColor = 'gold' | 'lime' | 'sky' | 'slate' | 'rose' | 'moss' | 'rust' | 'lapis'

interface Props extends HTMLAttributes<HTMLSpanElement> {
  color?: ChipColor
}

const colors: Record<ChipColor, string> = {
  gold: 'bg-gold/15 text-gold-bright ring-1 ring-gold/30',
  moss: 'bg-moss/15 text-moss ring-1 ring-moss/30',
  lime: 'bg-moss/15 text-moss ring-1 ring-moss/30',
  rust: 'bg-rust/18 text-rust ring-1 ring-rust/35',
  rose: 'bg-rust/18 text-rust ring-1 ring-rust/35',
  lapis: 'bg-lapis/15 text-lapis ring-1 ring-lapis/30',
  sky: 'bg-lapis/15 text-lapis ring-1 ring-lapis/30',
  slate: 'bg-paper/5 text-on-surface-muted ring-1 ring-paper/10',
}

export default function Chip({ color = 'slate', className = '', children, ...rest }: Props) {
  return (
    <span
      className={`rounded-pill inline-flex items-center gap-1.5 px-2.5 py-1 text-[10.5px] font-medium tracking-[0.14em] uppercase ${colors[color]} ${className}`}
      {...rest}
    >
      {children}
    </span>
  )
}
