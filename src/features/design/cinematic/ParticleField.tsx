'use client'

import { useEffect, useRef } from 'react'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

const COUNT = 56 // hard cap — dust motes drifting up through the beam

interface Mote {
  x: number
  y: number
  r: number
  vy: number
  vx: number
  a: number
}

/**
 * Lightweight canvas of drifting dust motes for the cinematic hero. Capped at
 * COUNT particles, DPR-aware, and fully inert under reduced-motion (the rAF is
 * never started and is cancelled on unmount).
 */
export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    if (reduced) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let w = 0
    let h = 0
    let raf: number | null = null
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    let motes: Mote[] = []

    const seed = () => {
      motes = Array.from({ length: COUNT }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.6 + 0.4,
        vy: -(Math.random() * 0.25 + 0.05),
        vx: (Math.random() - 0.5) * 0.15,
        a: Math.random() * 0.5 + 0.1,
      }))
    }
    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      w = rect.width
      h = rect.height
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      seed()
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      for (const m of motes) {
        m.y += m.vy
        m.x += m.vx
        if (m.y < -4) {
          m.y = h + 4
          m.x = Math.random() * w
        }
        ctx.beginPath()
        ctx.arc(m.x, m.y, m.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(143, 208, 255, ${m.a})`
        ctx.fill()
      }
      raf = requestAnimationFrame(draw)
    }

    resize()
    window.addEventListener('resize', resize)
    raf = requestAnimationFrame(draw)
    return () => {
      if (raf !== null) cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [reduced])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  )
}
