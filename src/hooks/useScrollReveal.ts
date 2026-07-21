'use client'

import { useEffect, useLayoutEffect, useRef, useState } from 'react'

// useLayoutEffect on the client (measure + reveal before paint), useEffect on the
// server to avoid the SSR warning.
const useIsoLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect

export function useScrollReveal<T extends HTMLElement = HTMLElement>(
  options?: IntersectionObserverInit,
) {
  const ref = useRef<T | null>(null)
  const [revealed, setRevealed] = useState(false)

  useIsoLayoutEffect(() => {
    const el = ref.current
    if (!el || revealed) return

    const inView = () => {
      const r = el.getBoundingClientRect()
      return r.top < window.innerHeight && r.bottom > 0
    }

    // Already on screen at mount — a short page, or a back-navigation that
    // restored scroll to this section. Reveal before paint so the entrance never
    // re-plays as a blur-in when the user lands here.
    if (inView()) {
      setRevealed(true)
      return
    }

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

    // Back/forward cache restore: the effect does not re-run, but this listener
    // survives, so re-check visibility when the frozen page is shown again.
    const onPageShow = (e: PageTransitionEvent) => {
      if (e.persisted && inView()) setRevealed(true)
    }
    window.addEventListener('pageshow', onPageShow)

    return () => {
      obs.disconnect()
      window.removeEventListener('pageshow', onPageShow)
    }
  }, [revealed, options])

  return { ref, revealed }
}
