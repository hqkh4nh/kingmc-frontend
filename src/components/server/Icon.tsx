import type { ReactNode, SVGProps } from 'react'

import type { IconName } from '@/config/site'

type IconWeight = 'thin' | 'regular' | 'bold'

interface Props extends Omit<SVGProps<SVGSVGElement>, 'name'> {
  name: IconName
  size?: number
  weight?: IconWeight
}

interface IconDefinition {
  body: ReactNode
  filled?: boolean
}

const ICONS: Record<IconName, IconDefinition> = {
  computer: {
    body: (
      <>
        <rect width="18" height="12" x="3" y="4" rx="2" />
        <path d="M8 20h8" />
        <path d="M12 16v4" />
      </>
    ),
  },
  smartphone: {
    body: (
      <>
        <rect width="14" height="20" x="5" y="2" rx="2" />
        <path d="M12 18h.01" />
      </>
    ),
  },
  copy: {
    body: (
      <>
        <rect width="14" height="14" x="8" y="8" rx="2" />
        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
      </>
    ),
  },
  check: {
    body: <path d="M20 6 9 17l-5-5" />,
  },
  menu: {
    body: (
      <>
        <path d="M4 6h16" />
        <path d="M4 12h16" />
        <path d="M4 18h16" />
      </>
    ),
  },
  close: {
    body: (
      <>
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </>
    ),
  },
  castle: {
    body: (
      <>
        <path d="M4 22V8" />
        <path d="M20 22V8" />
        <path d="M4 8V4h4v4h4V4h4v4h4" />
        <path d="M4 12h16" />
        <path d="M8 22v-6a4 4 0 0 1 8 0v6" />
        <path d="M2 22h20" />
      </>
    ),
  },
  globe: {
    body: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </>
    ),
  },
  sword: {
    body: (
      <>
        <path d="M14.5 17.5 3 6V3h3l11.5 11.5" />
        <path d="m13 19 6-6" />
        <path d="m16 16 3 3" />
        <path d="m19 13 2 2-6 6-2-2" />
      </>
    ),
  },
  discord: {
    filled: true,
    body: (
      <path d="M19.5 5.2A17 17 0 0 0 15.4 4l-.2.4c1.5.4 2.2 1 2.2 1a13.3 13.3 0 0 0-10.8 0s.8-.7 2.3-1L8.6 4a17 17 0 0 0-4.1 1.2C1.9 9.1 1.2 12.9 1.6 16.6A16.6 16.6 0 0 0 6.7 19l.6-.8a8.3 8.3 0 0 1-1.9-.9l.5-.4c3.7 1.7 8.1 1.7 11.8 0l.5.4c-.6.4-1.2.7-1.9.9l.6.8a16.6 16.6 0 0 0 5.1-2.4c.5-4.3-.7-8-2.5-11.4ZM8.7 14.3c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2Zm6.6 0c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2Z" />
    ),
  },
  facebook: {
    filled: true,
    body: (
      <path d="M22 12a10 10 0 1 0-11.6 9.9v-7h-2.5V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12Z" />
    ),
  },
  tiktok: {
    filled: true,
    body: (
      <path d="M16.6 5.8a5.8 5.8 0 0 0 3.4 1.1v3.3a9 9 0 0 1-3.4-.7v5.8a6.7 6.7 0 1 1-6.7-6.7c.4 0 .8 0 1.2.1v3.4a3.3 3.3 0 1 0 2.2 3.1V2h3.3v3.8Z" />
    ),
  },
  youtube: {
    filled: true,
    body: (
      <path d="M21.6 7.2a2.8 2.8 0 0 0-2-2C17.8 4.8 12 4.8 12 4.8s-5.8 0-7.6.5a2.8 2.8 0 0 0-2 2A29 29 0 0 0 2 12a29 29 0 0 0 .4 4.8 2.8 2.8 0 0 0 2 2c1.8.5 7.6.5 7.6.5s5.8 0 7.6-.5a2.8 2.8 0 0 0 2-2A29 29 0 0 0 22 12a29 29 0 0 0-.4-4.8ZM10 15.5v-7l6 3.5-6 3.5Z" />
    ),
  },
  'chevron-right': {
    body: <path d="m9 18 6-6-6-6" />,
  },
  'arrow-right': {
    body: (
      <>
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </>
    ),
  },
  'arrow-left': {
    body: (
      <>
        <path d="M19 12H5" />
        <path d="m12 19-7-7 7-7" />
      </>
    ),
  },
}

export default function Icon({
  name,
  size = 24,
  weight = 'regular',
  className = '',
  ...rest
}: Props) {
  const icon = ICONS[name]
  const strokeWidth = weight === 'thin' ? 1.5 : weight === 'bold' ? 2.5 : 2

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      fill={icon.filled ? 'currentColor' : 'none'}
      stroke={icon.filled ? undefined : 'currentColor'}
      strokeWidth={icon.filled ? 0 : strokeWidth}
      strokeLinecap={icon.filled ? undefined : 'round'}
      strokeLinejoin={icon.filled ? undefined : 'round'}
      aria-hidden="true"
      {...rest}
    >
      {icon.body}
    </svg>
  )
}
