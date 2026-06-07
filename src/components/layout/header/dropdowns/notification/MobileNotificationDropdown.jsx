import { useState } from "react";
import { X, Bell, CheckCheck } from "lucide-react";
import NotificationItem from "./NotificationItem";
import {
  mockNotifications,
  getUnreadCount,
  groupNotificationsByDate,
} from "./notificationHelpers";

export default function MobileNotificationDropdown({ onClose }) {
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
    <div className="fixed inset-0 z-50 flex flex-col bg-[#160b3c]">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#673DE6]/20 px-6 py-5 shrink-0">
        <div className="flex items-center gap-2">
          <Bell size={18} className="text-[#9D7BFF]" />
          <h3 className="text-base font-bold text-white">Notificações</h3>
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
        <div className="flex items-center gap-2">
          {unread > 0 && (
            <button
              onClick={handleMarkAllRead}
              className="
                flex items-center gap-1.5
                rounded-lg px-3 py-2
                text-[11px] font-semibold text-[#9D7BFF]
                transition-all duration-200
                hover:bg-[#673DE6]/15 hover:text-[#b09aff]
              "
            >
              <CheckCheck size={13} />
              Marcar todas
            </button>
          )}
          <button
            onClick={onClose}
            className="
              flex h-10 w-10 items-center justify-center
              rounded-xl text-[#CBD5E1]
              transition-all duration-200
              hover:bg-[#673DE6]/15 hover:text-white
            "
          >
            <X size={22} />
          </button>
        </div>
      </div>

      {/* Scrollable list */}
      <div className="flex-1 overflow-y-auto py-2">
        {groups.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div
              className="
                flex h-14 w-14 items-center justify-center
                rounded-2xl
                bg-[#271460]/60 border border-[#673DE6]/15
                mb-4
              "
            >
              <Bell size={22} className="text-[#7b7498]" />
            </div>
            <p className="text-sm font-semibold text-[#c8c0e8]">Tudo em dia!</p>
            <p className="text-[12px] text-[#7b7498] mt-1">Nenhuma notificação no momento.</p>
          </div>
        ) : (
          groups.map((group) => (
            <div key={group.label}>
              <p className="px-5 pt-4 pb-1 text-[10px] font-bold text-[#7b7498] uppercase tracking-widest">
                {group.label}
              </p>
              <div className="px-2">
                {group.items.map((n) => (
                  <NotificationItem
                    key={n.id}
                    notification={n}
                    onRead={handleRead}
                    compact
                  />
                ))}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Footer */}
      <div className="border-t border-[#673DE6]/15 p-4 shrink-0">
        <a
          href="/notificacoes"
          className="
            flex w-full items-center justify-center
            rounded-xl py-3
            text-sm font-semibold text-[#9D7BFF]
            transition-all duration-200
            hover:bg-[#673DE6]/10 hover:text-[#b09aff]
          "
        >
          Ver todas as notificações
        </a>
      </div>
    </div>
  );
}