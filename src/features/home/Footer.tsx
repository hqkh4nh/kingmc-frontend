import Logo from '@/components/server/Logo'
import SocialIconLink from '@/components/server/SocialIconLink'
import { siteConfig } from '@/config/site'

export default function Footer() {
  const { brand, social } = siteConfig
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

        <p className="text-on-surface-faded text-center text-[12px] tracking-tight">
          {brand.copyright}
          <span className="text-paper/15 mx-2">·</span>
          {brand.legal}
        </p>
      </div>
    </footer>
  )
}
