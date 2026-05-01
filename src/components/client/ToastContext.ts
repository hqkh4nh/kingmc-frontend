'use client'

import { createContext } from 'react'

export interface ToastContent {
  message: string
  variant?: 'success' | 'info' | 'error'
}

export interface ToastContextValue {
  showToast: (content: ToastContent, durationMs?: number) => void
}

export const ToastContext = createContext<ToastContextValue | null>(null)
