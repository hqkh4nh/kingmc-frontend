import type { GameMode } from '@/config/site'
import { siteConfig } from '@/config/site'
import GameModeCard from './GameModeCard'

export default function GameModes() {
  const modes = siteConfig.gameModes as GameMode[]
  const featured = modes[0]!
  const rest = modes.slice(1)

  return (
    <section id="game-modes" className="px-margin py-stack-2xl relative">
      <div className="mx-auto max-w-[var(--container-max)]">
        {/* Editorial header — asymmetric */}
        <header className="mb-stack-lg gap-gutter grid items-end md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="text-overline text-on-surface-faded mb-3">
              <span className="text-gold-bright">01.</span> Thế giới của bạn
            </p>
            <h2 className="font-display text-paper text-[clamp(2.5rem,5vw,3.5rem)] leading-[1.05] font-semibold tracking-[-0.025em]">
              3 chế độ chơi. <span className="text-gold-bright italic">Cùng một IP.</span>
            </h2>
          </div>
          <p className="text-body-md text-on-surface-muted max-w-md md:col-span-5 md:pb-2">
            Ba kiểu chơi khác nhau. Cùng kết nối qua kingmc.vn.
          </p>
        </header>

        {/* Asymmetric 7:5 magazine spread on lg, stack on smaller */}
        <div className="gap-gutter grid lg:grid-cols-12">
          <div className="lg:col-span-7">
            <GameModeCard mode={featured} featured />
          </div>
          <div className="gap-gutter grid lg:col-span-5 lg:grid-rows-2">
            {rest.map((mode) => (
              <GameModeCard key={mode.id} mode={mode} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
