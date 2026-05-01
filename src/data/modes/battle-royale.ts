import type { ModeContent } from './types'

export const battleRoyale: ModeContent = {
  id: 'battle-royale',
  name: 'Battle Royale',
  tagline: 'PUBG/Free Fire phiên bản Minecraft. Solo Royale & Civ Royale.',
  hero: {
    badge: { label: 'MỚI', color: 'lime' },
    backgroundImage: '/images/hero-background.png',
    icon: 'sword',
    longDescription:
      'Spawn vào thế giới custom-generated rộng lớn, chiến đấu đến chết. Khám phá công thức chế tạo độc đáo và huyền thoại. Máu không tự hồi — chỉ phục hồi bằng golden apple và đầu enemy. Hỗ trợ Simple Voice Chat mod (proximity chat).',
  },
  quickInfo: {
    versions: '1.21.8 - 1.21.11',
    devices: 'pc-only',
    notes: ['CẤM HACK'],
  },
  quickStart: {
    welcomeTitle: 'Cách chơi',
    welcomeBody:
      'Spawn vào map ngẫu nhiên, sống sót và là người cuối cùng. Máu không tự hồi — kiếm golden apple hoặc giết enemy lấy đầu để heal. Hỗ trợ proximity voice chat qua Simple Voice Chat mod.',
    starterCommands: [
      { cmd: '/quests', desc: 'Mở danh sách quests hằng ngày' },
      { cmd: 'Solo Royale', desc: 'Chế độ một mình' },
      { cmd: 'Civ Royale', desc: 'Chế độ theo nền văn minh' },
    ],
  },
  features: [
    {
      title: 'Solo Royale',
      body: 'Một mình, sống sót đến cuối cùng. Custom crafting, healing đặc biệt, không có team backup.',
    },
    {
      title: 'Civ Royale',
      body: 'Chiến theo civilization. Cooperate, build, hoặc tiêu diệt civ khác để chiếm tài nguyên.',
    },
    {
      title: 'Star Levels',
      body: '11 bậc từ 0–999 (mỗi bậc 100 cấp), plus đỉnh cao 1000. Nâng cấp bằng wins + kills.',
    },
    {
      title: 'Cosmetic Shop',
      body: 'Mũ, pod decorations, glider, kill effects, victory dances. Mua bằng Coins/Gems kiếm trong game.',
    },
    {
      title: 'Quests',
      body: 'Hoàn thành quests hằng ngày để kiếm Coins/Gems và unlock cosmetic.',
      command: '/quests',
    },
    {
      title: 'Simple Voice Chat',
      body: 'Proximity voice chat — nói chuyện với người chơi gần bạn trong game. Cần cài mod client.',
    },
  ],
  ranks: [
    {
      id: 'vip',
      label: 'VIP',
      accent: 'from-gold/30 to-gold/10',
      price: '1500 💎/tháng (1/3/6/12 tháng)',
      duration: 'monthly',
      benefits: [
        'VIP prefix unlock',
        'VIP Battle Pass (100+ rewards)',
        '5 Crates mỗi tháng',
        'Gems từ levels nhân 5x trong Battle Royale',
        'Skip server queue',
        'Không có chat cooldown',
      ],
      extra: [
        'Chuột trái mua cho mình · chuột phải chọn thời gian · Shift + chuột trái gift 1 tháng cho người khác',
        '100 lần gift → unlock vip_sunset (vĩnh viễn)',
        '150 lần gift → unlock vip_rainbow (vĩnh viễn)',
      ],
    },
  ],
}
