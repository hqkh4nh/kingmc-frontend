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

// --drop scales the hard offset-shadow with the button size (spec 5.4): small
// buttons (nav) get a 2px drop, the large hero CTA keeps the heavier 4px.
const sizes: Record<Size, string> = {
  sm: 'h-9 px-4 text-[13px] [--drop:2px]',
  md: 'h-11 px-6 text-[15px] [--drop:2px]',
  lg: 'h-14 px-9 text-[17px] [--drop:4px]',
}

const variants: Record<Variant, string> = {
  // Brass primary with a Minecraft-style bevel (light top, dark bottom) + hard offset drop.
  // One physics for the whole site: hover lifts the block up, active presses it back down.
  primary:
    'bg-gold text-gold-ink hover:bg-gold-bright ' +
    'shadow-[0_1px_0_rgba(255,255,255,0.25)_inset,0_-2px_0_rgba(0,0,0,0.15)_inset,var(--drop)_var(--drop)_0_rgba(0,0,0,0.4)] ' +
    'hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[0_1px_0_rgba(255,255,255,0.3)_inset,0_-2px_0_rgba(0,0,0,0.18)_inset,6px_6px_0_rgba(0,0,0,0.45)] ' +
    'active:translate-x-0 active:translate-y-0 active:shadow-[0_1px_0_rgba(255,255,255,0.2)_inset,2px_2px_0_rgba(0,0,0,0.4)]',
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
