'use client'

import Button from '@/components/client/Button'
import CopyButton from '@/components/client/CopyButton'
import Icon from '@/components/server/Icon'
import { siteConfig } from '@/config/site'
import { useCopyIp } from '@/hooks/useCopyIp'

export default function ModeCTA() {
  const { mainIp } = siteConfig.server
  const playNow = useCopyIp({ ip: mainIp })
  return (
    <section className="px-margin pt-stack-2xl pb-stack-2xl">
      <div className="mx-auto max-w-[var(--container-narrow)] text-center">
        <h2 className="font-display text-paper text-[clamp(2rem,4vw,2.75rem)] leading-[1.05] font-semibold tracking-[-0.02em]">
          Vô server đi.
        </h2>
        <p className="text-on-surface-muted mt-stack-sm text-body-md">
          IP: <code className="text-paper font-mono">kingmc.vn</code>. Copy rồi vào Minecraft là
          chơi.
        </p>
        <div className="mt-stack-md flex flex-wrap items-center justify-center gap-3">
          <div className="rounded-pill bg-paper/[0.04] inline-flex items-center gap-3 py-2.5 pr-2 pl-4 shadow-[0_0_0_1px_rgba(245,239,226,0.1)_inset]">
            <code className="text-paper font-mono text-[14px]">{mainIp}</code>
            <CopyButton text={mainIp} />
          </div>
          <Button variant="primary" size="md" onClick={playNow}>
            Copy & vào ngay
            <Icon name="arrow-right" size={16} />
          </Button>
          <a href={siteConfig.social.discord} target="_blank" rel="noopener noreferrer">
            <Button variant="secondary" size="md">
              <Icon name="discord" size={16} />
              Discord
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
