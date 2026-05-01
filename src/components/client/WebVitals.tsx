'use client'

import { useReportWebVitals } from 'next/web-vitals'

export default function WebVitals() {
  useReportWebVitals((metric) => {
    if (process.env.NODE_ENV !== 'production') return
    void fetch('/api/vitals', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(metric),
      keepalive: true,
    }).catch((_err: unknown) => {
      // ignore fetch errors
    })
  })
  return null
}
