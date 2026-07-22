import type { HTMLAttributes } from 'react'

export type ChipColor = 'gold' | 'lime' | 'sky' | 'slate' | 'rose' | 'moss' | 'rust' | 'lapis'

interface Props extends HTMLAttributes<HTMLSpanElement> {
  color?: ChipColor
}

const colors: Record<ChipColor, string> = {
  gold: 'bg-gold/15 text-gold-bright ring-1 ring-gold/30',
  moss: 'bg-gold-deep/12 text-gold-deep ring-1 ring-gold-deep/30',
  lime: 'bg-gold-deep/12 text-gold-deep ring-1 ring-gold-deep/30',
  rust: 'bg-gold/15 text-gold-bright ring-1 ring-gold/30',
  rose: 'bg-gold/15 text-gold-bright ring-1 ring-gold/30',
  lapis: 'bg-gold/15 text-gold-bright ring-1 ring-gold/30',
  sky: 'bg-gold/15 text-gold-bright ring-1 ring-gold/30',
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
