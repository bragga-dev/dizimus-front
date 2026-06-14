import { ChevronRight } from "lucide-react";
import { notificationConfig } from "./notificationHelpers";

export default function NotificationItem({ notification, onRead, compact = false }) {
  const config = notificationConfig[notification.type];
  const Icon   = config.icon;

  return (
    <button
      type="button"
      onClick={() => onRead && onRead(notification.id)}
      className={`
        group flex w-full items-center gap-4
        rounded-xl px-3
        ${compact ? "py-2.5" : "py-3.5"}
        text-left
        transition-all duration-200
        hover:bg-ecclesia-600
        ${!notification.read ? "bg-ecclesia-50/60" : ""}
      `}
    >
      {/* Ícone — badge maior com ícone maior */}
      <div
        className={`
          flex h-11 w-11 shrink-0 items-center justify-center
          rounded-xl transition-all duration-200
          ${config.badgeClass}
          group-hover:bg-white/20 group-hover:text-white
        `}
      >
        <Icon size={20} />
      </div>

      {/* Conteúdo */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2">
          <p
            className={`
              font-navbar font-semibold text-sm leading-snug truncate
              group-hover:text-white
              ${notification.read ? "text-gray-400" : "text-black"}
            `}
          >
            {notification.title}
          </p>
          <span className="text-xs text-gray-400 shrink-0 group-hover:text-white/70">
            {notification.time}
          </span>
        </div>

        <p className="text-xs text-gray-500 mt-1 font-sans line-clamp-2 group-hover:text-white/80">
          {notification.message}
        </p>
      </div>

      {/* Dot não lido + chevron */}
      <div className="flex flex-col items-center gap-1.5 shrink-0">
        {!notification.read && (
          <span className="h-1.5 w-1.5 rounded-full bg-ecclesia-500 group-hover:bg-white" />
        )}
        <ChevronRight size={14} className="text-gray-300 group-hover:text-white transition-colors" />
      </div>
    </button>
  );
}