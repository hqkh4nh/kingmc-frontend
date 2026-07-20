import Link from 'next/link'
import Logo from '@/components/server/Logo'
import SocialIconLink from '@/components/server/SocialIconLink'
import { siteConfig } from '@/config/site'

export default function Footer() {
  const { brand, social, legalLinks } = siteConfig
  return (
    <footer className="mt-stack-2xl px-margin pb-stack-md pt-stack-lg relative">
      {/* Hairline divider with fade */}
      <div
        aria-hidden="true"
        className="inset-x-margin via-paper/12 absolute top-0 h-px bg-gradient-to-r from-transparent to-transparent"
      />

      <div className="gap-stack-md mx-auto flex max-w-[var(--container-max)] flex-col items-center">
        <div className="flex items-center gap-3">
          <Logo variant="icon" size={44} className="opacity-90" />
          <span className="font-display text-paper text-[26px] font-semibold tracking-tight">
            {brand.nameUpper}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <SocialIconLink platform="discord" href={social.discord} size="md" />
          <SocialIconLink platform="facebook-page" href={social.facebookPage} size="md" />
          <SocialIconLink platform="facebook-group" href={social.facebookGroup} size="md" />
          <SocialIconLink platform="tiktok" href={social.tiktok} size="md" />
          <SocialIconLink platform="youtube" href={social.youtube} size="md" />
        </div>

        <nav aria-label="Liên kết pháp lý">
          <ul className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
            {legalLinks.map((link, i) => (
              <li key={link.href} className="flex items-center">
                {i > 0 && (
                  <span aria-hidden="true" className="text-paper/15 mr-2">
                    ·
                  </span>
                )}
                <Link
                  href={link.href}
                  className="text-on-surface-muted hover:text-gold-bright text-[13px] tracking-tight transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="gap-stack-xs mt-stack-xs flex flex-col items-center">
          <p className="text-on-surface-faded max-w-[640px] text-center text-[12px] leading-relaxed tracking-tight">
            {brand.copyright}
          </p>
          <p className="text-on-surface-faded/80 text-center text-[12px] tracking-tight">
            {brand.legal}
          </p>
        </div>
      </div>
    </footer>
  )
}
