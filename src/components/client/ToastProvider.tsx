'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import { ToastContext } from '@/components/client/ToastContext'
import type { ToastContent, ToastContextValue } from '@/components/client/ToastContext'
import Toast from '@/components/client/Toast'

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toast, setToast] = useState<ToastContent | null>(null)
  const timer = useRef<number | undefined>(undefined)

  const showToast = useCallback<ToastContextValue['showToast']>((content, durationMs = 2500) => {
    if (timer.current) window.clearTimeout(timer.current)
    setToast(content)
    timer.current = window.setTimeout(() => setToast(null), durationMs)
  }, [])

  useEffect(() => {
    const onOffline = () => {
      showToast({ message: 'Mất kết nối mạng. Thử reload nhé.', variant: 'error' })
    }
    window.addEventListener('offline', onOffline)
    return () => window.removeEventListener('offline', onOffline)
  }, [showToast])

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <Toast toast={toast} />
    </ToastContext.Provider>
  )
}
