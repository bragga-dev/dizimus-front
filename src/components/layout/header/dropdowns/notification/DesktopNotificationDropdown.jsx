import { useState, useRef, useEffect } from "react";
import {
  Bell,
  CheckCheck,
  Settings,
  UserPlus,
  CalendarCheck,
  AlertTriangle,
  MessageCircle,
} from "lucide-react";

const mockNotifications = [
  {
    id: 1,
    title: "Novo membro cadastrado",
    description: "João Silva foi adicionado à célula Esperança.",
    time: "há 5 min",
    read: false,
    group: "Hoje",
    icon: UserPlus,
    color: "purple",
  },
  {
    id: 2,
    title: "Evento confirmado",
    description: "Culto especial de domingo confirmado para 10h.",
    time: "há 1 h",
    read: false,
    group: "Hoje",
    icon: CalendarCheck,
    color: "green",
  },
  {
    id: 3,
    title: "Pendência financeira",
    description: "Relatório de dízimos aguarda aprovação.",
    time: "há 3 h",
    read: false,
    group: "Hoje",
    icon: AlertTriangle,
    color: "amber",
  },
  {
    id: 4,
    title: "Nova mensagem recebida",
    description: "Pastor André enviou um recado para o grupo.",
    time: "Ontem",
    read: true,
    group: "Ontem",
    icon: MessageCircle,
    color: "purple",
  },
];

const iconColors = {
  purple: {
    bg: "bg-ecclesia-50",
    text: "text-ecclesia-600",
  },
  green: {
    bg: "bg-green-50",
    text: "text-green-600",
  },
  amber: {
    bg: "bg-amber-50",
    text: "text-amber-500",
  },
};

export default function DesktopNotificationDropdown() {
  const [open, setOpen] = useState(false);
  const [notifications, setNotifications] =
    useState(mockNotifications);

  const ref = useRef(null);

  const unread = notifications.filter((n) => !n.read).length;

  const groups = Object.entries(
    notifications.reduce((acc, item) => {
      if (!acc[item.group]) acc[item.group] = [];
      acc[item.group].push(item);
      return acc;
    }, {})
  ).map(([label, items]) => ({ label, items }));

  useEffect(() => {
    function close(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", close);

    return () =>
      document.removeEventListener("mousedown", close);
  }, []);

  function handleRead(id) {
    setNotifications((prev) =>
      prev.map((n) =>
        n.id === id
          ? { ...n, read: true }
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
    <div className="relative" ref={ref}>
      {/* Trigger */}

      <button
        onClick={() => setOpen((v) => !v)}
        className="
          relative
          flex h-12 w-12
          items-center justify-center
          rounded-2xl
          transition-all
          hover:bg-[#FFD700]/5
          group
        "
      >
        <Bell
          size={26}
          className="
            text-white
            group-hover:text-[#FFD700]
          "
        />

        {unread > 0 && (
          <span
            className="
              absolute top-0 right-0
              h-6 w-6
              rounded-full
              flex items-center justify-center
              text-[11px]
              font-bold
              font-navbar
              text-white
              bg-gradient-to-br
              from-ecclesia-600
              to-ecclesia-800
            "
          >
            {unread}
          </span>
        )}
      </button>

      {open && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setOpen(false)}
          />

          <div
            className="
              absolute right-0
              top-[calc(100%+14px)]
              z-50

              w-96

              overflow-hidden

              rounded-3xl

              border
              border-ecclesia-200

              bg-white

              shadow-[0_20px_60px_rgba(80,50,180,0.18)]
            "
          >
            {/* HEADER */}

            <div
              className="
                bg-gradient-to-br
                from-ecclesia-800
                to-ecclesia-900

                px-7
                py-6

                flex
                justify-between
                items-center
              "
            >
              <div>
                <div className="flex items-center gap-3">
                  <Bell
                    size={18}
                    className="text-white"
                  />

                  <h3
                    className="
                      font-navbar
                      text-lg
                      font-bold
                      text-white
                    "
                  >
                    Notificações
                  </h3>
                </div>

                <p
                  className="
                    mt-2
                    text-sm
                    text-white/60
                  "
                >
                  {unread} pendentes
                </p>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={handleMarkAllRead}
                  className="
                    rounded-xl
                    px-4 py-2

                    text-sm
                    text-white/70
                    font-navbar
                    hover:bg-white/10
                  "
                >
                  <CheckCheck size={16} />
                </button>

                <button
                  className="
                    rounded-xl
                    p-3

                    text-white/70

                    hover:bg-white/10
                  "
                >
                  <Settings size={16} />
                </button>
              </div>
            </div>

            {/* LIST */}

            <div className="max-h-[520px] overflow-auto p-4">
              {groups.map((group) => (
                <div
                  key={group.label}
                  className="mb-6"
                >
                  <p
                    className="
                      px-3
                      mb-3

                      text-xs
                      font-bold
                      font-navbar
                      tracking-widest
                      uppercase

                      text-gray-400
                    "
                  >
                    {group.label}
                  </p>

                  <div className="space-y-2">
                    {group.items.map((n) => {
                      const Icon = n.icon;

                      return (
                        <button
                          key={n.id}
                          onClick={() =>
                            handleRead(n.id)
                          }
                          className="
                            group

                            w-full

                            flex
                            gap-4

                            rounded-2xl

                            px-5
                            py-5

                            hover:bg-ecclesia-600

                            transition
                          "
                        >
                          <div
                            className={`
                              h-12
                              w-12

                              rounded-xl

                              flex
                              items-center
                              justify-center

                              ${iconColors[n.color].bg}
                              ${iconColors[n.color].text}

                              group-hover:bg-white/20
                              group-hover:text-white
                            `}
                          >
                            <Icon size={20} />
                          </div>

                          <div className="flex-1 text-left">
                            <div className="flex justify-between">
                              <h4
                                className="
                                  text-base
                                  font-navbar
                                  text-black
                                  
                                  group-hover:text-white
                                "
                              >
                                {n.title}
                              </h4>

                              <span
                                className="
                                  text-xs
                                  text-gray-400

                                  group-hover:text-white/60
                                "
                              >
                                {n.time}
                              </span>
                            </div>

                            <p
                              className="
                                mt-2

                                text-sm
                                text-gray-500

                                group-hover:text-white/80
                              "
                            >
                              {n.description}
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* FOOTER */}

            <div
              className="
                border-t

                border-gray-100

                p-4
              "
            >
              <a
                href="/notificacoes"
                className="
                  flex
                  justify-center

                  rounded-2xl

                  py-4

                  font-navbar

                  text-black

                  hover:bg-ecclesia-600
                  hover:text-white
                "
              >
                Ver todas as notificações
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
}