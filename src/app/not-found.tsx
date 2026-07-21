import Link from 'next/link'
import Footer from '@/features/home/Footer'
import SiteHeader from '@/features/home/SiteHeader'

export default function NotFound() {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <SiteHeader />
      <main className="px-margin pt-stack-2xl relative isolate flex min-h-[72dvh] flex-col items-center justify-center overflow-hidden text-center">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 [background:radial-gradient(ellipse_at_50%_35%,rgba(200,163,86,0.1),transparent_60%)]"
        />
        <p className="text-overline text-gold-bright">404</p>
        <h1 className="text-display-lg text-paper mt-stack-md">Không tìm thấy trang</h1>
        <p className="text-body-md text-on-surface-muted mt-stack-sm max-w-md">
          Đường dẫn này không tồn tại. Quay về trang chủ để khám phá các chế độ chơi của KingMC.
        </p>
        <Link
          href="/"
          className="bg-gold text-gold-ink hover:bg-gold-bright rounded-pill mt-stack-lg inline-flex h-12 items-center px-6 font-medium transition-colors"
        >
          Về trang chủ
        </Link>
      </main>
      <Footer />
    </div>
  )
}
