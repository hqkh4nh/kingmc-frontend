import type { Metadata } from 'next'
import Footer from '@/features/home/Footer'
import JoinGuide from '@/features/home/JoinGuide'
import SiteHeader from '@/features/home/SiteHeader'
import VoxelHero from '@/features/design/voxel/VoxelHero'
import VoxelModes from '@/features/design/voxel/VoxelModes'
import '@/features/design/voxel/voxel.css'

export const metadata: Metadata = {
  title: 'Voxel · Bản thử giao diện',
  robots: { index: false, follow: false },
}

export default function VoxelDesignPage() {
  return (
    <div data-theme="voxel" className="bg-ink text-on-surface relative min-h-dvh overflow-x-clip">
      <SiteHeader />
      <main>
        <VoxelHero />
        <VoxelModes />
        <JoinGuide />
      </main>
      <Footer />
    </div>
  )
}
