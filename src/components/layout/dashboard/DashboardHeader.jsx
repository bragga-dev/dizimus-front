// src/components/layout/dashboard/DashboardHeader.jsx
// Header de APP — não usa a nav pública. Sidebar é a navegação do dashboard.
import { useEffect, useState, useRef } from 'react'
import { Menu, Bell, LogOut, UserCircle2, ChevronRight, CheckCheck, Settings } from 'lucide-react'
import { useSidebar } from '@/context/SidebarContext'
import { useAuth } from '@/hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import Logo from '@/components/ui/logo/Logo'
import {
  mockNotifications,
  getUnreadCount,
  groupNotificationsByDate,
  notificationConfig,
} from '@/components/layout/header/dropdowns/notification/notificationHelpers'
import { userMenuItems } from '@/components/layout/header/dropdowns/user/userMenuItems'
import {
  DropdownPanel,
  DropdownOverlay,
  DropdownHeader,
  DropdownAvatar,
  DropdownIconBadge,
  DropdownMenuItem,
  DropdownFooter,
} from '@/components/layout/header/dropdowns/shared'

// ── Dropdown de notificações (desktop) ────────────────────────────────────────
function NotifDropdown() {
  const [open, setOpen] = useState(false)
  const [notifications, setNotifications] = useState(mockNotifications)
  const ref = useRef(null)
  const unread = getUnreadCount(notifications)
  const groups = groupNotificationsByDate(notifications)

  useEffect(() => {
    const close = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false) }
    document.addEventListener('mousedown', close)
    return () => document.removeEventListener('mousedown', close)
  }, [])

  const handleMarkAllRead = () => setNotifications(prev => prev.map(n => ({ ...n, read: true })))
  const handleRead = (id) => setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n))

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(v => !v)}
        aria-label="Notificações"
        className="relative flex h-10 w-10 items-center justify-center rounded-xl text-white/60 hover:bg-white/10 hover:text-white transition-all"
      >
        <Bell size={20} />
        {unread > 0 && (
          <span className="absolute top-1 right-1 h-4 w-4 flex items-center justify-center rounded-full text-[10px] font-bold text-white bg-ecclesia-600">
            {unread}
          </span>
        )}
      </button>

      {open && (
        <>
          <DropdownOverlay onClose={() => setOpen(false)} />
          <DropdownPanel width="lg" align="right">
            <DropdownHeader
              avatar={<Bell size={16} className="text-white" />}
              title="Notificações"
              subtitle={`${unread} pendente${unread !== 1 ? 's' : ''}`}
              actions={
                <button onClick={handleMarkAllRead} title="Marcar todas como lidas"
                  className="flex items-center justify-center w-8 h-8 rounded-xl text-white hover:bg-white/10 transition"
                >
                  <CheckCheck size={15} />
                </button>
              }
            />
            <div className="max-h-80 overflow-y-auto p-2">
              {groups.map(group => (
                <div key={group.label} className="mb-4">
                  <p className="px-3 mb-2 text-[11px] font-bold uppercase tracking-widest text-gray-400">{group.label}</p>
                  {group.items.map(n => {
                    const cfg = notificationConfig[n.type]
                    const Icon = cfg.icon
                    return (
                      <DropdownMenuItem key={n.id} asButton onClick={() => handleRead(n.id)} className="group dropdown-hover">
                        <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-all ${cfg.badgeClass} group-hover:bg-white/20 group-hover:text-white`}>
                          <Icon size={16} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className={`dropdown-text text-sm font-semibold truncate leading-tight ${n.read ? 'opacity-50' : ''}`}>{n.title}</p>
                          <p className="dropdown-text text-xs mt-0.5 line-clamp-1 opacity-60">{n.message}</p>
                        </div>
                        {!n.read && <span className="h-1.5 w-1.5 rounded-full bg-ecclesia-500 group-hover:bg-white flex-shrink-0" />}
                      </DropdownMenuItem>
                    )
                  })}
                </div>
              ))}
            </div>
            <DropdownFooter>
              <a href="/notificacoes" className="dropdown-hover flex justify-center rounded-xl py-3 text-sm font-semibold font-navbar transition-all">
                Ver todas
              </a>
            </DropdownFooter>
          </DropdownPanel>
        </>
      )}
    </div>
  )
}

// ── Dropdown de usuário (desktop) ─────────────────────────────────────────────
function UserDropdown({ user }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const navigate = useNavigate()
  const { logout } = useAuth()

  useEffect(() => {
    const close = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false) }
    document.addEventListener('mousedown', close)
    return () => document.removeEventListener('mousedown', close)
  }, [])

  const handleLogout = async () => {
    setOpen(false)
    await logout()
    navigate('/login')
  }

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(v => !v)}
        aria-label="Minha conta"
        className="flex h-10 w-10 items-center justify-center rounded-xl overflow-hidden hover:ring-2 hover:ring-[#E0B14A]/30 transition-all"
      >
        {user?.photo_url
          ? <img src={user.photo_url} alt={user.email} className="h-full w-full object-cover rounded-xl" />
          : <UserCircle2 size={26} className="text-white" />
        }
      </button>

      {open && (
        <>
          <DropdownOverlay onClose={() => setOpen(false)} />
          <DropdownPanel width="md" align="right">
            <DropdownHeader
              avatar={
                <DropdownAvatar size="md" photoUrl={user?.photo_url} alt={user?.email}>
                  <UserCircle2 size={20} className="text-white/80" />
                </DropdownAvatar>
              }
              title={user?.name ?? user?.email ?? 'Minha conta'}
              subtitle={user?.role_label ?? ''}
            />
            <div className="p-2">
              {userMenuItems.flatMap(g => g.items).map(item => (
                <DropdownMenuItem key={item.href} href={item.href} onClick={() => setOpen(false)} className="group dropdown-hover">
                  <DropdownIconBadge icon={item.icon} variant="purple" size="md" />
                  <div className="flex-1 min-w-0">
                    <p className="dropdown-text font-navbar font-semibold text-sm">{item.label}</p>
                  </div>
                  <ChevronRight size={14} className="text-gray-300 group-hover:text-white" />
                </DropdownMenuItem>
              ))}
              <div className="border-t border-gray-100 my-2" />
              <DropdownMenuItem asButton onClick={handleLogout} className="group dropdown-hover">
                <DropdownIconBadge icon={LogOut} variant="purple" size="md" />
                <div className="flex-1">
                  <p className="dropdown-text font-navbar font-semibold text-sm">Sair da conta</p>
                </div>
                <ChevronRight size={14} className="text-gray-300 group-hover:text-white" />
              </DropdownMenuItem>
            </div>
          </DropdownPanel>
        </>
      )}
    </div>
  )
}

// ── Header principal ───────────────────────────────────────────────────────────
export default function DashboardHeader() {
  const [scrolled, setScrolled] = useState(false)
  const { toggleMobileSidebar } = useSidebar()
  const { user } = useAuth()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-30 transition-all duration-300 ${
        scrolled
          ? 'border-b border-[#E0B14A]/10 bg-[#2E004F]/95 shadow-[0_10px_30px_rgba(46,0,79,0.35)] backdrop-blur-xl'
          : 'bg-[#2E004F]'
      }`}
    >
      <div className="flex h-16 md:h-20 items-center justify-between px-4 md:px-6">

        {/* LEFT: botão sidebar mobile + logo mobile */}
        <div className="flex items-center gap-3">
          {/* Botão sidebar — só mobile */}
          <button
            onClick={toggleMobileSidebar}
            aria-label="Abrir menu lateral"
            className="flex lg:hidden h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-all"
          >
            <Menu size={20} />
          </button>

          {/* Logo — só mobile (no desktop o sidebar já tem o logo) */}
          <div className="flex lg:hidden">
            <a href="/" aria-label="Ir para a página inicial">
              <Logo />
            </a>
          </div>
        </div>

        {/* Espaço livre desktop (o logo está no sidebar) */}
        <div className="hidden lg:flex flex-1" />

        {/* RIGHT: notificações + avatar */}
        <div className="flex items-center gap-1 md:gap-2">
          <NotifDropdown />
          <UserDropdown user={user} />
        </div>

      </div>
    </header>
  )
}