// src/components/layout/dashboard/SidebarNavItem.jsx
import { NavLink } from 'react-router-dom'
import { useSidebar } from '@/context/SidebarContext'

export default function SidebarNavItem({ item }) {
  const { isExpanded, isHovered, isMobileOpen } = useSidebar()
  const showLabel = isExpanded || isHovered || isMobileOpen
  const Icon = item.icon

  return (
    <NavLink
      to={item.path}
      end={item.end ?? true}
      title={!showLabel ? item.label : undefined}
      className={({ isActive }) =>
        [
          'group flex items-center gap-3 rounded-xl transition-all duration-200',
          showLabel ? 'px-3 py-2.5' : 'px-2 py-2.5 justify-center',
          isActive
            // Ativo: fundo dourado/roxo, mesma linguagem dos hovers dos dropdowns
            ? 'bg-[#E0B14A]/15 border border-[#E0B14A]/25 text-[#E0B14A]'
            // Inativo: texto branco suave, hover = fundo branco/10 texto branco
            : 'text-white/50 border border-transparent hover:bg-white/8 hover:text-white',
        ].join(' ')
      }
    >
      {({ isActive }) => (
        <>
          {/* Icon badge — padrão DropdownIconBadge */}
          <span className={[
            'flex flex-shrink-0 items-center justify-center w-9 h-9 rounded-xl transition-all duration-200',
            isActive
              ? 'bg-[#E0B14A]/20 text-[#E0B14A]'
              : 'bg-white/5 text-white/40 group-hover:bg-white/10 group-hover:text-white',
          ].join(' ')}>
            {Icon && <Icon size={18} />}
          </span>

          {showLabel && (
            <span
              className="truncate text-base font-semibold"
              style={{ fontFamily: 'var(--font-navbar)' }}
            >
              {item.label}
            </span>
          )}
        </>
      )}
    </NavLink>
  )
}