import heroBg from '@/assets/hero-background.png'
import type { ModeContent } from './types'

export const kingsmp: ModeContent = {
  id: 'kingsmp',
  name: 'KingSMP',
  tagline: 'Sinh tồn cộng đồng, kinh tế mở. Build căn cứ, làm giàu trên KingSMP — Mùa 4.',
  hero: {
    badge: { label: 'HOT', color: 'gold' },
    backgroundImage: heroBg,
    icon: 'castle',
    longDescription:
      'Server SMP cộng đồng với hệ thống kinh tế mở, bảo vệ đất đai và giao thương tự do giữa người chơi. Xây căn cứ, đánh nhau, trở thành người giàu nhất.',
  },
  quickInfo: {
    versions: '1.21+',
    devices: 'pc-mobile',
    pvp: 'on',
    difficulty: 'Khó',
    keepInventory: false,
    notes: ['CẤM HACK'],
  },
  quickStart: {
    welcomeTitle: 'KingSMP — MÙA 4',
    welcomeBody:
      'Chào mừng tới máy chủ! /RTP để bắt đầu sinh tồn, /SELL để bán đồ, /HUONGDAN để xem hướng dẫn chi tiết.',
    starterCommands: [
      { cmd: '/RTP', desc: 'Dịch chuyển ngẫu nhiên ra xa khu spawn' },
      { cmd: '/SELL', desc: 'Bán vật phẩm trong tay lấy tiền server' },
      { cmd: '/HUONGDAN', desc: 'Mở menu hướng dẫn đầy đủ' },
    ],
  },
  features: [
    {
      title: 'Economy',
      body: 'Kiếm tiền bằng cách bán vật phẩm trong game. Mua giáp, vũ khí PvP, items hiếm trên chợ đen.',
      command: '/sell · /ah',
    },
    {
      title: 'AFK Shards',
      body: 'Treo máy ở khu AFK để kiếm Shards — đổi spawner, key, và nhiều vật phẩm khác.',
      command: '/afk · /warp afk',
    },
    {
      title: 'Cài đặt',
      body: 'Tùy chỉnh hành vi server theo ý bạn: chat, hiển thị, thông báo.',
      command: '/settings · /caidat',
    },
    {
      title: 'Dịch chuyển ngẫu nhiên',
      body: 'Overworld 300k×300k · Nether 18k×18k · End 30k×30k (tăng dần mỗi ngày).',
      command: '/rtp',
    },
    {
      title: 'Luật lệ',
      body: 'Đọc luật trước khi tham gia. Mọi người đều phải tuân thủ. Vi phạm = ban.',
      command: '/rules · /luatle',
    },
  ],
  commands: [
    {
      category: 'General',
      items: [
        { cmd: '/lệnh', desc: 'Mở danh sách lệnh' },
        { cmd: '/commands', desc: 'Mở danh sách lệnh (alias)' },
      ],
    },
    {
      category: 'Economy',
      items: [
        { cmd: '/sell', desc: 'Bán item trong tay' },
        { cmd: '/ah', desc: 'Mở chợ đen (auction house)' },
      ],
    },
    {
      category: 'AFK',
      items: [
        { cmd: '/afk', desc: 'Bật chế độ AFK' },
        { cmd: '/warp afk', desc: 'TP đến khu AFK' },
      ],
    },
    {
      category: 'Travel',
      items: [{ cmd: '/rtp', desc: 'Dịch chuyển ngẫu nhiên' }],
    },
    {
      category: 'Settings',
      items: [
        { cmd: '/settings', desc: 'Mở cài đặt cá nhân' },
        { cmd: '/caidat', desc: 'Cài đặt (alias)' },
      ],
    },
  ],
  ranks: [
    {
      id: 'booster',
      label: 'BOOSTER',
      prefix: '*',
      accent: 'from-purple-500/20 to-purple-700/10',
      preview: '*KhanhHuynh',
      requires: 'Boost Nitro cho Discord server',
      benefits: [
        '/sethome tối đa 4 vị trí',
        '/ah bán được 20 món lên chợ',
        '/order được 20 món',
        'Được bay ở spawn',
        '+15 shard khi kill',
        'Vị trí cao trên tab',
      ],
    },
    {
      id: 'plus',
      label: 'PLUS',
      prefix: '+',
      accent: 'from-sky-500/25 to-sky-700/10',
      preview: '+KhanhHuynh',
      requires: 'Dùng /key hoặc mua tại discord.kingmc.vn (có thể nâng cấp từ VIP)',
      benefits: [
        '/sethome tối đa 6 vị trí',
        '/ah bán được 30 món lên chợ',
        '/order được 26 món',
        '/hide xóa trộn tên',
        'Được bay ở spawn',
        '+20 shard khi kill',
        'Vị trí cao trên tab',
        'Nhận shard ở mọi nơi',
      ],
    },
    {
      id: 'media',
      label: 'MEDIA',
      prefix: '≽✦',
      accent: 'from-gold/30 to-gold/10',
      preview: '≽✦KhanhHuynh',
      requires: 'Đăng video về KingMC/KingSMP trên TikTok hoặc YouTube — hạn 7 ngày',
      benefits: [
        '/sethome tối đa 6 vị trí',
        '/ah bán được 40 món lên chợ',
        '/order được 26 món',
        '/hide xóa trộn tên',
        'Được bay ở spawn',
        '+20 shard khi kill',
        'Vị trí cao trên tab',
        'Nhận shard ở mọi nơi',
      ],
    },
  ],
  rules: [
    {
      title: 'Luật server',
      items: [
        'Không sử dụng client hack / cheat (gian lận)',
        'Không dùng mod hỗ trợ di chuyển (Fly, Bhop, Speed, v.v.)',
        'Không dùng mod can thiệp túi đồ (Auto Sort, Auto Refill, v.v.)',
        'Không dùng mod hiển thị máu (Health Indicator)',
        'Không dùng radar / minimap gian lận',
        'Không sử dụng Freecam',
        'Không tự động đặt block (Auto Place)',
        'Không Easy Place / Fast Place',
        'Không dùng macro hoặc script',
        'Không lợi dụng bug/lỗi của server',
        'Không sử dụng các phương pháp nhân đôi vật phẩm (Dupe)',
        'Không giao dịch bằng tiền thật ngoài đời (IRL Trading)',
        'Không giao dịch xuyên server',
        'Không tìm hoặc sử dụng seed của server',
        'Không sử dụng quá 2-3 tài khoản (Alt Account / Acc phụ)',
        'Không dùng Mouse Tweaks / Scroll Click / Auto Click',
        'Không lợi dụng phần thưởng Nitro Boost',
        'Không chỉnh sửa công thức chế tạo (Crafting)',
        'Không giả mạo Staff/Admin/Quản trị viên',
        'Không tổ chức hoặc tham gia cờ bạc bên ngoài server',
      ],
    },
    {
      title: 'Luật chat',
      items: [
        'Không spam hoặc xúi giục người khác spam',
        'Không quấy rối, xúc phạm người khác',
        'Không quảng cáo hoặc quảng bá',
        'Không phân biệt đối xử hoặc phát ngôn thù ghét',
        'Không đe dọa giết người',
        'Không chia sẻ thông tin cá nhân của người khác',
        'Không mạo danh người nổi tiếng',
        'Không né tránh hình phạt (ban/mute)',
        'Không nói dối hoặc lừa gạt Staff',
        'Báo cáo tất cả lỗi, bug và người gian lận trong Discord',
      ],
    },
  ],
}
