'use client'

import { useEffect } from 'react'

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Route error:', error)
  }, [error])

  return (
    <main className="px-margin relative isolate flex min-h-dvh flex-col items-center justify-center overflow-hidden text-center">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 [background:radial-gradient(ellipse_at_50%_30%,rgba(200,163,86,0.1),transparent_60%)]"
      />
      <p className="eyebrow text-gold-bright">Lỗi</p>
      <h1 className="text-display-lg text-paper mt-stack-md">Có gì đó không ổn</h1>
      <p className="text-body-md text-on-surface-muted mt-stack-sm max-w-md">
        Vui lòng thử lại. Nếu vẫn lỗi, hãy báo trên Discord của KingMC.
      </p>
      <button
        type="button"
        onClick={reset}
        className="bg-gold text-gold-ink hover:bg-gold-bright rounded-pill mt-stack-lg inline-flex h-12 items-center px-6 font-medium transition-colors"
      >
        Thử lại
      </button>
    </main>
  )
}
