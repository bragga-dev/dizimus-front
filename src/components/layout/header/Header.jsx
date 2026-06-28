// src/components/layout/header/Header.jsx
import { useEffect, useState } from 'react'
import { Menu } from 'lucide-react'
import HeaderActions from './HeaderActions'
import HeaderLogo from './HeaderLogo'
import HeaderNav from './HeaderNav'
import HeaderSearch from './HeaderSearch'
import MobileMenu from './MobileMenu'
import { useAuth } from '@/hooks/useAuth'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { user } = useAuth()
  const isAuthenticated = !!user

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={`sticky top-0 z-30 transition-all duration-300 ${
          scrolled
            ? 'border-b border-[#E0B14A]/10 bg-[#2E004F]/95 shadow-[0_10px_30px_rgba(46,0,79,0.35)] backdrop-blur-xl'
            : 'bg-[#2E004F]'
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

          {/* LEFT: logo + nav desktop */}
          <div className="flex items-center gap-14">
            <HeaderLogo />
            <HeaderNav />
          </div>

          {/* RIGHT: busca + ações (desktop) */}
          <div className="hidden lg:flex items-center gap-3">
            <HeaderSearch />
            <HeaderActions isAuthenticated={isAuthenticated} user={user} />
          </div>

          {/* MOBILE: 1 único botão hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            aria-label="Abrir menu"
            className="flex lg:hidden h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-all hover:bg-white/10"
          >
            <Menu size={22} />
          </button>

        </div>
      </header>

      {/* Bottom sheet unificado */}
      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        isAuthenticated={isAuthenticated}
        user={user}
      />
    </>
  )
}