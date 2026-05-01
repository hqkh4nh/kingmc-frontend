'use client'

import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'ghost' | 'solid'

interface CommonProps {
  'aria-label': string
  children: ReactNode
  variant?: Variant
  className?: string
}

type ButtonOnlyProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined
  }

type AnchorOnlyProps = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string
  }

type Props = ButtonOnlyProps | AnchorOnlyProps

const base =
  'inline-flex h-10 w-10 items-center justify-center rounded-pill ' +
  'transition-all duration-200 ease-out active:scale-[0.93] ' +
  'focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-bright/55 focus-visible:ring-offset-2 focus-visible:ring-offset-ink ' +
  'disabled:pointer-events-none disabled:opacity-40'

const variants: Record<Variant, string> = {
  ghost:
    'text-on-surface-muted hover:text-paper hover:bg-paper/5 ' +
    'shadow-[0_0_0_1px_rgba(245,239,226,0)_inset] hover:shadow-[0_0_0_1px_rgba(245,239,226,0.08)_inset]',
  solid:
    'bg-surface-3 text-paper hover:bg-surface-raised ' +
    'shadow-[0_0_0_1px_rgba(245,239,226,0.08)_inset,0_4px_12px_-4px_rgba(0,0,0,0.45)]',
}

function isExternalHref(href: string) {
  return href.startsWith('http://') || href.startsWith('https://')
}

function getExternalRel(rel?: string) {
  const relValues = new Set(rel?.split(/\s+/).filter(Boolean))
  relValues.add('noopener')
  relValues.add('noreferrer')
  return Array.from(relValues).join(' ')
}

export default function IconButton(props: Props) {
  const { variant = 'ghost', className = '', ...rest } = props
  const classes = `${base} ${variants[variant]} ${className}`

  if (rest.href !== undefined) {
    const { href, target, rel, ...anchorRest } = rest
    const isExternal = isExternalHref(href)
    return (
      <a
        className={classes}
        href={href}
        rel={isExternal ? getExternalRel(rel) : rel}
        target={isExternal ? '_blank' : target}
        {...anchorRest}
      />
    )
  }

  const { type = 'button', ...buttonRest } = rest
  return <button className={classes} type={type} {...buttonRest} />
}
