'use client'

import { useEffect, useRef, useState } from 'react'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'

interface Options {
  /** Animation length in ms. Default 1400. */
  durationMs?: number
  /** Wait until true before animating (e.g. gated on scroll reveal). Default true. */
  start?: boolean
}

const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t))

/**
 * Counts up to `target` with an ease-out curve. Returns `null` while `target` is
 * null (loading), and snaps straight to `target` under reduced-motion or before
 * `start`. Live refetches tween from the last shown value instead of resetting to 0.
 */
export function useCountUp(target: number | null, { durationMs = 1400, start = true }: Options = {}) {
  const reduced = usePrefersReducedMotion()
  const animate = start && !reduced && target !== null
  const [animatedValue, setAnimatedValue] = useState(0)
  const fromRef = useRef(0)

  useEffect(() => {
    if (!animate) return
    const from = fromRef.current
    const delta = (target as number) - from
    let raf: number | null = null
    let startTs: number | null = null
    const tick = (ts: number) => {
      if (startTs === null) startTs = ts
      const progress = Math.min((ts - startTs) / durationMs, 1)
      const current = Math.round(from + easeOutExpo(progress) * delta)
      setAnimatedValue(current)
      fromRef.current = current
      if (progress < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => {
      if (raf !== null) cancelAnimationFrame(raf)
    }
  }, [animate, target, durationMs])

  if (target === null) return null
  if (!animate) return target
  return animatedValue
}
