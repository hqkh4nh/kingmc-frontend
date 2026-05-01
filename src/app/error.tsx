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
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="text-overline text-gold-bright">Lỗi</p>
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
