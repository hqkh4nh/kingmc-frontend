'use client'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="vi">
      <body
        style={{
          margin: 0,
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0b1018',
          color: '#f5efe2',
          fontFamily: 'system-ui, sans-serif',
          textAlign: 'center',
          padding: '24px',
        }}
      >
        <div>
          <h1 style={{ fontSize: '32px', margin: '0 0 8px' }}>Hệ thống đang gặp sự cố</h1>
          <p style={{ color: '#a4a8b2', margin: '0 0 24px' }}>{error.message}</p>
          <button
            type="button"
            onClick={reset}
            style={{
              backgroundColor: '#c8a356',
              color: '#2a1f08',
              border: 'none',
              borderRadius: '999px',
              padding: '12px 24px',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            Thử lại
          </button>
        </div>
      </body>
    </html>
  )
}
