import { useState, useEffect } from 'react'
import {
  Menu,
  X,
  ChevronDown,
  Church,
  Wallet,
  Users,
  Calendar,
  BarChart3,
} from 'lucide-react'

// ─── Constants ────────────────────────────────────────────────────────────────

const NAV_LINKS = ['Início', 'Planos', 'Sobre', 'Blog', 'Contato']

const RECURSOS = [
  {
    title: 'Dízimos e Ofertas',
    icon: Wallet,
    description: 'Controle financeiro completo.',
  },
  {
    title: 'Membros',
    icon: Users,
    description: 'Gestão inteligente da igreja.',
  },
  {
    title: 'Eventos',
    icon: Calendar,
    description: 'Organize cultos e conferências.',
  },
  {
    title: 'Relatórios',
    icon: BarChart3,
    description: 'Insights e transparência.',
  },
]

// ─── Sub-components ───────────────────────────────────────────────────────────

function Logo() {
  return (
    <a href="/" className="flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#7B61D6] to-[#4A2D7A] shadow-lg shadow-purple-900/30">
        <Church size={20} className="text-white" />
      </div>

      <div>
        <h1 className="text-xl font-black tracking-tight text-white">dizimus</h1>
        <p className="text-xs text-zinc-400">Gestão que honra a fé.</p>
      </div>
    </a>
  )
}

function RecursoDropdownItem({ title, icon: Icon, description }) {
  return (
    <a
      href="#"
      className="flex gap-4 rounded-2xl p-4 transition-all hover:bg-white/5"
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#7B61D6] to-[#4A2D7A]">
        <Icon size={18} className="text-white" />
      </div>

      <div>
        <h3 className="font-semibold text-white">{title}</h3>
        <p className="mt-1 text-sm text-zinc-400">{description}</p>
      </div>
    </a>
  )
}

function RecursosDropdown({ open, onToggle }) {
  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className="flex items-center gap-1 rounded-xl px-4 py-2 text-sm font-medium text-zinc-200 transition-all hover:bg-white/10"
      >
        Recursos
        <ChevronDown
          size={16}
          className={`transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <div className="absolute left-0 top-full mt-3 w-[380px] overflow-hidden rounded-3xl border border-white/10 bg-[#1E1633]/95 p-3 shadow-2xl backdrop-blur-2xl">
          {RECURSOS.map((item) => (
            <RecursoDropdownItem key={item.title} {...item} />
          ))}
        </div>
      )}
    </div>
  )
}

function NavLink({ label }) {
  return (
    <a
      href="#"
      className="rounded-xl px-4 py-2 text-sm font-medium text-zinc-200 transition-all hover:bg-white/10"
    >
      {label}
    </a>
  )
}

function AuthButtons() {
  return (
    <div className="hidden items-center gap-3 lg:flex">
      <a
        href="#"
        className="text-sm font-semibold text-zinc-200 transition-colors hover:text-white"
      >
        Login
      </a>

      <button className="rounded-2xl bg-gradient-to-r from-[#7B61D6] to-[#9D7BFF] px-5 py-3 text-sm font-bold text-white shadow-xl shadow-purple-900/30 transition-all hover:scale-[1.03]">
        Teste grátis
      </button>
    </div>
  )
}

function MobileMenu() {
  return (
    <div className="border-t border-white/10 bg-[#140D24]/95 px-6 py-6 backdrop-blur-2xl lg:hidden">
      <div className="flex flex-col gap-2">
        {['Início', ...NAV_LINKS.slice(1), 'Recursos'].map((item) => (
          <a
            key={item}
            href="#"
            className="rounded-xl px-4 py-3 text-sm font-medium text-zinc-200 transition-all hover:bg-white/5"
          >
            {item}
          </a>
        ))}

        <div className="mt-4 flex flex-col gap-3">
          <button className="rounded-2xl border border-white/10 py-3 text-sm font-semibold text-white">
            Login
          </button>

          <button className="rounded-2xl bg-gradient-to-r from-[#7B61D6] to-[#9D7BFF] py-3 text-sm font-bold text-white">
            Teste grátis
          </button>
        </div>
      </div>
    </div>
  )
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/10 bg-[#140D24]/80 backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-2 lg:flex">
          <NavLink label="Início" />
          <RecursosDropdown
            open={dropdownOpen}
            onToggle={() => setDropdownOpen((prev) => !prev)}
          />
          {NAV_LINKS.slice(1).map((label) => (
            <NavLink key={label} label={label} />
          ))}
        </nav>

        <AuthButtons />

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen((prev) => !prev)}
          className="text-white lg:hidden"
          aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && <MobileMenu />}
    </header>
  )
}