import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Footer from '@/features/home/Footer'
import SiteHeader from '@/features/home/SiteHeader'
import LegalArticle from '@/features/legal/LegalArticle'
import { getLegalDoc, LEGAL_SLUGS } from '@/data/legal'
import { env } from '@/lib/env'

export const unstable_instant = { prefetch: 'static', unstable_disableValidation: true }

export function generateStaticParams() {
  return LEGAL_SLUGS.map((slug) => ({ slug }))
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const doc = getLegalDoc(slug)
  if (!doc) return {}
  return {
    title: doc.title,
    description: doc.summary,
    alternates: { canonical: `/legal/${doc.slug}` },
    openGraph: {
      title: `${doc.title} — KingMC`,
      description: doc.summary,
      url: `${env.NEXT_PUBLIC_SITE_URL}/legal/${doc.slug}`,
    },
  }
}

export default async function LegalRoute({ params }: PageProps) {
  const { slug } = await params
  const doc = getLegalDoc(slug)
  if (!doc) notFound()

  return (
    <div className="relative min-h-screen overflow-x-clip">
      <SiteHeader />
      <main>
        <LegalArticle doc={doc} />
      </main>
      <Footer />
    </div>
  )
}
