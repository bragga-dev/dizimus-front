import { useState } from "react";
import {
  X,
  Bell,
  CheckCheck,
  ChevronRight,
} from "lucide-react";

import NotificationItem from "./NotificationItem";

import {
  mockNotifications,
  getUnreadCount,
  groupNotificationsByDate,
} from "./notificationHelpers";

export default function MobileNotificationDropdown({
  onClose,
}) {
  const [notifications, setNotifications] =
    useState(mockNotifications);

  const unread =
    getUnreadCount(notifications);

  const groups =
    groupNotificationsByDate(notifications);

  function handleRead(id) {
    setNotifications((prev) =>
      prev.map((n) =>
        n.id === id
          ? {
              ...n,
              read: true,
            }
          : n
      )
    );
  }

  function handleMarkAllRead() {
    setNotifications((prev) =>
      prev.map((n) => ({
        ...n,
        read: true,
      }))
    );
  }

  return (
    <div
      className="
        fixed
        inset-0
        z-50

        bg-white

        flex
        flex-col
      "
    >

      {/* HEADER */}

      <div
        className="
          bg-gradient-to-br
          from-ecclesia-800
          to-ecclesia-900

          px-6
          pt-6
          pb-5

          flex
          items-center
          justify-between

          shrink-0
        "
      >

        <div className="flex items-center gap-5">

          <div
            className="
              flex

              h-16
              w-16

              items-center
              justify-center

              rounded-[22px]

              bg-white/6
            "
          >
            <Bell
              size={30}
              className="text-white"
            />
          </div>

          <div>

            <h2
              className="
                text-xl
                font-bold
                text-white
              "
            >
              Notificações
            </h2>

            <p
              className="
                mt-1
                text-sm
                text-white/65
              "
            >
              {unread}
              {" "}
              não lidas
            </p>

          </div>

        </div>

        <div className="flex items-center">

          {unread > 0 && (
            <button
              onClick={handleMarkAllRead}
              className="
                mr-2

                rounded-[18px]

                px-4
                py-3

                text-sm
                font-semibold

                text-white/80

                hover:bg-white/10
              "
            >
              <div className="flex items-center gap-2">
                <CheckCheck size={18} />
                Marcar
              </div>
            </button>
          )}

          <button
            onClick={onClose}
            className="
              flex

              h-12
              w-[92px]

              items-center
              justify-center

              text-white

              hover:bg-white/8
            "
          >
            <X size={28} />
          </button>

        </div>

      </div>

      {/* LISTA */}

      <div
        className="
          flex-1

          overflow-y-auto

          px-5
          py-5
        "
      >

        {groups.length === 0 ? (

          <div
            className="
              flex
              h-full

              flex-col

              items-center
              justify-center
            "
          >

            <div
              className="
                flex

                h-20
                w-20

                items-center
                justify-center

                rounded-[26px]

                bg-ecclesia-50

                text-ecclesia-600
              "
            >
              <Bell size={34} />
            </div>

            <h3
              className="
                mt-6

                text-xl
                font-bold
              "
            >
              Tudo em dia
            </h3>

            <p
              className="
                mt-2

                text-gray-500
              "
            >
              Nenhuma notificação.
            </p>

          </div>

        ) : (

          groups.map((group) => (

            <div
              key={group.label}
              className="mb-8"
            >

              <p
                className="
                  mb-3

                  px-2

                  text-sm
                  font-bold

                  uppercase

                  tracking-widest

                  text-ecclesia-500
                "
              >
                {group.label}
              </p>

              <div className="space-y-3">

                {group.items.map((n) => (

                  <NotificationItem
                    key={n.id}
                    notification={n}
                    onRead={handleRead}
                    compact={false}
                  />

                ))}

              </div>

            </div>

          ))

        )}

      </div>

      {/* FOOTER */}

      <div
        className="
          px-5
          pb-6
        "
      >

        <a
          href="/notificacoes"
          className="
            group

            flex
            items-center
            justify-center

            gap-3

            rounded-[26px]

            bg-ecclesia-50

            px-6
            py-5

            font-semibold

            text-ecclesia-700

            hover:bg-ecclesia-600
            hover:text-white
          "
        >

          Ver todas

          <ChevronRight
            size={20}
            className="
              transition-transform

              group-hover:translate-x-1
            "
          />

        </a>

      </div>

    </div>
  );
}