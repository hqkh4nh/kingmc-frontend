import { ImageResponse } from 'next/og'
import { cacheLife } from 'next/cache'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { fetchKingmcStats } from '@/lib/api/kingmc'

// Standalone Open Graph / share image (Discord, Facebook, Messenger, Zalo).
// Kept as its own route (not the opengraph-image.tsx file convention) so its
// live-data fetch does not force the statically-prerendered "/" page dynamic.
//
// Design: read as a thumbnail at ~440px wide. Exactly three content blocks in a
// dark left panel (logo, one rounded live number, IP), the art bleeds off the
// right. Square corners, hard offset shadows, one gold accent — matches the site.

const SIZE = { width: 1200, height: 630 }
const fmt = new Intl.NumberFormat('vi-VN')

const PANEL = '#0B0E14'
const IP_BG = '#131824'
const GOLD = '#e9b949'
const PAPER = '#f5efe2'
const MUTED = '#c7cfdd'
const LIVE = '#4ade80'

/** Live player count, cached ~5min. Mirrors PlayerCountServer's caching pattern. */
async function getPlayerCount(): Promise<number | null> {
  'use cache'
  cacheLife({ revalidate: 300, expire: 3600 })
  try {
    const stats = await fetchKingmcStats()
    return stats.minecraft_player_count ?? null
  } catch {
    return null
  }
}

/** Sniff the real image type from magic bytes, so a mislabelled extension
 *  (e.g. a PNG saved as bg.jpg) still gets the correct MIME for satori. */
function sniffMime(b: Buffer): string | null {
  if (b.length >= 4 && b[0] === 0x89 && b[1] === 0x50 && b[2] === 0x4e && b[3] === 0x47)
    return 'image/png'
  if (b.length >= 3 && b[0] === 0xff && b[1] === 0xd8 && b[2] === 0xff) return 'image/jpeg'
  if (b.length >= 4 && b[0] === 0x47 && b[1] === 0x49 && b[2] === 0x46) return 'image/gif'
  return null
}

/** Optional art background. Drop a 1200x630 image at public/og/bg.jpg (or .png,
 *  or assets/og/bg.*); until then it renders on the plain dark panel. */
async function loadBackground(): Promise<string | null> {
  for (const file of [
    'public/og/bg.jpg',
    'public/og/bg.jpeg',
    'public/og/bg.png',
    'assets/og/bg.jpg',
    'assets/og/bg.png',
  ]) {
    try {
      const data = await readFile(join(process.cwd(), file))
      const mime = sniffMime(data)
      if (mime) return `data:${mime};base64,${data.toString('base64')}`
    } catch {
      // try next candidate
    }
  }
  return null
}

export async function GET() {
  const [count, bold, medium, logoData, bgSrc] = await Promise.all([
    getPlayerCount(),
    readFile(join(process.cwd(), 'assets/fonts/JetBrainsMono-Bold.ttf')),
    readFile(join(process.cwd(), 'assets/fonts/JetBrainsMono-Medium.ttf')),
    readFile(join(process.cwd(), 'public/images/logo-with-text.png')),
    loadBackground(),
  ])
  const logoSrc = `data:image/png;base64,${logoData.toString('base64')}`

  // Rounded so a cached image never looks stale/precise (spec 4).
  let countText: string | null = null
  if (count && count >= 1000) countText = `${fmt.format(Math.floor(count / 1000) * 1000)}+`
  else if (count && count > 0) countText = fmt.format(count)

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        position: 'relative',
        background: PANEL,
        fontFamily: 'JetBrainsMono',
      }}
    >
      {/* Art background, bleeds off the right */}
      {bgSrc ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={bgSrc}
          width={1200}
          height={630}
          alt=""
          style={{ position: 'absolute', inset: 0, objectFit: 'cover' }}
        />
      ) : null}

      {/* Light unifying tint — the night art is already cool, just match its blacks */}
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(17,26,44,0.08)' }} />

      {/* Left panel melt — near-solid at the left, transparent by ~78% width */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(90deg, rgba(11,14,20,0.92) 0%, rgba(11,14,20,0.72) 30%, rgba(11,14,20,0.18) 55%, rgba(11,14,20,0) 78%)',
        }}
      />

      {/* Top / bottom framing */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'linear-gradient(180deg, rgba(11,14,20,0.22) 0%, rgba(11,14,20,0) 30%)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'linear-gradient(0deg, rgba(11,14,20,0.3) 0%, rgba(11,14,20,0) 30%)',
        }}
      />

      {/* Content column — three blocks, vertically centered, left aligned */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          paddingLeft: 68,
          paddingRight: 40,
          gap: 28,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={330} height={330} alt="" style={{ objectFit: 'contain' }} />

        {countText ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ width: 18, height: 18, background: LIVE }} />
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 14 }}>
              <div
                style={{
                  fontSize: 66,
                  fontWeight: 700,
                  color: GOLD,
                  lineHeight: 1,
                  textShadow: '3px 3px 0 rgba(0,0,0,0.55)',
                }}
              >
                {countText}
              </div>
              <div
                style={{
                  fontSize: 22,
                  fontWeight: 500,
                  color: MUTED,
                  letterSpacing: '0.14em',
                }}
              >
                NGƯỜI CHƠI
              </div>
            </div>
          </div>
        ) : null}

        {/* IP box — bezel + hard shadow, square corners, gold bullet */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            padding: '16px 26px',
            background: IP_BG,
            borderWidth: 2,
            borderStyle: 'solid',
            borderColor: 'rgba(233,185,73,0.55)',
            boxShadow: '6px 6px 0 rgba(0,0,0,0.5)',
          }}
        >
          <div style={{ width: 12, height: 12, background: GOLD }} />
          <div style={{ fontSize: 34, fontWeight: 700, color: PAPER }}>kingmc.vn</div>
        </div>
      </div>
    </div>,
    {
      ...SIZE,
      fonts: [
        { name: 'JetBrainsMono', data: bold, weight: 700, style: 'normal' },
        { name: 'JetBrainsMono', data: medium, weight: 500, style: 'normal' },
      ],
    },
  )
}
