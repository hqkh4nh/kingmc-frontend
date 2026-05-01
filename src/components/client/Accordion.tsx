'use client'

import { useState } from 'react'
import type { ReactNode } from 'react'
import Icon from '@/components/server/Icon'

interface Props {
  title: string
  defaultOpen?: boolean
  children: ReactNode
}

export default function Accordion({ title, defaultOpen = false, children }: Props) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="bg-surface-2/60 overflow-hidden rounded-2xl shadow-[0_0_0_1px_rgba(245,239,226,0.06)_inset]">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="hover:bg-paper/[0.03] flex w-full items-center justify-between gap-3 px-6 py-5 text-left transition-colors"
      >
        <h3 className="font-display text-paper text-[18px] font-semibold tracking-tight">
          {title}
        </h3>
        <Icon
          name="chevron-right"
          size={18}
          className={`text-on-surface-faded transition-transform duration-300 ${open ? 'rotate-90' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
          open ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-6">{children}</div>
      </div>
    </div>
  )
}
