// src/components/layout/dashboard/DashboardHeader.jsx
import { LogOut, Menu, Bell } from 'lucide-react'
import { useSidebar } from '@/context/SidebarContext'
import { useAuth } from '@/hooks/useAuth'

export default function DashboardHeader() {
  const { toggleMobileSidebar } = useSidebar()
  const { user, logout } = useAuth()

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-zinc-200 bg-white px-4 dark:border-white/10 dark:bg-zinc-900">
      <button
        onClick={toggleMobileSidebar}
        className="lg:hidden flex items-center justify-center w-9 h-9 rounded-lg text-zinc-500 hover:bg-zinc-100 dark:hover:bg-white/5 transition-colors"
        aria-label="Abrir menu"
      >
        <Menu size={20} />
      </button>

      <div className="hidden lg:block" />

      <div className="flex items-center gap-2">
        <button className="flex items-center justify-center w-9 h-9 rounded-lg text-zinc-500 hover:bg-zinc-100 dark:hover:bg-white/5 transition-colors" aria-label="Notificações">
          <Bell size={18} />
        </button>

        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-100 text-brand-600 text-sm font-semibold dark:bg-brand-500/20 dark:text-brand-400 ml-1">
          {user?.email?.[0]?.toUpperCase() ?? 'U'}
        </div>

        <button
          onClick={logout}
          className="flex items-center justify-center w-9 h-9 rounded-lg text-zinc-500 hover:bg-red-50 hover:text-red-500 dark:hover:bg-red-500/10 transition-colors"
          aria-label="Sair"
        >
          <LogOut size={18} />
        </button>
      </div>
    </header>
  )
}