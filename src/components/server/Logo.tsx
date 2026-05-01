import Image from 'next/image'

type Variant = 'icon' | 'with-text'

interface Props {
  variant: Variant
  size?: number
  maxHeight?: number
  className?: string
}

export default function Logo({ variant, size = 40, maxHeight, className = '' }: Props) {
  if (variant === 'with-text') {
    return (
      <Image
        src="/images/logo-with-text.png"
        alt="KingMC"
        width={600}
        height={300}
        priority
        className={`object-contain ${className}`}
        style={{
          maxHeight: maxHeight ? `${maxHeight}px` : undefined,
          height: 'auto',
          width: 'auto',
        }}
      />
    )
  }
  return (
    <Image
      src="/images/logo.png"
      alt="KingMC"
      width={size}
      height={size}
      priority
      className={`object-contain ${className}`}
    />
  )
}
