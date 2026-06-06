import { notificationConfig } from "./notificationHelpers";

export default function NotificationItem({ notification, onRead, compact = false }) {
  const config = notificationConfig[notification.type];
  const Icon = config.icon;

  return (
    <button
      onClick={() => onRead && onRead(notification.id)}
      className={`
        flex w-full items-start gap-3
        rounded-xl
        ${compact ? "px-3 py-2.5" : "px-4 py-3"}
        text-left
        transition-all duration-200
        hover:bg-[#673DE6]/10
        ${!notification.read ? "bg-[#673DE6]/5" : ""}
        group
      `}
    >
      {/* Icon badge */}
      <div
        className="
          flex h-9 w-9 shrink-0 items-center justify-center
          rounded-xl
          mt-0.5
        "
        style={{
          background: config.bg,
          border: `1px solid ${config.border}`,
        }}
      >
        <Icon size={16} style={{ color: config.color }} />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <p
            className={`
              text-sm leading-snug truncate
              ${notification.read ? "text-[#c8c0e8] font-medium" : "text-white font-semibold"}
            `}
          >
            {notification.title}
          </p>
          {/* Unread dot */}
          {!notification.read && (
            <span
              className="h-1.5 w-1.5 shrink-0 rounded-full"
              style={{ background: config.color }}
            />
          )}
        </div>
        <p className="text-[12px] text-[#7b7498] leading-relaxed mt-0.5 line-clamp-2">
          {notification.message}
        </p>
        <p className="text-[11px] text-[#7b7498]/70 mt-1">{notification.time}</p>
      </div>
    </button>
  );
}