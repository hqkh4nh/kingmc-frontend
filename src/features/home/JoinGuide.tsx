'use client'

import { useEffect, useRef, useState } from 'react'
import CopyButton from '@/components/client/CopyButton'
import Icon from '@/components/server/Icon'
import Tabs from '@/components/client/Tabs'
import { siteConfig } from '@/config/site'

interface InfoRowProps {
  label: string
  value: string
  copyable?: boolean
  emphasis?: boolean
}

function InfoRow({ label, value, copyable, emphasis }: InfoRowProps) {
  return (
    <div
      className={`group relative flex items-center justify-between gap-3 overflow-hidden rounded-xl px-5 py-4 transition-all duration-300 ${
        emphasis
          ? 'bg-surface-3/80 shadow-[0_0_0_1px_rgba(220,184,116,0.18)_inset,0_8px_24px_-12px_rgba(200,163,86,0.18)]'
          : 'bg-surface-2/60 hover:bg-surface-2 shadow-[0_0_0_1px_rgba(245,239,226,0.06)_inset] hover:shadow-[0_0_0_1px_rgba(245,239,226,0.12)_inset]'
      }`}
    >
      {emphasis && (
        <span aria-hidden="true" className="bg-gold absolute inset-y-2 left-0 w-[3px] rounded-r" />
      )}
      <div className="min-w-0 flex-1">
        <p className="text-on-surface-faded text-[10.5px] font-medium tracking-[0.18em] uppercase">
          {label}
        </p>
        <p
          className={`text-paper mt-1 truncate font-mono tracking-tight ${
            emphasis ? 'text-[18px] font-semibold' : 'text-[15px]'
          }`}
        >
          {value}
        </p>
      </div>
      {copyable && <CopyButton text={value} />}
    </div>
  )
}

interface VideoPanelProps {
  active: boolean
  src: string
  fallbackIp: string
}

function VideoPanel({ active, src, fallbackIp }: VideoPanelProps) {
  const ref = useRef<HTMLVideoElement>(null)
  const [errored, setErrored] = useState(false)

  useEffect(() => {
    const v = ref.current
    if (!v || errored) return
    if (active) {
      v.play().catch(() => {
        // autoplay blocked — leave the video paused; user can press play
      })
    } else {
      v.pause()
      v.currentTime = 0
    }
  }, [active, errored])

  if (errored) {
    return (
      <div className="bg-surface-2 flex aspect-[16/10] items-center justify-center rounded-2xl p-8 text-center shadow-[0_0_0_1px_rgba(245,239,226,0.06)_inset]">
        <p className="text-on-surface-muted text-[14px]">
          Video không khả dụng — IP server: <strong className="text-paper">{fallbackIp}</strong>
        </p>
      </div>
    )
  }

  return (
    <div className="relative overflow-hidden rounded-2xl shadow-[0_0_0_1px_rgba(245,239,226,0.08)_inset,0_24px_56px_-16px_rgba(0,0,0,0.6)]">
      <video
        ref={ref}
        src={src}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        onError={() => setErrored(true)}
        className="bg-ink-deep aspect-[16/10] w-full object-cover"
      />
      <div
        aria-hidden="true"
        className="ring-paper/8 pointer-events-none absolute inset-0 ring-1 ring-inset"
      />
    </div>
  )
}

export default function JoinGuide() {
  const [tab, setTab] = useState<'java' | 'bedrock'>('java')
  const { java, bedrock, mainIp } = siteConfig.server

  return (
    <section id="join-guide" className="px-margin py-stack-2xl relative">
      {/* divider — single hairline, NOT a chunky 2px border */}
      <div
        aria-hidden="true"
        className="inset-x-margin via-paper/15 absolute top-0 h-px bg-gradient-to-r from-transparent to-transparent"
      />

      <div className="mx-auto max-w-[var(--container-max)]">
        {/* Asymmetric header */}
        <header className="mb-stack-lg gap-gutter grid items-end md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="text-overline text-on-surface-faded mb-3">
              <span className="text-gold-bright">02.</span> Bắt đầu trong 30 giây
            </p>
            <h2 className="font-display text-paper text-[clamp(2.5rem,5vw,3.5rem)] leading-[1.05] font-semibold tracking-[-0.025em]">
              Java hay Bedrock. <span className="text-gold-bright italic">Vào ngay đi.</span>
            </h2>
          </div>
          <p className="text-body-md text-on-surface-muted max-w-md md:col-span-5 md:pb-2">
            Chọn phiên bản phù hợp với thiết bị, copy IP, paste vào server list. Xem video bên dưới
            nếu kẹt chỗ nào.
          </p>
        </header>

        <Tabs value={tab} defaultValue="java" onChange={(v) => setTab(v as 'java' | 'bedrock')}>
          {/* Segmented track wrapping the triggers */}
          <Tabs.List
            aria-label="Phiên bản Minecraft"
            className="mb-stack-md rounded-pill bg-surface-2/60 mx-auto inline-flex w-full max-w-md gap-1 p-1.5 shadow-[0_0_0_1px_rgba(245,239,226,0.06)_inset] md:mx-0 md:w-auto"
          >
            <Tabs.Trigger value="java" className="flex-1 md:flex-none">
              <Icon name="computer" size={16} />
              Java (PC)
            </Tabs.Trigger>
            <Tabs.Trigger value="bedrock" className="flex-1 md:flex-none">
              <Icon name="smartphone" size={16} />
              Bedrock (PE)
            </Tabs.Trigger>
          </Tabs.List>

          <Tabs.Content value="java">
            {/* Asymmetric 8:4 — video bigger, info compact */}
            <div className="gap-gutter grid lg:grid-cols-12">
              <div className="lg:col-span-7">
                <VideoPanel
                  active={tab === 'java'}
                  src="/videos/join-java.mp4"
                  fallbackIp={mainIp}
                />
              </div>
              <div className="flex flex-col gap-3 lg:col-span-5">
                <InfoRow label="IP chính" value={java.mainIp} copyable emphasis />
                {java.altIps.map((alt) => (
                  <InfoRow key={alt.ip} label={alt.label} value={alt.ip} copyable />
                ))}
                <InfoRow label="Phiên bản hỗ trợ" value={java.versions} />
              </div>
            </div>
          </Tabs.Content>

          <Tabs.Content value="bedrock">
            <div className="gap-gutter grid lg:grid-cols-12">
              <div className="lg:col-span-7">
                <VideoPanel
                  active={tab === 'bedrock'}
                  src="/videos/join-bedrock.mp4"
                  fallbackIp={mainIp}
                />
              </div>
              <div className="flex flex-col gap-3 lg:col-span-5">
                <InfoRow label="Server Address" value={bedrock.address} copyable emphasis />
                <InfoRow label="Port" value={bedrock.port} copyable />
                <InfoRow label="Phiên bản hỗ trợ" value={bedrock.versions} />
              </div>
            </div>
          </Tabs.Content>
        </Tabs>
      </div>
    </section>
  )
}
