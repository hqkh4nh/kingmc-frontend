import Icon from '@/components/server/Icon'
import SocialIconLink from '@/components/server/SocialIconLink'
import { siteConfig } from '@/config/site'

const PERKS = [
  'Sự kiện, giveaway và bản cập nhật thông báo sớm',
  'Tìm đồng đội, lập bang, rủ kèo mỗi tối',
  'Báo lỗi và góp ý, được hỗ trợ trực tiếp',
]

export default function CommunityBand() {
  const { social } = siteConfig
  const discordHandle = social.discord.replace(/^https?:\/\//, '')

  return (
    <section id="community" className="px-margin py-stack-xl relative">
      <div className="gap-gutter mx-auto grid max-w-[var(--container-max)] items-center lg:grid-cols-12">
        {/* Left: what the community actually is */}
        <div className="lg:col-span-6">
          <p className="text-overline text-on-surface-faded mb-3">Cộng đồng</p>
          <h2 className="font-display text-paper text-display-lg font-semibold">
            <span className="font-editorial text-accent-bright text-[1.05em] italic">Tất cả</span> ở
            Discord.
          </h2>
          <ul className="mt-7 flex max-w-md flex-col gap-3.5">
            {PERKS.map((perk) => (
              <li key={perk} className="text-on-surface-muted flex items-start gap-3 text-[15px]">
                <Icon
                  name="check"
                  size={18}
                  className="text-accent-bright mt-0.5 shrink-0"
                  aria-hidden="true"
                />
                {perk}
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Discord panel (double-bezel) + other channels */}
        <div className="lg:col-span-6 lg:pl-8">
          <div className="bg-surface/40 edge-lit rounded-[2rem] p-2">
            <div className="bg-surface-2 relative overflow-hidden rounded-[1.6rem] p-8">
              {/* Discord's own blurple — brand colour for the brand element reads as
                  intentional, not accent-slapped-everywhere. */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 [background:radial-gradient(80%_70%_at_100%_0%,rgba(88,101,242,0.18),transparent_70%)]"
              />
              <div className="relative flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#5865f2] text-white shadow-[0_8px_20px_-6px_rgba(88,101,242,0.7),0_1px_0_rgba(255,255,255,0.2)_inset]">
                    <Icon name="discord" size={26} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-paper text-[17px] font-semibold">Discord chính thức</p>
                    <code className="text-on-surface-faded font-mono text-[13px] tracking-tight">
                      {discordHandle}
                    </code>
                  </div>
                </div>

                <a
                  href={social.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-pill focus-visible:ring-offset-surface-2 inline-flex h-12 items-center justify-center gap-2.5 bg-[#5865f2] text-[15px] font-semibold text-white shadow-[0_10px_24px_-8px_rgba(88,101,242,0.6)] transition-transform duration-200 ease-out hover:-translate-y-px hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5865f2]/70 focus-visible:ring-offset-2 active:scale-[0.98]"
                >
                  Vào Discord
                  <span className="ease-fluid flex h-7 w-7 items-center justify-center rounded-full bg-white/15 transition-transform duration-500 group-hover:translate-x-0.5">
                    <Icon name="arrow-right" size={15} />
                  </span>
                </a>

                <div className="border-border-hairline flex items-center justify-between border-t pt-5">
                  <span className="text-on-surface-faded text-[12px] tracking-tight">
                    Kênh khác
                  </span>
                  <div className="flex items-center gap-2">
                    <SocialIconLink platform="facebook-page" href={social.facebookPage} size="sm" />
                    <SocialIconLink platform="tiktok" href={social.tiktok} size="sm" />
                    <SocialIconLink platform="youtube" href={social.youtube} size="sm" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
