import Icon from '@/components/server/Icon'
import type { ModeContent } from '@/data/modes'

interface Props {
  info: ModeContent['quickInfo']
}

export default function QuickInfo({ info }: Props) {
  return (
    <section className="px-margin py-stack-lg">
      <div className="mx-auto max-w-[var(--container-max)]">
        <div className="gap-gutter grid grid-cols-2 md:grid-cols-4">
          <InfoChip label="Phiên bản" value={info.versions} />
          <InfoChip
            label="Thiết bị"
            value={info.devices === 'pc-only' ? 'Chỉ PC' : 'PC & điện thoại'}
            icon={info.devices === 'pc-only' ? 'computer' : 'smartphone'}
          />
          {info.pvp && (
            <InfoChip
              label="PvP / Độ khó"
              value={`${info.pvp === 'on' ? 'Bật' : 'Tắt'}${info.difficulty ? ` · ${info.difficulty}` : ''}`}
            />
          )}
          {info.notes && info.notes.length > 0 && (
            <InfoChip label="Lưu ý" value={info.notes.join(' · ')} accent="rose" />
          )}
        </div>
      </div>
    </section>
  )
}

function InfoChip({
  label,
  value,
  icon,
  accent,
}: {
  label: string
  value: string
  icon?: 'computer' | 'smartphone'
  accent?: 'rose'
}) {
  return (
    <div
      className={`bg-surface-2/60 rounded-2xl px-5 py-4 shadow-[0_0_0_1px_rgba(245,239,226,0.06)_inset] ${
        accent === 'rose' ? 'shadow-[0_0_0_1px_rgba(255,140,140,0.2)_inset]' : ''
      }`}
    >
      <p className="text-on-surface-faded text-[10.5px] font-medium tracking-[0.18em] uppercase">
        {label}
      </p>
      <p className="text-paper mt-1.5 inline-flex items-center gap-2 text-[15px] font-semibold">
        {icon && <Icon name={icon} size={16} className="text-on-surface-muted" />}
        {value}
      </p>
    </div>
  )
}
