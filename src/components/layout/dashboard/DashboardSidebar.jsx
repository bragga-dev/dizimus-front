// src/components/layout/dashboard/DashboardSidebar.jsx
import { NavLink } from 'react-router-dom'
import { Home, Wallet, Church, User, LayoutGrid, Users, DollarSign, Calendar, BarChart2 } from 'lucide-react'
import { useSidebar } from '@/context/SidebarContext'
import { useAuth } from '@/hooks/useAuth'
import { ROLES } from '@/lib/permissions'
import SidebarNavItem from './SidebarNavItem'

const NAV_BY_ROLE = {
  [ROLES.MEMBER]: [
    { label: 'Início',        path: '/dashboard/membro',              icon: Home,       end: true },
    { label: 'Contribuições', path: '/dashboard/membro/contribuicoes', icon: Wallet,     end: false },
    { label: 'Minha Igreja',  path: '/dashboard/membro/minha-igreja',  icon: Church,     end: false },
    { label: 'Meu Perfil',    path: '/dashboard/perfil',               icon: User,       end: true },
  ],
  [ROLES.CHURCH]: [
    { label: 'Visão Geral',   path: '/dashboard/igreja',               icon: LayoutGrid, end: true },
    { label: 'Membros',       path: '/dashboard/igreja/membros',        icon: Users,      end: false },
    { label: 'Financeiro',    path: '/dashboard/igreja/financeiro',     icon: DollarSign, end: false },
    { label: 'Eventos',       path: '/dashboard/igreja/eventos',        icon: Calendar,   end: false },
    { label: 'Meu Perfil',    path: '/dashboard/perfil',               icon: User,       end: true },
  ],
  [ROLES.ADMIN]: [
    { label: 'Painel',        path: '/dashboard/admin',                 icon: LayoutGrid, end: true },
    { label: 'Igrejas',       path: '/dashboard/admin/igrejas',         icon: Church,     end: false },
    { label: 'Usuários',      path: '/dashboard/admin/usuarios',        icon: Users,      end: false },
    { label: 'Relatórios',    path: '/dashboard/admin/relatorios',      icon: BarChart2,  end: false },
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
        'fixed top-0 left-0 z-50 flex h-screen flex-col border-r border-zinc-200',
        'bg-white transition-all duration-300 ease-in-out dark:border-white/10 dark:bg-zinc-900',
        isMobileOpen ? 'translate-x-0' : '-translate-x-full',
        'lg:translate-x-0',
        isWide ? 'w-[280px]' : 'w-[80px]',
      ].join(' ')}
    >
      <div className="flex h-16 items-center justify-between px-4 border-b border-zinc-200 dark:border-white/10">
        {isWide ? (
          <NavLink to="/" className="flex items-center gap-2">
            <Church size={22} className="text-brand-600 flex-shrink-0" />
            <span className="font-bold text-zinc-900 dark:text-white truncate">Ecclesia</span>
          </NavLink>
        ) : (
          <Church size={22} className="text-brand-600 mx-auto" />
        )}
        <button
          onClick={toggleSidebar}
          className="hidden lg:flex items-center justify-center w-8 h-8 rounded-lg text-zinc-500 hover:bg-zinc-100 dark:hover:bg-white/5 transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
            className={`transition-transform duration-300 ${isExpanded ? '' : 'rotate-180'}`}>
            <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto overflow-x-hidden px-3 py-4">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.path}>
              <SidebarNavItem item={item} />
            </li>
          ))}
        </ul>
      </nav>

      {isWide && user && (
        <div className="border-t border-zinc-200 dark:border-white/10 p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-600 text-sm font-semibold dark:bg-brand-500/20 dark:text-brand-400">
              {user.email?.[0]?.toUpperCase() ?? 'U'}
            </div>
            <div className="overflow-hidden">
              <p className="truncate text-sm font-medium text-zinc-900 dark:text-white">{user.email}</p>
              <p className="truncate text-xs text-zinc-500 capitalize dark:text-zinc-400">{user.role_label}</p>
            </div>
          </div>
        </div>
      )}
    </aside>
  )
}