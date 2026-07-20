import type { Metadata } from 'next'
import Footer from '@/features/home/Footer'
import GameModes from '@/features/home/GameModes'
import Hero from '@/features/home/Hero'
import JoinGuide from '@/features/home/JoinGuide'
import SiteHeader from '@/features/home/SiteHeader'

export const unstable_instant = { prefetch: 'static' }

export const metadata: Metadata = {
  title: 'Máy chủ Minecraft #1 Việt Nam',
  alternates: { canonical: '/' },
}

const homeJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://kingmc.vn#org',
      name: 'KingMC',
      url: 'https://kingmc.vn',
      logo: 'https://kingmc.vn/og/default.png',
      sameAs: [
        'https://discord.gg/kingmcvn',
        'https://www.facebook.com/kingmcvn/',
        'https://www.youtube.com/@kingmc_vietnam',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://kingmc.vn#site',
      url: 'https://kingmc.vn',
      name: 'KingMC',
      description: 'Máy chủ Minecraft #1 Việt Nam',
      inLanguage: 'vi',
    },
  ],
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
      <div className="relative min-h-screen overflow-x-clip">
        <SiteHeader />
        <main>
          <Hero />
          <GameModes />
          <JoinGuide />
        </main>
        <Footer />
      </div>
    </>
  )
}
