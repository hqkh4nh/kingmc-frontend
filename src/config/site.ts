export type IconName =
  | 'computer'
  | 'smartphone'
  | 'copy'
  | 'check'
  | 'menu'
  | 'close'
  | 'castle'
  | 'globe'
  | 'sword'
  | 'discord'
  | 'facebook'
  | 'tiktok'
  | 'youtube'
  | 'chevron-right'
  | 'arrow-right'
  | 'arrow-left'

export type ChipColor = 'gold' | 'lime' | 'sky' | 'slate' | 'rose'

export interface NavLink {
  label: string
  href: string
  external?: boolean
  comingSoon?: boolean
}

export interface GameMode {
  id: 'kingsmp' | 'mega-earth' | 'battle-royale'
  title: string
  description: string
  thumbnail: string
  gradient: string
  href: string
  tag?: { label: string; color: ChipColor }
}

export const siteConfig = {
  brand: {
    name: 'KingMC',
    nameUpper: 'KINGMC',
    tagline: 'Máy chủ Minecraft #1 Việt Nam',
    copyright:
      'KingMC © 2026. Không được Mojang AB / Microsoft chấp thuận, tài trợ hoặc xác nhận. "Minecraft" là nhãn hiệu của Mojang AB. Mọi nhãn hiệu khác thuộc chủ sở hữu tương ứng.',
    legal: 'KingMC.VN. Bảo lưu mọi quyền.',
  },
  server: {
    mainIp: 'kingmc.vn',
    java: {
      mainIp: 'kingmc.vn',
      altIps: [
        { label: 'Nếu ở nước ngoài', ip: 'sgp.kingmc.vn' },
        { label: 'Nếu ở Việt Nam', ip: 'java.kingmc.vn' },
      ],
      versions: '1.16.5 - 26.1',
    },
    bedrock: {
      address: 'kingmc.vn',
      port: '19132',
      versions: 'v1.21.130 - 26.10',
    },
  },
  social: {
    discord: 'https://discord.gg/kingmcvn',
    facebookPage: 'https://www.facebook.com/kingmcvn/',
    facebookGroup: 'https://www.facebook.com/groups/kingmcvnn',
    tiktok: 'https://tiktok.com/@kingmc.vn',
    youtube: 'https://www.youtube.com/@kingmc_vietnam',
  },
  navLinks: [
    { label: 'Trang chủ', href: '/' },
    { label: 'Bản đồ', href: 'https://earth.kingmc.vn/', external: true },
    { label: 'Bảng xếp hạng', href: '#' },
    { label: 'Danh sách cấm', href: '#' },
    { label: 'Hỗ trợ', href: 'https://discord.gg/kingmcvn', external: true },
  ] satisfies NavLink[],
  topLinks: [
    { label: 'Giới thiệu', href: '#' },
    { label: 'Đối tác', href: '#' },
    { label: 'Liên hệ', href: 'https://discord.gg/kingmcvn', external: true },
  ] satisfies NavLink[],
  // Link pháp lý ở footer → trang /legal/[slug].
  legalLinks: [
    { label: 'Thỏa thuận người dùng', href: '/legal/thoa-thuan-nguoi-dung' },
    { label: 'Chính sách bảo mật', href: '/legal/chinh-sach-bao-mat' },
    { label: 'Quy định ủng hộ', href: '/legal/quy-dinh-ung-ho' },
  ] satisfies NavLink[],
  gameModes: [
    {
      id: 'kingsmp',
      title: 'KingSMP',
      description:
        'Sinh tồn cộng đồng, kinh tế mở. Build căn cứ, đánh nhau, làm giàu. Chơi được cả PC lẫn điện thoại.',
      gradient: 'from-secondary-container/40 to-surface-container',
      thumbnail: '/images/modes/kingsmp.webp',
      href: '/mode/kingsmp',
      tag: { label: 'HOT', color: 'gold' },
    },
    {
      id: 'mega-earth',
      title: 'Mega Earth',
      description:
        'Bản đồ Trái Đất 500k blocks. Claim đất, lập bang hội, thu phục đệ tử. PC và điện thoại.',
      gradient: 'from-tertiary-container/40 to-surface-container',
      thumbnail: '/images/modes/mega-earth.webp',
      href: '/mode/mega-earth',
    },
    {
      id: 'battle-royale',
      title: 'Battle Royale',
      description:
        'PUBG/Free Fire phiên bản Minecraft. Solo Royale & Civ Royale. Chỉ chơi trên PC, version 1.21.8 - 1.21.11.',
      tag: { label: 'MỚI', color: 'lime' },
      gradient: 'from-error-container/40 to-surface-container',
      thumbnail: '/images/modes/battle-royale.webp',
      href: 'https://battleroyale.kingmc.vn',
    },
  ] satisfies GameMode[],
} as const

export type SiteConfig = typeof siteConfig
