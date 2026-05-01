'use client'

import type { ToastContent } from '@/components/client/ToastContext'
import Icon from '@/components/server/Icon'

interface Props {
  toast: ToastContent | null
}

export default function Toast({ toast }: Props) {
  return (
    <div
      role="status"
      aria-live="polite"
      className="pointer-events-none fixed inset-x-0 bottom-6 z-[100] flex justify-center px-4 sm:inset-x-auto sm:right-6 sm:bottom-6 sm:left-auto sm:justify-end"
    >
      {toast && (
        <div
          key={toast.message}
          className="rounded-pill bg-surface-3 text-paper animate-toast-rise pointer-events-auto inline-flex max-w-md items-center gap-2.5 px-5 py-3 text-[14px] font-medium shadow-[0_0_0_1px_rgba(245,239,226,0.08)_inset,0_16px_48px_-12px_rgba(0,0,0,0.6)]"
        >
          {toast.variant !== 'error' && (
            <Icon name="check" size={16} className="text-gold-bright" />
          )}
          <span>{toast.message}</span>
        </div>
      )}
    </div>
  )
}
