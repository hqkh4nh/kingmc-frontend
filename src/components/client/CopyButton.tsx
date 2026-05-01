'use client'

import { useCopyToClipboard } from '@/hooks/useCopyToClipboard'
import Icon from '@/components/server/Icon'

interface Props {
  text: string
  label?: string
  className?: string
}

export default function CopyButton({ text, label = 'Sao chép', className = '' }: Props) {
  const { copy, copied } = useCopyToClipboard()
  return (
    <button
      type="button"
      onClick={() => copy(text)}
      aria-label={copied ? 'Đã sao chép' : label}
      title={copied ? 'Đã sao chép' : label}
      className={`group rounded-pill inline-flex h-9 w-9 items-center justify-center transition-all duration-200 ease-out active:scale-[0.92] ${
        copied
          ? 'bg-moss/20 text-moss shadow-[0_0_0_1px_rgba(106,148,97,0.3)_inset]'
          : 'text-on-surface-muted hover:text-gold-bright shadow-[0_0_0_1px_rgba(245,239,226,0.1)_inset] hover:shadow-[0_0_0_1px_rgba(220,184,116,0.45)_inset]'
      } focus-visible:ring-gold-bright/55 focus-visible:ring-offset-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${className}`}
    >
      <Icon name={copied ? 'check' : 'copy'} size={16} />
    </button>
  )
}
