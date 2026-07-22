'use client'

import type { ToastContent } from '@/components/client/ToastContext'

interface Props {
  toast: ToastContent | null
}

/**
 * Minecraft-chat styled toast: translucent black box, monospace, square corners,
 * hard blocky shadow. Success is white text, errors tint red like a §c chat line.
 */
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
          className="animate-toast-rise shadow-hard-sm pointer-events-auto inline-flex max-w-md items-center rounded-none bg-black/60 px-4 py-2.5 font-mono text-[13px] backdrop-blur-sm"
        >
          <span className={toast.variant === 'error' ? 'text-[#ff6b6b]' : 'text-white'}>
            {toast.message}
          </span>
        </div>
      )}
    </div>
  )
}
