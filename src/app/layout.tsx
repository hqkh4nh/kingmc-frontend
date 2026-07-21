import type { Metadata, Viewport } from 'next'
import {
  Bricolage_Grotesque,
  Fraunces,
  JetBrains_Mono,
  Plus_Jakarta_Sans,
} from 'next/font/google'
import GrainOverlay from '@/components/server/GrainOverlay'
import ScrollProgress from '@/components/client/ScrollProgress'
import WebVitals from '@/components/client/WebVitals'
import Providers from './providers'
import { env } from '@/lib/env'
import './globals.css'

const bricolage = Bricolage_Grotesque({
  subsets: ['latin', 'vietnamese'],
  variable: '--font-bricolage',
  display: 'swap',
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin', 'vietnamese'],
  variable: '--font-jakarta',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

// High-contrast display serif — used ONLY for short editorial in-line accents.
const fraunces = Fraunces({
  subsets: ['latin', 'vietnamese'],
  variable: '--font-fraunces',
  display: 'swap',
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_SITE_URL),
  title: {
    default: 'KingMC · Máy chủ Minecraft #2 Việt Nam',
    template: '%s · KingMC',
  },
  description:
    'KingMC · Máy chủ Minecraft #2 Việt Nam. KingSMP, Mega Earth, Battle Royale. IP: kingmc.vn',
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    siteName: 'KingMC',
    images: [{ url: '/og/default.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og/default.png'],
  },
  icons: { icon: '/favicon.png' },
}

export const viewport: Viewport = {
  themeColor: '#0B1018',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="vi"
      data-theme="editorial"
      className={`${bricolage.variable} ${jakarta.variable} ${jetbrains.variable} ${fraunces.variable}`}
      suppressHydrationWarning
    >
      <body
        className="bg-ink text-on-surface min-h-screen font-sans antialiased"
        suppressHydrationWarning
      >
        <WebVitals />
        <GrainOverlay />
        <ScrollProgress />
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
