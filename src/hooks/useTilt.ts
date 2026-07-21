'use client'

import { useEffect, useRef } from 'react'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'

interface Options {
  /** Peak tilt in degrees at the corners. Default 6. */
  max?: number
  /** Scale applied while hovering. Default 1.015. */
  scale?: number
  /** Perspective distance in px. Default 900. */
  perspective?: number
}

/**
 * 3D pointer-tilt for cards. Writes `transform` directly on the node (no React
 * re-render) via requestAnimationFrame, and stays GPU-only. No-op under
 * reduced-motion or on coarse-pointer (touch) devices, where it would fight scroll.
 */
export function useTilt<T extends HTMLElement = HTMLElement>({
  max = 6,
  scale = 1.015,
  perspective = 900,
}: Options = {}) {
  const ref = useRef<T | null>(null)
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    const el = ref.current
    if (!el || reduced) return
    if (window.matchMedia('(pointer: coarse)').matches) return

    let raf: number | null = null
    const base = 'transition: transform 400ms var(--ease-fluid);'
    el.style.cssText += base

    const apply = (rx: number, ry: number, sc: number) => {
      el.style.transform = `perspective(${perspective}px) rotateX(${rx}deg) rotateY(${ry}deg) scale(${sc})`
    }

    const onMove = (e: PointerEvent) => {
      if (raf !== null) cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect()
        const px = (e.clientX - r.left) / r.width - 0.5
        const py = (e.clientY - r.top) / r.height - 0.5
        apply(-py * max * 2, px * max * 2, scale)
      })
    }
    const onLeave = () => {
      if (raf !== null) cancelAnimationFrame(raf)
      apply(0, 0, 1)
    }

    el.addEventListener('pointermove', onMove)
    el.addEventListener('pointerleave', onLeave)
    return () => {
      if (raf !== null) cancelAnimationFrame(raf)
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerleave', onLeave)
      el.style.transform = ''
    }
  }, [max, scale, perspective, reduced])

  return ref
}
