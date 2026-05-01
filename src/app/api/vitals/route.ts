import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const metric = await req.json()
    console.log('[web-vitals]', metric)
  } catch {
    // ignore malformed bodies
  }
  return NextResponse.json({ ok: true })
}
