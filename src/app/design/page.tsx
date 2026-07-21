import type { Metadata } from 'next'
import Link from 'next/link'
import Icon from '@/components/server/Icon'

export const metadata: Metadata = {
  title: 'Bản thử giao diện',
  robots: { index: false, follow: false },
}

const VARIANTS = [
  {
    href: '/',
    name: 'Editorial',
    tag: 'Bản chính',
    desc: 'Magazine cao cấp: tông đồng thau, serif tương phản, parallax tinh tế, thẻ nghiêng 3D.',
    swatches: ['#c8a356', '#6a9461', '#0b1018'],
  },
  {
    href: '/design/cinematic',
    name: 'Cinematic',
    tag: 'Thử nghiệm',
    desc: 'Launcher game AAA: hero điện ảnh, particle, god-rays, HUD số liệu, nút PLAY phát sáng.',
    swatches: ['#58b4ff', '#05070c', '#8fd0ff'],
  },
  {
    href: '/design/voxel',
    name: 'Voxel',
    tag: 'Thử nghiệm',
    desc: 'Đậm chất Minecraft: khối 3D trôi nổi, màu tươi, thẻ dạng block nhấc lên khi hover.',
    swatches: ['#7bc96f', '#f4c430', '#4a7299'],
  },
]

export default function DesignHubPage() {
  return (
    <main className="px-margin py-stack-2xl mx-auto min-h-dvh max-w-[var(--container-max)]">
      <header className="mb-stack-lg max-w-2xl">
        <p className="text-overline text-on-surface-faded mb-3">Nội bộ · So sánh</p>
        <h1 className="font-display text-paper text-display-lg font-semibold">
          Ba hướng giao diện.{' '}
          <span className="font-editorial text-accent-bright text-[1.05em] italic">Chọn một.</span>
        </h1>
        <p className="text-body-md text-on-surface-muted mt-4">
          Mỗi bản là một trang chủ hoàn chỉnh, dùng chung dữ liệu và component. Mở từng bản để so
          sánh rồi chọn bản muốn giữ.
        </p>
      </header>

      <div className="gap-gutter grid md:grid-cols-3">
        {VARIANTS.map((v) => (
          <Link
            key={v.href}
            href={v.href}
            className="group bg-surface-2 edge-lit hover:bg-surface-3 flex flex-col gap-4 rounded-2xl p-7 transition-colors duration-300"
          >
            <div className="flex items-center gap-1.5">
              {v.swatches.map((c) => (
                <span
                  key={c}
                  className="h-6 w-6 rounded-md shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]"
                  style={{ background: c }}
                />
              ))}
            </div>
            <div className="flex items-center gap-2.5">
              <h2 className="font-display text-paper text-[24px] font-semibold">{v.name}</h2>
              <span className="rounded-pill text-on-surface-faded bg-ink/50 px-2.5 py-1 text-[10px] font-medium tracking-[0.15em] uppercase">
                {v.tag}
              </span>
            </div>
            <p className="text-on-surface-muted flex-1 text-[14px] leading-relaxed">{v.desc}</p>
            <span className="text-on-surface-faded group-hover:text-accent-bright inline-flex items-center gap-1.5 text-[12px] font-medium tracking-[0.18em] uppercase transition-all group-hover:gap-2.5">
              Mở bản này
              <Icon name="arrow-right" size={14} />
            </span>
          </Link>
        ))}
      </div>
    </main>
  )
}
