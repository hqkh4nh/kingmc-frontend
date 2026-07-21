/**
 * Minecraft-STYLE block textures, recreated from scratch as 16x16 pixel art
 * (deterministic SVG data URIs) — no Mojang assets are bundled. Each block gives
 * a top / side / bottom face so cubes read as grass, stone, ore, etc.
 */

// Tiny deterministic PRNG so textures are stable across SSR/CSR (no Math.random).
function lcg(seed: number) {
  let s = seed % 2147483647
  if (s <= 0) s += 2147483646
  return () => (s = (s * 16807) % 2147483647) / 2147483647
}

interface SpeckleOpts {
  /** Optional top band (grass fringe): [heightPx, bandColor, bandSpeckle]. */
  band?: [number, string, string]
  /** Density of speckles (0..1). */
  density?: number
  size?: number
}

function speckle(base: string, dark: string, light: string, seed: number, opts: SpeckleOpts = {}) {
  const size = opts.size ?? 16
  const density = opts.density ?? 0.5
  const rand = lcg(seed)
  let rects = `<rect width='${size}' height='${size}' fill='${base}'/>`
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      if (rand() > density) continue
      const c = rand() > 0.5 ? dark : light
      rects += `<rect x='${x}' y='${y}' width='1' height='1' fill='${c}'/>`
    }
  }
  if (opts.band) {
    const [h, bandColor, bandSpeckle] = opts.band
    rects += `<rect width='${size}' height='${h}' fill='${bandColor}'/>`
    const r2 = lcg(seed + 99)
    for (let y = 0; y < h; y++) {
      for (let x = 0; x < size; x++) {
        if (r2() > 0.45) continue
        rects += `<rect x='${x}' y='${y}' width='1' height='1' fill='${bandSpeckle}'/>`
      }
    }
    // ragged fringe just below the band
    const r3 = lcg(seed + 7)
    for (let x = 0; x < size; x++) {
      if (r3() > 0.5) rects += `<rect x='${x}' y='${h}' width='1' height='1' fill='${bandColor}'/>`
    }
  }
  return `<svg xmlns='http://www.w3.org/2000/svg' width='${size}' height='${size}' shape-rendering='crispEdges'>${rects}</svg>`
}

// Scatter fixed clusters (ore) on top of a base texture.
function ore(baseSvg: string, spots: [number, number][], colorA: string, colorB: string) {
  const inner = baseSvg.replace(/<\/svg>$/, '')
  let rects = ''
  for (const [x, y] of spots) {
    rects += `<rect x='${x}' y='${y}' width='2' height='2' fill='${colorA}'/>`
    rects += `<rect x='${x}' y='${y}' width='1' height='1' fill='${colorB}'/>`
  }
  return `${inner}${rects}</svg>`
}

const uri = (svg: string) => `url("data:image/svg+xml,${encodeURIComponent(svg)}")`

// --- Face texture sources ---
const grassTop = speckle('#6aa84f', '#5c9243', '#7bbd5b', 11, { density: 0.55 })
const dirt = speckle('#8a5a34', '#6f4728', '#9c6a41', 22, { density: 0.5 })
const grassSide = speckle('#8a5a34', '#6f4728', '#9c6a41', 22, {
  density: 0.5,
  band: [4, '#6aa84f', '#5c9243'],
})
const stone = speckle('#8f8f8f', '#767676', '#a2a2a2', 33, { density: 0.5 })
const gold = speckle('#f3c530', '#d6a520', '#ffe06a', 44, { density: 0.4 })
const planks = speckle('#b3854f', '#946a3c', '#c39a63', 55, { density: 0.35 })
const lapis = speckle('#2f5aa8', '#26478a', '#3f74c8', 66, { density: 0.5 })
const diamondOre = ore(stone, [[3, 4], [10, 3], [6, 9], [11, 11], [2, 12]], '#4ec8c8', '#bff5f5')

export interface VoxelBlock {
  top: string
  side: string
  bottom: string
}

export const BLOCKS = {
  grass: { top: uri(grassTop), side: uri(grassSide), bottom: uri(dirt) },
  stone: { top: uri(stone), side: uri(stone), bottom: uri(stone) },
  diamondOre: { top: uri(diamondOre), side: uri(diamondOre), bottom: uri(stone) },
  gold: { top: uri(gold), side: uri(gold), bottom: uri(gold) },
  planks: { top: uri(planks), side: uri(planks), bottom: uri(planks) },
  lapis: { top: uri(lapis), side: uri(lapis), bottom: uri(lapis) },
} satisfies Record<string, VoxelBlock>

export type BlockName = keyof typeof BLOCKS
