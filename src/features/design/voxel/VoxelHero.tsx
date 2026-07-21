import { Suspense } from 'react'
import Icon from '@/components/server/Icon'
import Logo from '@/components/server/Logo'
import { siteConfig } from '@/config/site'
import ConnectionCard from '@/features/home/ConnectionCard'
import PlayerCountServer from '@/features/player-count/PlayerCountServer'
import VoxelCube from './VoxelCube'
import VoxelPlayButton from './VoxelPlayButton'

// Decorative floating blocks scattered around the hero.
const BLOCKS = [
  { size: 74, block: 'grass', pos: 'top-[14%] left-[8%]', delay: '0s' },
  { size: 52, block: 'diamondOre', pos: 'top-[22%] right-[12%]', delay: '1.2s' },
  { size: 90, block: 'gold', pos: 'bottom-[16%] left-[14%]', delay: '0.6s' },
  { size: 46, block: 'lapis', pos: 'bottom-[24%] right-[16%]', delay: '1.8s' },
  { size: 38, block: 'planks', pos: 'top-[46%] left-[4%]', delay: '2.4s' },
] as const

export default function VoxelHero() {
  const { brand, social } = siteConfig
  return (
    <section className="relative isolate flex min-h-dvh flex-col items-center justify-center overflow-hidden px-6">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 [background:radial-gradient(80%_60%_at_50%_20%,rgba(123,201,111,0.12),transparent_70%)]"
      />
      {/* Floating voxel blocks */}
      {BLOCKS.map((b, i) => (
        <div
          key={i}
          aria-hidden="true"
          className={`voxel-scene pointer-events-none absolute hidden md:block ${b.pos}`}
        >
          <VoxelCube size={b.size} block={b.block} style={{ animationDelay: b.delay }} />
        </div>
      ))}

      <div className="relative z-10 flex flex-col items-center text-center">
        <span className="rounded-lg text-overline text-gold-ink bg-gold mb-6 px-4 py-2 shadow-[0_4px_0_0_var(--color-gold-deep)]">
          BLOCK BY BLOCK
        </span>
        <Logo variant="with-text" maxHeight={280} />
        <h1 className="sr-only">{brand.name}</h1>
        <p className="text-on-surface-muted mt-6 max-w-md text-[17px]">{brand.tagline}.</p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <VoxelPlayButton />
          <a
            href={social.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-surface-2 text-paper inline-flex h-14 items-center gap-2.5 rounded-lg px-7 text-[15px] font-bold tracking-wide uppercase shadow-[0_6px_0_0_rgba(0,0,0,0.35)] transition-all duration-100 hover:brightness-110 active:translate-y-1.5 active:shadow-[0_1px_0_0_rgba(0,0,0,0.35)]"
          >
            <Icon name="discord" size={18} />
            Discord
          </a>
        </div>

        <div className="mt-10">
          <Suspense fallback={<ConnectionCard initialPlayerCount={null} />}>
            <PlayerCountServer />
          </Suspense>
        </div>
      </div>
    </section>
  )
}
