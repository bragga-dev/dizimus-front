// src/components/layout/dashboard/DashboardHeader.jsx
import { Menu, Bell, ChevronRight, LogOut } from 'lucide-react'
import { useSidebar } from '@/context/SidebarContext'
import { useAuth } from '@/hooks/useAuth'
import { useNavigate } from 'react-router-dom'

export default function DashboardHeader() {
  const { toggleMobileSidebar } = useSidebar()
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    await logout()
    navigate('/login')
  }

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-white/8 bg-ecclesia-950/90 backdrop-blur-md px-4">

      {/* Mobile: botão abrir sidebar */}
      <button
        onClick={toggleMobileSidebar}
        className="lg:hidden flex items-center justify-center w-9 h-9 rounded-xl text-ecclesia-300 hover:bg-white/10 hover:text-white transition-all"
        aria-label="Abrir menu"
      >
        <Menu size={20} />
      </button>

      {/* Desktop: espaço vazio à esquerda */}
      <div className="hidden lg:block" />

      {/* Ações à direita */}
      <div className="flex items-center gap-1">

        {/* Notificações */}
        <button
          className="flex items-center justify-center w-9 h-9 rounded-xl text-ecclesia-300 hover:bg-white/10 hover:text-white transition-all"
          aria-label="Notificações"
        >
          <Bell size={18} />
        </button>

        {/* Avatar */}
        {user && (
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-ecclesia-700/60 text-ecclesia-300 text-sm font-semibold border border-white/10 ml-1">
            {user.email?.[0]?.toUpperCase() ?? 'U'}
          </div>
        )}

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="flex items-center justify-center w-9 h-9 rounded-xl text-ecclesia-300 hover:bg-red-500/20 hover:text-red-400 transition-all ml-1"
          aria-label="Sair"
        >
          <LogOut size={18} />
        </button>
      </div>
    </header>
  )
}