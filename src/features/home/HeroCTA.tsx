'use client'

import Button from '@/components/client/Button'
import Icon from '@/components/server/Icon'
import { siteConfig } from '@/config/site'
import { useCopyIp } from '@/hooks/useCopyIp'

export default function HeroCTA() {
  const playNow = useCopyIp({ ip: 'kingmc.vn', scrollToId: 'join-guide' })
  return (
    <div className="mt-stack-md flex flex-wrap items-center justify-center gap-3">
      <Button variant="primary" size="lg" onClick={playNow} className="pr-2.5">
        Chơi ngay
        {/* Button-in-button trailing icon — squared to match the block language, arrow
            nudges right on hover while the whole button lifts. */}
        <span className="bg-gold-ink/15 ease-fluid ml-1 flex h-9 w-9 items-center justify-center rounded-sm transition-transform duration-300 group-hover:translate-x-0.5">
          <Icon name="arrow-right" size={18} />
        </span>
      </Button>
      <a
        href={siteConfig.social.discord}
        target="_blank"
        rel="noopener noreferrer"
        className="group rounded-pill text-paper focus-visible:ring-gold-bright/60 focus-visible:ring-offset-ink inline-flex h-14 items-center gap-2.5 bg-transparent px-7 text-[15px] font-medium shadow-[0_0_0_1px_rgba(245,239,226,0.18)_inset] transition-all duration-200 ease-out hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[0_0_0_1px_rgba(220,184,116,0.5)_inset,2px_2px_0_rgba(0,0,0,0.4)] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:translate-x-0 active:translate-y-0 active:scale-[0.97]"
      >
        <Icon
          name="discord"
          size={18}
          className="text-on-surface-muted group-hover:text-accent-bright transition-colors"
        />
        Tham gia Discord
      </a>
    </div>
  )
}
