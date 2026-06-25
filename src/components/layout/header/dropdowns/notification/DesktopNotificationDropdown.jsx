import { useState, useRef, useEffect } from "react";
import { Bell, CheckCheck, Settings } from "lucide-react";
import {
  DropdownPanel,
  DropdownOverlay,
  DropdownHeader,
  DropdownFooter,
} from "../shared";
import NotificationItem from "./NotificationItem";
import {
  mockNotifications,
  getUnreadCount,
  groupNotificationsByDate,
} from "./notificationHelpers";

export default function DesktopNotificationDropdown() {
  const [open, setOpen] = useState(false);
  const [notifications, setNotifications] = useState(mockNotifications);
  const ref = useRef(null);

  const unread = getUnreadCount(notifications);
  const groups = groupNotificationsByDate(notifications);

  // Fechar ao clicar fora
  useEffect(() => {
    function close(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  const handleRead = (id) =>
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );

  const handleMarkAllRead = () =>
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));

  return (
    <div className="relative" ref={ref}>
      {/* Trigger */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Notificações"
        className="relative flex h-12 w-12 items-center justify-center rounded-2xl transition-all group dropdown-hover"
      >
        <Bell size={26} className="text-white group-hover:text-white" />

        {unread > 0 && (
          <span className="absolute top-0 right-0 h-6 w-6 rounded-full flex items-center justify-center text-[11px] font-bold font-navbar text-white bg-gradient-to-br from-ecclesia-600 to-ecclesia-800">
            {unread}
          </span>
        )}
      </button>

      {open && (
        <>
          <DropdownOverlay onClose={() => setOpen(false)} />

          <DropdownPanel
            width="lg"
            align="right"
            className="top-[calc(100%+14px)] rounded-3xl"
          >
            {/* Cabeçalho */}
            <DropdownHeader
              avatar={<Bell size={18} className="text-white" />}
              title="Notificações"
              subtitle={`${unread} pendentes`}
              actions={
                <>
                  <button
                    onClick={handleMarkAllRead}
                    title="Marcar todas como lidas"
                    className="dropdown-hover rounded-xl px-3 py-2 transition"
                  >
                    <CheckCheck size={16} className="text-white" />
                  </button>
                  <button
                    title="Configurações de notificações"
                    className="dropdown-hover rounded-xl p-2 transition"
                  >
                    <Settings size={16} className="text-white" />
                  </button>
                </>
              }
            />

            {/* Lista agrupada */}
            <div className="max-h-[520px] overflow-auto p-3">
              {groups.map((group) => (
                <div key={group.label} className="mb-6">
                  <p className="px-3 mb-3 text-xs font-bold font-navbar tracking-widest uppercase text-gray-400">
                    {group.label}
                  </p>
                  <div className="space-y-1">
                    {group.items.map((n) => (
                      <NotificationItem
                        key={n.id}
                        notification={n}
                        onRead={handleRead}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Rodapé */}
            <DropdownFooter>
              <a
                href="/notificacoes"
                className="dropdown-hover flex justify-center rounded-2xl py-4 font-navbar transition-all"
              >
                Ver todas as notificações
              </a>
            </DropdownFooter>
          </DropdownPanel>
        </>
      )}
    </div>
  );
}
