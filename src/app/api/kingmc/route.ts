import { NextResponse } from 'next/server'
import { fetchKingmcStats } from '@/lib/api/kingmc'

export async function GET() {
  try {
    const stats = await fetchKingmcStats()
    return NextResponse.json(stats, {
      headers: {
        'cache-control': 'public, s-maxage=30, stale-while-revalidate=60',
      },
    })
  } catch (err) {
    console.error('[api/kingmc]', err)
    return NextResponse.json({ error: 'upstream unavailable' }, { status: 502 })
  }
}
