// src/components/layout/header/MobileMenu.jsx
// Bottom sheet unificado — nav + user + notificações em UMA tela, sem overlays aninhados
import { createPortal } from 'react-dom'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  X, ChevronRight, Bell, CheckCheck,
  UserCircle2, LogOut,
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'
import { navLinks } from './constants'
import { userMenuItems } from './dropdowns/user/userMenuItems'
import {
  mockNotifications,
  getUnreadCount,
  groupNotificationsByDate,
  notificationConfig,
} from './dropdowns/notification/notificationHelpers'

// ── Abas ──────────────────────────────────────────────────────────────────────
const TABS = { NAV: 'nav', NOTIF: 'notif', USER: 'user' }

export default function MobileMenu({ isOpen, onClose, isAuthenticated }) {
  const [tab, setTab] = useState(TABS.NAV)
  const [notifications, setNotifications] = useState(mockNotifications)
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const unread = getUnreadCount(notifications)
  const groups = groupNotificationsByDate(notifications)

  // Bloquear scroll do body quando aberto
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  // Resetar para aba nav ao fechar
  useEffect(() => { if (!isOpen) setTab(TABS.NAV) }, [isOpen])

  const handleMarkAllRead = () =>
    setNotifications(prev => prev.map(n => ({ ...n, read: true })))

  const handleRead = (id) =>
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n))

  const handleLogout = async () => {
    onClose()
    await logout()
    navigate('/login')
  }

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          />

          {/* Drawer — sobe de baixo */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 260 }}
            className="fixed bottom-0 left-0 right-0 z-50 lg:hidden flex flex-col"
            style={{
              maxHeight: '90vh',
              background: '#fff',
              borderRadius: '24px 24px 0 0',
              overflow: 'hidden',
            }}
          >
            {/* ── Header do sheet ───────────────────────────────────── */}
            <div
              className="flex items-center justify-between px-5 pt-5 pb-4 flex-shrink-0"
              style={{ background: 'linear-gradient(135deg, #271460 0%, #160b3c 100%)' }}
            >
              {/* Avatar / info do usuário */}
              <div className="flex items-center gap-3">
                <div
                  className="flex items-center justify-center rounded-2xl"
                  style={{ width: 48, height: 48, background: 'rgba(255,255,255,0.1)' }}
                >
                  {user?.photo_url
                    ? <img src={user.photo_url} alt={user.email} className="w-full h-full object-cover rounded-2xl" />
                    : <UserCircle2 size={26} color="#fff" />
                  }
                </div>
                <div>
                  <p style={{ fontFamily: 'var(--font-navbar)', fontSize: 16, fontWeight: 700, color: '#fff', lineHeight: 1.2 }}>
                    {isAuthenticated ? (user?.name ?? user?.email ?? 'Minha conta') : 'Bem-vindo'}
                  </p>
                  {isAuthenticated && (
                    <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', marginTop: 2 }}>
                      {user?.role_label ?? ''}
                    </p>
                  )}
                </div>
              </div>

              {/* Fechar */}
              <button
                onClick={onClose}
                aria-label="Fechar menu"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  width: 40, height: 40, borderRadius: 12,
                  background: 'rgba(255,255,255,0.08)',
                  color: '#fff', transition: 'background 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
              >
                <X size={20} />
              </button>
            </div>

            {/* ── Abas (só se autenticado) ──────────────────────────── */}
            {isAuthenticated && (
              <div
                className="flex border-b flex-shrink-0"
                style={{ borderColor: '#f0f0f0' }}
              >
                {[
                  { key: TABS.NAV,   label: 'Menu' },
                  { key: TABS.NOTIF, label: 'Notificações', badge: unread > 0 ? unread : null },
                  { key: TABS.USER,  label: 'Minha conta' },
                ].map(({ key, label, badge }) => (
                  <button
                    key={key}
                    onClick={() => setTab(key)}
                    style={{
                      flex: 1, paddingTop: 14, paddingBottom: 14,
                      fontSize: 13, fontWeight: tab === key ? 600 : 400,
                      color: tab === key ? '#3d2096' : '#888',
                      borderBottom: tab === key ? '2px solid #3d2096' : '2px solid transparent',
                      transition: 'all 0.2s',
                      position: 'relative',
                      background: 'none',
                    }}
                  >
                    {label}
                    {badge && (
                      <span style={{
                        position: 'absolute', top: 8, right: '25%',
                        background: '#673de6', color: '#fff',
                        fontSize: 10, fontWeight: 700,
                        borderRadius: '50%', width: 16, height: 16,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        {badge}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            )}

            {/* ── Conteúdo scrollável ───────────────────────────────── */}
            <div className="flex-1 overflow-y-auto" style={{ paddingBottom: 32 }}>

              {/* ABA: Navegação */}
              {(!isAuthenticated || tab === TABS.NAV) && (
                <div style={{ padding: '16px 12px 0' }}>
                  {navLinks.map((item, i) => {
                    const Icon = item.icon
                    return (
                      <motion.a
                        key={item.href}
                        href={item.href}
                        onClick={onClose}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.04 }}
                        style={{
                          display: 'flex', alignItems: 'center', gap: 16,
                          padding: '12px 14px', borderRadius: 16,
                          transition: 'background 0.2s', marginBottom: 4,
                          textDecoration: 'none',
                        }}
                        onMouseEnter={e => e.currentTarget.style.background = '#3d2096'}
                        onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                        className="group"
                      >
                        <div style={{
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          width: 48, height: 48, borderRadius: 14,
                          background: 'rgba(103,61,230,0.08)',
                          color: '#5230c4', flexShrink: 0,
                          transition: 'all 0.2s',
                        }}
                          className="group-hover:!bg-white/20 group-hover:!text-white"
                        >
                          <Icon size={22} />
                        </div>
                        <div style={{ flex: 1 }}>
                          <p style={{
                            fontFamily: 'var(--font-navbar)', fontSize: 17, fontWeight: 700,
                            color: '#1a1a2e', transition: 'color 0.2s',
                          }}
                            className="group-hover:!text-white"
                          >{item.label}</p>
                          {item.description && (
                            <p style={{ fontSize: 13, color: '#888', marginTop: 2 }}
                              className="group-hover:!text-white/70"
                            >{item.description}</p>
                          )}
                        </div>
                        <ChevronRight size={18} color="#ccc" className="group-hover:!text-white" />
                      </motion.a>
                    )
                  })}

                  {/* Login / cadastro se não autenticado */}
                  {!isAuthenticated && (
                    <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 10, padding: '0 2px' }}>
                      <a href="/login" onClick={onClose} style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        height: 52, borderRadius: 16, fontSize: 16, fontWeight: 600,
                        background: 'linear-gradient(135deg, #673de6, #3d2096)',
                        color: '#fff', textDecoration: 'none',
                      }}>Entrar</a>
                      <a href="/cadastro" onClick={onClose} style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        height: 52, borderRadius: 16, fontSize: 16, fontWeight: 600,
                        border: '1.5px solid #d1c6ff', color: '#3d2096', textDecoration: 'none',
                      }}>Criar conta</a>
                    </div>
                  )}
                </div>
              )}

              {/* ABA: Notificações */}
              {isAuthenticated && tab === TABS.NOTIF && (
                <div>
                  {unread > 0 && (
                    <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '12px 16px 4px' }}>
                      <button
                        onClick={handleMarkAllRead}
                        style={{
                          display: 'flex', alignItems: 'center', gap: 6,
                          fontSize: 13, color: '#5230c4', fontWeight: 500,
                          background: 'none', padding: '4px 8px', borderRadius: 8,
                        }}
                      >
                        <CheckCheck size={15} />
                        Marcar todas como lidas
                      </button>
                    </div>
                  )}

                  {groups.length === 0 ? (
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '48px 24px' }}>
                      <div style={{
                        width: 64, height: 64, borderRadius: 20,
                        background: 'rgba(103,61,230,0.08)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: '#5230c4', marginBottom: 16,
                      }}>
                        <Bell size={28} />
                      </div>
                      <p style={{ fontSize: 16, fontWeight: 600, color: '#1a1a2e' }}>Tudo em dia</p>
                      <p style={{ fontSize: 13, color: '#888', marginTop: 6 }}>Nenhuma notificação pendente.</p>
                    </div>
                  ) : groups.map(group => (
                    <div key={group.label} style={{ padding: '12px 12px 0' }}>
                      <p style={{ fontSize: 11, fontWeight: 700, color: '#5230c4', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0 4px 8px' }}>
                        {group.label}
                      </p>
                      {group.items.map(n => {
                        const cfg = notificationConfig[n.type]
                        const Icon = cfg.icon
                        return (
                          <button
                            key={n.id}
                            onClick={() => handleRead(n.id)}
                            style={{
                              display: 'flex', width: '100%', alignItems: 'center',
                              gap: 14, padding: '12px 14px', borderRadius: 14,
                              marginBottom: 4, textAlign: 'left',
                              background: n.read ? 'transparent' : 'rgba(103,61,230,0.05)',
                              transition: 'background 0.2s',
                            }}
                            onMouseEnter={e => e.currentTarget.style.background = '#3d2096'}
                            onMouseLeave={e => e.currentTarget.style.background = n.read ? 'transparent' : 'rgba(103,61,230,0.05)'}
                            className="group"
                          >
                            <div style={{
                              width: 44, height: 44, borderRadius: 12, flexShrink: 0,
                              display: 'flex', alignItems: 'center', justifyContent: 'center',
                              transition: 'all 0.2s',
                            }} className={`${cfg.badgeClass} group-hover:!bg-white/20 group-hover:!text-white`}>
                              <Icon size={18} />
                            </div>
                            <div style={{ flex: 1, minWidth: 0 }}>
                              <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8 }}>
                                <p style={{ fontSize: 14, fontWeight: n.read ? 400 : 600, color: n.read ? '#888' : '#1a1a2e', lineHeight: 1.3 }}
                                  className="group-hover:!text-white truncate"
                                >{n.title}</p>
                                <span style={{ fontSize: 11, color: '#bbb', flexShrink: 0 }}
                                  className="group-hover:!text-white/60"
                                >{n.time}</span>
                              </div>
                              <p style={{ fontSize: 12, color: '#888', marginTop: 3, lineHeight: 1.4 }}
                                className="group-hover:!text-white/75"
                              >{n.message}</p>
                            </div>
                            {!n.read && (
                              <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#673de6', flexShrink: 0 }}
                                className="group-hover:!bg-white"
                              />
                            )}
                          </button>
                        )
                      })}
                    </div>
                  ))}

                  <div style={{ padding: '16px 12px 0' }}>
                    <a href="/notificacoes" onClick={onClose} style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                      height: 50, borderRadius: 16, fontSize: 14, fontWeight: 600,
                      color: '#3d2096', background: 'rgba(103,61,230,0.07)',
                      textDecoration: 'none',
                    }}>
                      Ver todas as notificações <ChevronRight size={16} />
                    </a>
                  </div>
                </div>
              )}

              {/* ABA: Minha conta */}
              {isAuthenticated && tab === TABS.USER && (
                <div style={{ padding: '16px 12px 0' }}>
                  {userMenuItems.flatMap(g => g.items).map(item => {
                    const Icon = item.icon
                    return (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={onClose}
                        style={{
                          display: 'flex', alignItems: 'center', gap: 16,
                          padding: '12px 14px', borderRadius: 16,
                          textDecoration: 'none', marginBottom: 4, transition: 'background 0.2s',
                        }}
                        onMouseEnter={e => e.currentTarget.style.background = '#3d2096'}
                        onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                        className="group"
                      >
                        <div style={{
                          width: 48, height: 48, borderRadius: 14, flexShrink: 0,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          background: 'rgba(103,61,230,0.08)', color: '#5230c4', transition: 'all 0.2s',
                        }} className="group-hover:!bg-white/20 group-hover:!text-white">
                          <Icon size={22} />
                        </div>
                        <div style={{ flex: 1 }}>
                          <p style={{ fontFamily: 'var(--font-navbar)', fontSize: 16, fontWeight: 700, color: '#1a1a2e' }}
                            className="group-hover:!text-white"
                          >{item.label}</p>
                          {item.description && (
                            <p style={{ fontSize: 13, color: '#888', marginTop: 2 }}
                              className="group-hover:!text-white/70"
                            >{item.description}</p>
                          )}
                        </div>
                        <ChevronRight size={18} color="#ccc" className="group-hover:!text-white" />
                      </a>
                    )
                  })}

                  {/* Separador + Logout */}
                  <div style={{ height: 1, background: '#f0f0f0', margin: '12px 4px' }} />
                  <button
                    onClick={handleLogout}
                    style={{
                      display: 'flex', width: '100%', alignItems: 'center', gap: 16,
                      padding: '12px 14px', borderRadius: 16,
                      background: 'transparent', transition: 'background 0.2s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = '#ef4444'}
                    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                    className="group"
                  >
                    <div style={{
                      width: 48, height: 48, borderRadius: 14, flexShrink: 0,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      background: 'rgba(239,68,68,0.08)', color: '#ef4444', transition: 'all 0.2s',
                    }} className="group-hover:!bg-white/20 group-hover:!text-white">
                      <LogOut size={22} />
                    </div>
                    <p style={{ fontFamily: 'var(--font-navbar)', fontSize: 16, fontWeight: 700, color: '#ef4444' }}
                      className="group-hover:!text-white"
                    >Sair da conta</p>
                  </button>
                </div>
              )}

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  )
}