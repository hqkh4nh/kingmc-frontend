import Icon from '@/components/server/Icon'
import type { IconName } from '@/config/site'
import { siteConfig } from '@/config/site'

const { social } = siteConfig

const socials: { href: string; icon: IconName; label: string }[] = [
  { href: social.facebookPage, icon: 'facebook', label: 'Facebook' },
  { href: social.tiktok, icon: 'tiktok', label: 'TikTok' },
  { href: social.discord, icon: 'discord', label: 'Discord' },
  { href: social.youtube, icon: 'youtube', label: 'YouTube' },
]

/**
 * Thanh tiện ích slim phía trên navbar, chỉ chứa 4 link social. Hiển thị ≥ md; khi
 * cuộn xuống thu về chiều cao 0 để pill navbar trượt lên (prop `scrolled` từ SiteHeader).
 */
export default function TopBar({ scrolled }: { scrolled: boolean }) {
  return (
    <div
      className={`hidden overflow-hidden transition-all duration-500 ease-out md:block ${
        scrolled ? 'h-0 opacity-0' : 'h-10 opacity-100'
      }`}
    >
      <div className="border-border-hairline bg-ink/70 border-b backdrop-blur-md">
        <div className="px-margin mx-auto flex h-10 max-w-[var(--container-max)] items-center justify-end">
          <div className="flex items-center gap-1">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                title={s.label}
                className="text-on-surface-faded hover:text-gold-bright hover:bg-paper/[0.04] rounded-pill inline-flex h-7 w-7 items-center justify-center transition-colors duration-200"
              >
                <Icon name={s.icon} size={15} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
