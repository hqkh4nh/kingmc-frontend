'use client'

import { useEffect, useRef } from 'react'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'

interface Options {
  /**
   * Fraction of scroll distance the layer moves by. Negative drifts up as you
   * scroll down (classic depth). Default -0.15.
   */
  speed?: number
  /** Also drift by pointer position (hero depth). Max px offset. Default 0. */
  pointer?: number
}

/**
 * Scroll (and optional pointer) parallax. GPU-only: writes `translate3d` on the
 * node inside a rAF, throttled to one update per frame. Fully disabled under
 * reduced-motion. Scroll/pointer listeners are passive; the rAF is cancelled on
 * unmount.
 */
export function useParallax<T extends HTMLElement = HTMLElement>({
  speed = -0.15,
  pointer = 0,
}: Options = {}) {
  const ref = useRef<T | null>(null)
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    const el = ref.current
    if (!el || reduced) return

    let raf: number | null = null
    let scrollY = 0
    let mx = 0
    let my = 0

    const render = () => {
      raf = null
      const y = scrollY * speed
      el.style.transform = `translate3d(${mx * pointer}px, ${y + my * pointer}px, 0)`
    }
    const schedule = () => {
      if (raf === null) raf = requestAnimationFrame(render)
    }
    const onScroll = () => {
      scrollY = window.scrollY
      schedule()
    }
    const onPointer = (e: PointerEvent) => {
      if (!pointer) return
      mx = e.clientX / window.innerWidth - 0.5
      my = e.clientY / window.innerHeight - 0.5
      schedule()
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    if (pointer) window.addEventListener('pointermove', onPointer, { passive: true })
    return () => {
      if (raf !== null) cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('pointermove', onPointer)
      el.style.transform = ''
    }
  }, [speed, pointer, reduced])

  return ref
}
