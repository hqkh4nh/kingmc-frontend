'use client'

import { useEffect, useState } from 'react'
import type { MouseEvent } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Button from '@/components/client/Button'
import Icon from '@/components/server/Icon'
import IconButton from '@/components/client/IconButton'
import Logo from '@/components/server/Logo'
import { siteConfig } from '@/config/site'
import { useCopyIp } from '@/hooks/useCopyIp'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { navLinks, social } = siteConfig
  const playNow = useCopyIp({ ip: 'kingmc.vn', scrollToId: 'join-guide' })
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const onLogoClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (pathname === '/') {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <nav
        className={`rounded-pill relative flex w-full max-w-[var(--container-max)] items-center justify-between px-3 py-3 pl-5 transition-all duration-500 ease-out ${
          scrolled
            ? 'bg-ink/85 shadow-[0_0_0_1px_rgba(245,239,226,0.08)_inset,0_8px_32px_-8px_rgba(0,0,0,0.55)] backdrop-blur-xl'
            : 'bg-ink/40 shadow-[0_0_0_1px_rgba(245,239,226,0.05)_inset] backdrop-blur-md'
        }`}
      >
        <Link href="/" onClick={onLogoClick} className="group flex items-center gap-3">
          <Logo
            variant="icon"
            size={44}
            className="transition-transform duration-300 group-hover:rotate-[-6deg]"
          />
          <Image
            src="/images/kingmc-text.png"
            alt="KingMC"
            width={180}
            height={48}
            priority
            className="h-12 w-auto object-contain"
          />
        </Link>

        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1.5 lg:flex">
          {navLinks.map((link) => {
            const isActive = !link.external && link.href === pathname
            const isInternal = !link.external && link.href.startsWith('/')

            const className = `group rounded-pill relative inline-flex items-center px-4 py-2 text-[15px] font-medium tracking-tight transition-colors duration-200 ${
              isActive ? 'text-gold-bright' : 'text-on-surface-muted hover:text-paper'
            }`

            const underline = (
              <span
                aria-hidden="true"
                className={`bg-gold-bright pointer-events-none absolute inset-x-4 -bottom-0.5 h-[1.5px] origin-center transition-transform duration-300 ${
                  isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-50'
                }`}
              />
            )

            return (
              <li key={link.label}>
                {isInternal ? (
                  <Link href={link.href} className={className}>
                    {link.label}
                    {underline}
                  </Link>
                ) : (
                  <a
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className={className}
                  >
                    {link.label}
                    {underline}
                  </a>
                )}
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-2">
          <IconButton aria-label="Discord" href={social.discord} className="hidden lg:inline-flex">
            <Icon name="discord" size={20} />
          </IconButton>
          <Button variant="primary" size="md" onClick={playNow} className="hidden lg:inline-flex">
            Vào server
          </Button>
          <IconButton
            aria-label={open ? 'Đóng menu' : 'Mở menu'}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden"
          >
            <Icon name={open ? 'close' : 'menu'} size={20} />
          </IconButton>
        </div>

        {open && (
          <div className="bg-ink/95 shadow-elevated absolute inset-x-0 top-[calc(100%+8px)] flex flex-col gap-1 rounded-2xl p-4 backdrop-blur-xl lg:hidden">
            {navLinks.map((link) => {
              const isInternal = !link.external && link.href.startsWith('/')
              const itemClass =
                'text-on-surface-muted hover:bg-paper/5 hover:text-paper rounded-lg px-3 py-2 text-[14px] font-medium transition-colors'
              return isInternal ? (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={itemClass}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  onClick={() => setOpen(false)}
                  className={itemClass}
                >
                  {link.label}
                </a>
              )
            })}
            <div className="border-paper/10 mt-2 flex items-center gap-2 border-t pt-3">
              <IconButton aria-label="Discord" href={social.discord} variant="solid">
                <Icon name="discord" size={18} />
              </IconButton>
              <Button
                variant="primary"
                size="sm"
                className="flex-1"
                onClick={() => {
                  setOpen(false)
                  playNow()
                }}
              >
                Vào server
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
