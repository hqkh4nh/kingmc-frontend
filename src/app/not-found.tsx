import Link from 'next/link'
import Footer from '@/features/home/Footer'
import SiteHeader from '@/features/home/SiteHeader'

export default function NotFound() {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <SiteHeader />
      <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
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
