'use client'

import { useEffect, useState } from 'react'
import Navbar from './Navbar'
import TopBar from './TopBar'

/**
 * Header ghim gom TopBar (thanh tiện ích) + Navbar (pill nổi). Sở hữu một scroll
 * listener duy nhất: khi cuộn xuống, TopBar thu về h-0 và pill giữ hành vi nổi.
 */
export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <TopBar scrolled={scrolled} />
      <Navbar scrolled={scrolled} />
    </header>
  )
}
