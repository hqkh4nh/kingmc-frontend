'use client'

import Button from '@/components/client/Button'
import Icon from '@/components/server/Icon'
import { siteConfig } from '@/config/site'
import { useCopyIp } from '@/hooks/useCopyIp'

export default function HeroCTA() {
  const playNow = useCopyIp({ ip: 'kingmc.vn', scrollToId: 'join-guide' })
  return (
    <div className="animate-rise mt-stack-md flex flex-wrap items-center justify-center gap-3 [animation-delay:560ms]">
      <Button variant="primary" size="lg" onClick={playNow}>
        Chơi ngay
        <Icon name="arrow-right" size={18} />
      </Button>
      <a
        href={siteConfig.social.discord}
        target="_blank"
        rel="noopener noreferrer"
        className="group rounded-pill text-paper inline-flex h-14 items-center gap-2.5 bg-transparent px-7 text-[15px] font-medium shadow-[0_0_0_1px_rgba(245,239,226,0.18)_inset] transition-all duration-200 ease-out hover:-translate-y-px hover:shadow-[0_0_0_1px_rgba(220,184,116,0.5)_inset,0_8px_24px_-8px_rgba(0,0,0,0.4)] active:scale-[0.97]"
      >
        <Icon
          name="discord"
          size={18}
          className="text-on-surface-muted group-hover:text-gold-bright transition-colors"
        />
        Tham gia Discord
      </a>
    </div>
  )
}
