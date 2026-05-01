'use client'

import { useEffect, useRef, useState } from 'react'

export function useScrollReveal<T extends HTMLElement = HTMLElement>(
  options?: IntersectionObserverInit,
) {
  const ref = useRef<T | null>(null)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || revealed) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setRevealed(true)
          obs.disconnect()
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1, ...options },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [revealed, options])

  return { ref, revealed }
}
