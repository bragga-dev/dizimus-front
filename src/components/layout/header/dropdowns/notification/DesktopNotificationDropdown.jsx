import { useState, useRef, useEffect } from "react";
import { Bell, CheckCheck, Settings } from "lucide-react";
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

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleRead(id) {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  }

  function handleMarkAllRead() {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  }

  return (
    <div className="relative" ref={ref}>
      {/* Trigger */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="
          relative
          flex h-11 w-11
          items-center justify-center
          rounded-xl
          transition-all duration-300
          hover:bg-[#FFD700]/5
          group
        "
      >
        <Bell
          size={24}
          className="
            text-white
            transition-colors duration-300
            group-hover:text-[#FFD700]
          "
        />
        {/* Badge */}
        {unread > 0 && (
          <span
            className="
              absolute -top-0.5 -right-0.5
              flex h-5 w-5 items-center justify-center
              rounded-full
              bg-gradient-to-br from-[#673DE6] to-[#3d2096]
              border border-[#2E004F]
              text-[10px] font-bold text-white
            "
          >
            {unread > 9 ? "9+" : unread}
          </span>
        )}
      </button>

      {/* Panel */}
      {open && (
        <div
          className="
            absolute right-0 top-[calc(100%+12px)]
            w-[360px]
            rounded-2xl
            border border-[#673DE6]/20
            bg-[#160b3c]
            shadow-[0_20px_60px_rgba(0,0,0,0.5)]
            overflow-hidden
            z-50
            animate-in fade-in slide-in-from-top-2 duration-200
          "
        >
          {/* Header */}
          <div
            className="
              flex items-center justify-between
              px-5 py-4
              border-b border-[#673DE6]/15
              bg-gradient-to-r from-[#271460]/60 to-[#160b3c]
            "
          >
            <div className="flex items-center gap-2">
              <Bell size={16} className="text-[#9D7BFF]" />
              <h3 className="text-sm font-bold text-white">Notificações</h3>
              {unread > 0 && (
                <span
                  className="
                    rounded-full
                    bg-[#673DE6]/25 border border-[#673DE6]/30
                    px-2 py-0.5
                    text-[10px] font-bold text-[#9D7BFF]
                  "
                >
                  {unread} novas
                </span>
              )}
            </div>
            <div className="flex items-center gap-1">
              {unread > 0 && (
                <button
                  onClick={handleMarkAllRead}
                  className="
                    flex items-center gap-1.5
                    rounded-lg px-2.5 py-1.5
                    text-[11px] font-semibold text-[#9D7BFF]
                    transition-all duration-200
                    hover:bg-[#673DE6]/15
                    hover:text-[#b09aff]
                  "
                >
                  <CheckCheck size={13} />
                  Marcar todas
                </button>
              )}
              <a
                href="/configuracoes/notificacoes"
                className="
                  flex items-center justify-center
                  h-7 w-7 rounded-lg
                  text-[#7b7498]
                  transition-all duration-200
                  hover:bg-[#673DE6]/15
                  hover:text-[#9D7BFF]
                "
              >
                <Settings size={14} />
              </a>
            </div>
          </div>

          {/* Notification list */}
          <div className="max-h-[380px] overflow-y-auto py-2 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#271460]">
            {groups.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div
                  className="
                    flex h-14 w-14 items-center justify-center
                    rounded-2xl
                    bg-[#271460]/60
                    border border-[#673DE6]/15
                    mb-4
                  "
                >
                  <Bell size={22} className="text-[#7b7498]" />
                </div>
                <p className="text-sm font-semibold text-[#c8c0e8]">
                  Tudo em dia!
                </p>
                <p className="text-[12px] text-[#7b7498] mt-1">
                  Nenhuma notificação no momento.
                </p>
              </div>
            ) : (
              groups.map((group) => (
                <div key={group.label}>
                  <p
                    className="
                      px-5 pt-3 pb-1
                      text-[10px] font-bold
                      text-[#7b7498]
                      uppercase tracking-widest
                    "
                  >
                    {group.label}
                  </p>
                  <div className="px-2">
                    {group.items.map((n) => (
                      <NotificationItem
                        key={n.id}
                        notification={n}
                        onRead={handleRead}
                      />
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          <div className="border-t border-[#673DE6]/15 p-3">
            <a
              href="/notificacoes"
              onClick={() => setOpen(false)}
              className="
                flex w-full items-center justify-center
                rounded-xl
                py-2.5
                text-sm font-semibold text-[#9D7BFF]
                transition-all duration-200
                hover:bg-[#673DE6]/10
                hover:text-[#b09aff]
              "
            >
              Ver todas as notificações
            </a>
          </div>
        </div>
      )}
    </div>
  );
}