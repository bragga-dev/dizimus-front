import { useState } from "react";
import { Bell, ChevronRight, CheckCheck } from "lucide-react";
import NotificationItem from "./NotificationItem";
import {
  mockNotifications,
  getUnreadCount,
  groupNotificationsByDate,
} from "./notificationHelpers";

export default function MobileNotificationDropdown() {
  const [open, setOpen] = useState(false);
  const [notifications, setNotifications] = useState(mockNotifications);

  const unread = getUnreadCount(notifications);
  const groups = groupNotificationsByDate(notifications);

  function handleRead(id) {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  }

  function handleMarkAllRead() {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  }

  return (
    <div className="border-t border-[#673DE6]/15 mt-2 pt-2">
      {/* Toggle button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="
          flex w-full items-center gap-3
          rounded-xl px-3 py-3
          transition-all duration-200
          hover:bg-[#673DE6]/10
        "
      >
        {/* Icon with badge */}
        <div className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#271460]/60 border border-[#673DE6]/20">
          <Bell size={18} className="text-[#9D7BFF]" />
          {unread > 0 && (
            <span
              className="
                absolute -top-1 -right-1
                flex h-4 w-4 items-center justify-center
                rounded-full
                bg-gradient-to-br from-[#673DE6] to-[#3d2096]
                border border-[#2E004F]
                text-[9px] font-bold text-white
              "
            >
              {unread}
            </span>
          )}
        </div>

        <div className="flex-1 text-left">
          <span className="text-sm font-bold text-white">Notificações</span>
          {unread > 0 && (
            <p className="text-[11px] text-[#9D7BFF] mt-0.5">{unread} não lida{unread > 1 ? "s" : ""}</p>
          )}
        </div>

        <ChevronRight
          size={16}
          className={`
            text-[#7b7498] transition-transform duration-300
            ${open ? "rotate-90" : ""}
          `}
        />
      </button>

      {/* Expanded list */}
      {open && (
        <div className="mt-1">
          {/* Mark all read */}
          {unread > 0 && (
            <button
              onClick={handleMarkAllRead}
              className="
                flex items-center gap-1.5
                w-full justify-end
                px-3 pb-2
                text-[11px] font-semibold text-[#9D7BFF]
                hover:text-[#b09aff]
                transition-colors duration-200
              "
            >
              <CheckCheck size={12} />
              Marcar todas como lidas
            </button>
          )}

          {groups.length === 0 ? (
            <div className="flex flex-col items-center py-8 text-center">
              <Bell size={22} className="text-[#7b7498] mb-2" />
              <p className="text-sm text-[#7b7498]">Nenhuma notificação.</p>
            </div>
          ) : (
            groups.map((group) => (
              <div key={group.label}>
                <p className="px-3 pt-2 pb-1 text-[10px] font-bold text-[#7b7498] uppercase tracking-widest">
                  {group.label}
                </p>
                {group.items.map((n) => (
                  <NotificationItem
                    key={n.id}
                    notification={n}
                    onRead={handleRead}
                    compact
                  />
                ))}
              </div>
            ))
          )}

          <a
            href="/notificacoes"
            className="
              flex w-full items-center justify-center
              rounded-xl mt-2 py-2.5
              text-sm font-semibold text-[#9D7BFF]
              transition-all duration-200
              hover:bg-[#673DE6]/10
            "
          >
            Ver todas →
          </a>
        </div>
      )}
    </div>
  );
}