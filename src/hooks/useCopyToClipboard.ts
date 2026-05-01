'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { useToast } from '@/hooks/useToast'

export function useCopyToClipboard(resetMs = 2000) {
  const [copied, setCopied] = useState(false)
  const timer = useRef<number | undefined>(undefined)
  const { showToast } = useToast()

  const copy = useCallback(
    async (text: string, toastMessage?: string) => {
      try {
        if (navigator.clipboard?.writeText) {
          await navigator.clipboard.writeText(text)
        } else {
          const el = document.createElement('textarea')
          el.value = text
          el.style.position = 'fixed'
          el.style.opacity = '0'
          document.body.appendChild(el)
          el.select()
          document.execCommand('copy')
          document.body.removeChild(el)
        }
        setCopied(true)
        showToast({ message: toastMessage ?? `Đã copy ${text}` })
        if (timer.current) window.clearTimeout(timer.current)
        timer.current = window.setTimeout(() => setCopied(false), resetMs)
      } catch (err) {
        console.warn('Clipboard copy failed', err)
        showToast({
          message: 'Copy thất bại. Bạn paste IP thủ công nhé.',
          variant: 'error',
        })
      }
    },
    [resetMs, showToast],
  )

  useEffect(
    () => () => {
      if (timer.current) window.clearTimeout(timer.current)
    },
    [],
  )

  return { copy, copied }
}
