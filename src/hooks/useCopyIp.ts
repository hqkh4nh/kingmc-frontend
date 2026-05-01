'use client'

import { useCallback } from 'react'
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard'

interface UseCopyIpOptions {
  ip?: string
  scrollToId?: string
  toastMessage?: string
}

export function useCopyIp(options: UseCopyIpOptions = {}) {
  const { ip = 'kingmc.vn', scrollToId, toastMessage } = options
  const { copy } = useCopyToClipboard()

  return useCallback(async () => {
    await copy(ip, toastMessage ?? `Đã copy IP. Mở Minecraft và paste.`)
    if (scrollToId) {
      const el = document.getElementById(scrollToId)
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [copy, ip, scrollToId, toastMessage])
}
