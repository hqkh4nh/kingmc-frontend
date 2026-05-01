import Icon from '@/components/server/Icon'
import type { IconName } from '@/config/site'

type Platform = 'discord' | 'facebook-page' | 'facebook-group' | 'tiktok' | 'youtube'

const META: Record<Platform, { icon: IconName; label: string }> = {
  discord: { icon: 'discord', label: 'Discord' },
  'facebook-page': { icon: 'facebook', label: 'Facebook Page' },
  'facebook-group': { icon: 'facebook', label: 'Facebook Group' },
  tiktok: { icon: 'tiktok', label: 'TikTok' },
  youtube: { icon: 'youtube', label: 'YouTube' },
}

type Size = 'sm' | 'md' | 'lg'

const containerSize: Record<Size, string> = {
  sm: 'h-9 w-9',
  md: 'h-11 w-11',
  lg: 'h-12 w-12',
}

const iconPx: Record<Size, number> = {
  sm: 17,
  md: 20,
  lg: 22,
}

export default function SocialIconLink({
  platform,
  href,
  size = 'sm',
  className = '',
}: {
  platform: Platform
  href: string
  size?: Size
  className?: string
}) {
  const { icon, label } = META[platform]
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className={`group rounded-pill text-on-surface-faded hover:text-gold-bright hover:bg-paper/[0.04] focus-visible:ring-gold-bright/55 focus-visible:ring-offset-ink inline-flex items-center justify-center transition-all duration-300 ease-out hover:-translate-y-px focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.92] ${containerSize[size]} ${className}`}
    >
      <Icon name={icon} size={iconPx[size]} />
    </a>
  )
}
