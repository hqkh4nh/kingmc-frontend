'use client'

import type { ButtonHTMLAttributes } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline'
type Size = 'sm' | 'md' | 'lg'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
}

const base =
  'group relative inline-flex items-center justify-center gap-2 ' +
  'rounded-pill font-medium tracking-tight ' +
  'transition-all duration-200 ease-out ' +
  'active:scale-[0.97] ' +
  'focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-bright/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ink ' +
  'disabled:pointer-events-none disabled:opacity-40'

const sizes: Record<Size, string> = {
  sm: 'h-9 px-4 text-[13px]',
  md: 'h-11 px-6 text-[15px]',
  lg: 'h-14 px-9 text-[17px]',
}

const variants: Record<Variant, string> = {
  // Brass-warm primary with inset highlight + soft glow halo
  primary:
    'bg-gold text-gold-ink hover:bg-gold-bright ' +
    'shadow-[0_1px_0_rgba(255,255,255,0.25)_inset,0_-2px_0_rgba(0,0,0,0.15)_inset,0_8px_24px_-8px_rgba(200,163,86,0.5),0_4px_12px_-4px_rgba(0,0,0,0.4)] ' +
    'hover:shadow-[0_1px_0_rgba(255,255,255,0.3)_inset,0_-2px_0_rgba(0,0,0,0.18)_inset,0_12px_28px_-6px_rgba(220,184,116,0.55),0_6px_16px_-2px_rgba(0,0,0,0.45)] ' +
    'hover:-translate-y-px',
  secondary:
    'bg-surface-3 text-paper hover:bg-surface-raised ' +
    'shadow-[0_1px_0_rgba(255,255,255,0.04)_inset,0_4px_12px_-4px_rgba(0,0,0,0.45),0_0_0_1px_rgba(245,239,226,0.08)_inset]',
  ghost:
    'text-on-surface-muted hover:text-paper hover:bg-surface/60 ' +
    'shadow-[0_0_0_1px_rgba(245,239,226,0)_inset] hover:shadow-[0_0_0_1px_rgba(245,239,226,0.06)_inset]',
  outline:
    'bg-transparent text-paper hover:bg-paper/5 ' +
    'shadow-[0_0_0_1px_rgba(245,239,226,0.18)_inset] hover:shadow-[0_0_0_1px_rgba(220,184,116,0.5)_inset]',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  ...rest
}: Props) {
  return <button className={`${base} ${sizes[size]} ${variants[variant]} ${className}`} {...rest} />
}
