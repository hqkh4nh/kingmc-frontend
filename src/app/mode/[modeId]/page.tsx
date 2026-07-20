import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Footer from '@/features/home/Footer'
import SiteHeader from '@/features/home/SiteHeader'
import Commands from '@/features/mode/Commands'
import Features from '@/features/mode/Features'
import ModeCTA from '@/features/mode/ModeCTA'
import ModeHero from '@/features/mode/ModeHero'
import Pets from '@/features/mode/Pets'
import QuickInfo from '@/features/mode/QuickInfo'
import QuickStart from '@/features/mode/QuickStart'
import Rules from '@/features/mode/Rules'
import { getModeById } from '@/data/modes'
import { env } from '@/lib/env'

export const unstable_instant = { prefetch: 'static', unstable_disableValidation: true }

const VALID_IDS = ['kingsmp', 'mega-earth'] as const

export function generateStaticParams() {
  return VALID_IDS.map((modeId) => ({ modeId }))
}

interface PageProps {
  params: Promise<{ modeId: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { modeId } = await params
  const mode = getModeById(modeId)
  if (!mode) return {}
  return {
    title: mode.name,
    description: mode.tagline,
    alternates: { canonical: `/mode/${mode.id}` },
    openGraph: {
      title: `${mode.name} · KingMC`,
      description: mode.tagline,
      url: `${env.NEXT_PUBLIC_SITE_URL}/mode/${mode.id}`,
    },
  }
}

export default async function ModeRoute({ params }: PageProps) {
  const { modeId } = await params
  const mode = getModeById(modeId)
  if (!mode) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Game',
    name: `${mode.name} · KingMC`,
    description: mode.tagline,
    applicationCategory: 'Game',
    operatingSystem:
      mode.quickInfo.devices === 'pc-only'
        ? 'Windows, macOS, Linux'
        : 'Windows, macOS, Linux, Android, iOS',
    inLanguage: 'vi',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="relative min-h-screen overflow-x-clip">
        <SiteHeader />
        <main>
          <ModeHero mode={mode} />
          <QuickInfo info={mode.quickInfo} />
          {mode.quickStart && <QuickStart data={mode.quickStart} />}
          {mode.features && mode.features.length > 0 && <Features features={mode.features} />}
          {mode.pets && <Pets data={mode.pets} />}
          {mode.commands && mode.commands.length > 0 && <Commands commands={mode.commands} />}
          {mode.rules && mode.rules.length > 0 && <Rules rules={mode.rules} />}
          <ModeCTA />
        </main>
        <Footer />
      </div>
    </>
  )
}
