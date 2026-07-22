import Link from 'next/link'
import Logo from '@/components/server/Logo'
import SocialIconLink from '@/components/server/SocialIconLink'
import { siteConfig } from '@/config/site'

export default function Footer() {
  const { brand, social, legalLinks, navLinks, topLinks } = siteConfig
  return (
    <footer className="px-margin pt-stack-lg pb-stack-md relative isolate overflow-hidden">
      {/* Hairline divider with fade */}
      <div
        aria-hidden="true"
        className="inset-x-margin via-paper/12 absolute top-0 h-px bg-gradient-to-r from-transparent to-transparent"
      />

      <div className="relative mx-auto max-w-[var(--container-max)]">
        {/* Top: brand + link columns */}
        <div className="gap-stack-md grid grid-cols-2 md:grid-cols-4">
          <div className="col-span-2 flex flex-col gap-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <Logo variant="icon" size={40} className="opacity-90" />
              <span className="font-display text-paper text-[22px] font-semibold tracking-tight">
                {brand.nameUpper}
              </span>
            </div>
            <p className="text-on-surface-faded max-w-[240px] text-[13px] leading-relaxed">
              {brand.tagline}.
            </p>
            <div className="flex items-center gap-2">
              <SocialIconLink platform="discord" href={social.discord} size="sm" />
              <SocialIconLink platform="facebook-page" href={social.facebookPage} size="sm" />
              <SocialIconLink platform="tiktok" href={social.tiktok} size="sm" />
              <SocialIconLink platform="youtube" href={social.youtube} size="sm" />
            </div>
          </div>

          <FooterCol title="Khám phá" links={navLinks} />
          <FooterCol title="Thông tin" links={topLinks} />
          <FooterCol title="Pháp lý" links={legalLinks} />
        </div>

        {/* Bottom bar */}
        <div className="border-border-hairline gap-stack-sm mt-stack-lg flex flex-col items-start justify-between border-t pt-8 md:flex-row md:items-center">
          <p className="text-on-surface-faded max-w-[640px] text-[12px] leading-relaxed tracking-tight">
            {brand.copyright}
          </p>
          <p className="text-on-surface-faded/80 shrink-0 text-[12px] tracking-tight">
            {brand.legal}
          </p>
        </div>
      </div>

      {/* Pixel-block texture strip — nods to the block theme without a saturated wordmark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-2 [background:repeating-linear-gradient(90deg,var(--color-border-strong)_0_8px,transparent_8px_16px)]"
      />
    </footer>
  )
}

function FooterCol({
  title,
  links,
}: {
  title: string
  links: readonly { label: string; href: string; external?: boolean }[]
}) {
  return (
    <nav aria-label={title} className="flex flex-col gap-3">
      <p className="eyebrow text-on-surface-faded">{title}</p>
      <ul className="flex flex-col gap-2.5">
        {links.map((link) => (
          <li key={`${link.label}-${link.href}`}>
            <Link
              href={link.href}
              {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="text-on-surface-muted hover:text-accent-bright text-[13.5px] tracking-tight transition-colors duration-200"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
