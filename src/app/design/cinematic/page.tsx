import type { Metadata } from 'next'
import CinematicHero from '@/features/design/cinematic/CinematicHero'
import CinematicModes from '@/features/design/cinematic/CinematicModes'
import Footer from '@/features/home/Footer'
import JoinGuide from '@/features/home/JoinGuide'
import SiteHeader from '@/features/home/SiteHeader'

export const metadata: Metadata = {
  title: 'Cinematic · Bản thử giao diện',
  robots: { index: false, follow: false },
}

export default function CinematicDesignPage() {
  return (
    <div data-theme="cinematic" className="bg-ink text-on-surface relative min-h-dvh overflow-x-clip">
      <SiteHeader />
      <main>
        <CinematicHero />
        <CinematicModes />
        <JoinGuide />
      </main>
      <Footer />
    </div>
  )
}
