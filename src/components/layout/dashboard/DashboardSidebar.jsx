// src/components/layout/dashboard/DashboardSidebar.jsx
import { NavLink } from 'react-router-dom'
import {
  Home, Wallet, Church, User, LayoutGrid, Users,
  DollarSign, Calendar, BarChart2, ChevronLeft, PanelLeftClose, PanelLeftOpen,
} from 'lucide-react'
import { useSidebar } from '@/context/SidebarContext'
import { useAuth } from '@/hooks/useAuth'
import { ROLES } from '@/lib/permissions'
import SidebarNavItem from './SidebarNavItem'
import Logo from '@/components/ui/logo/Logo'
import LogoIcon from '@/components/ui/logo/LogoIcon'

const NAV_BY_ROLE = {
  [ROLES.MEMBER]: [
    { label: 'Início',        path: '/dashboard/membro',                icon: Home,       end: true  },
    { label: 'Contribuições', path: '/dashboard/membro/contribuicoes',  icon: Wallet,     end: false },
    { label: 'Minha Igreja',  path: '/dashboard/membro/minha-igreja',   icon: Church,     end: false },
    { label: 'Meu Perfil',    path: '/dashboard/perfil',                icon: User,       end: true  },
  ],
  [ROLES.CHURCH]: [
    { label: 'Visão Geral',   path: '/dashboard/igreja',                 icon: LayoutGrid, end: true  },
    { label: 'Membros',       path: '/dashboard/igreja/membros',         icon: Users,      end: false },
    { label: 'Financeiro',    path: '/dashboard/igreja/financeiro',      icon: DollarSign, end: false },
    { label: 'Eventos',       path: '/dashboard/igreja/eventos',         icon: Calendar,   end: false },
    { label: 'Meu Perfil',    path: '/dashboard/perfil',                 icon: User,       end: true  },
  ],
  [ROLES.ADMIN]: [
    { label: 'Painel',        path: '/dashboard/admin',                  icon: LayoutGrid, end: true  },
    { label: 'Igrejas',       path: '/dashboard/admin/igrejas',          icon: Church,     end: false },
    { label: 'Usuários',      path: '/dashboard/admin/usuarios',         icon: Users,      end: false },
    { label: 'Relatórios',    path: '/dashboard/admin/relatorios',       icon: BarChart2,  end: false },
  ],
}

export default function DashboardSidebar() {
  const { isExpanded, isHovered, isMobileOpen, setIsHovered, toggleSidebar } = useSidebar()
  const { user } = useAuth()
  const navItems = NAV_BY_ROLE[user?.role] ?? []
  const isWide = isExpanded || isHovered || isMobileOpen

  return (
    <aside
      onMouseEnter={() => !isExpanded && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={[
        // Base
        'fixed top-0 left-0 z-50 flex h-screen flex-col',
        // Mesma cor de fundo do header do site
        'bg-[#2E004F]',
        // Borda direita com traço dourado suave — eco do divisor do footer
        'border-r border-[#E0B14A]/10',
        'transition-all duration-300 ease-in-out',
        // Mobile: esconde por padrão, abre quando isMobileOpen
        isMobileOpen ? 'translate-x-0' : '-translate-x-full',
        'lg:translate-x-0',
        isWide ? 'w-[280px]' : 'w-[80px]',
      ].join(' ')}
    >
      {/* ── Logo ──────────────────────────────────────────────────── */}
      <div className="flex h-20 items-center justify-between px-4 border-b border-[#E0B14A]/10 flex-shrink-0">
        <NavLink to="/" className="flex items-center gap-2 min-w-0">
          {isWide ? <Logo /> : <LogoIcon className="w-7 h-7 mx-auto" />}
        </NavLink>

        {/* Botão recolher — só desktop */}
        <button
          onClick={toggleSidebar}
          title={isExpanded ? 'Recolher menu' : 'Expandir menu'}
          className={[
            'hidden lg:flex items-center justify-center w-8 h-8 rounded-xl flex-shrink-0',
            'text-white/40 hover:bg-white/10 hover:text-[#E0B14A]',
            'transition-all duration-200',
          ].join(' ')}
        >
          {isExpanded ? <PanelLeftClose size={16} /> : <PanelLeftOpen size={16} />}
        </button>
      </div>

      {/* ── Nav ───────────────────────────────────────────────────── */}
      <nav className="flex-1 overflow-y-auto overflow-x-hidden px-3 py-4">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.path}>
              <SidebarNavItem item={item} />
            </li>
          ))}
        </ul>
      </nav>

      {/* ── Footer — avatar ────────────────────────────────────────── */}
      {user && (
        <div className="border-t border-[#E0B14A]/10 p-3 flex-shrink-0">
          <div className={['flex items-center gap-3', isWide ? '' : 'justify-center'].join(' ')}>
            <div className={[
              'flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl',
              'bg-white/10 border border-[#E0B14A]/20 text-[#E0B14A] text-sm font-semibold',
            ].join(' ')}>
              {user.email?.[0]?.toUpperCase() ?? 'U'}
            </div>
            {isWide && (
              <div className="overflow-hidden">
                <p className="truncate text-sm font-medium text-white leading-tight">
                  {user.name ?? user.email}
                </p>
                <p className="truncate text-xs text-white/40 capitalize">
                  {user.role_label}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </aside>
  )
}