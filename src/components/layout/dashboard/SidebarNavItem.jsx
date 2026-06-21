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
      className={({ isActive }) =>
        [
          'flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors',
          isActive
            ? 'bg-brand-500/10 text-brand-600 dark:bg-brand-500/15 dark:text-brand-400'
            : 'text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-white/5',
        ].join(' ')
      }
    >
      <span className="flex-shrink-0">
        {Icon && <Icon size={20} />}
      </span>
      {showLabel && <span className="truncate">{item.label}</span>}
    </NavLink>
  )
}