import {
  User,
  LayoutDashboard,
  Settings,
  LogOut,
  ChevronRight,
} from "lucide-react";

export default function DesktopUserDropdown({ open, onClose, user }) {
  if (!open) return null;

  const items = [
    {
      label: "Meu Perfil",
      icon: User,
      href: "/profile",
      description: "Edite suas informações",
    },
    {
      label: "Dashboard",
      icon: LayoutDashboard,
      href: "/dashboard",
      description: "Visão geral da igreja",
    },
    {
      label: "Configurações",
      icon: Settings,
      href: "/settings",
      description: "Preferências do sistema",
    },
  ];

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-40"
        onClick={onClose}
      />

      <div
        className="
          absolute right-0 top-[calc(100%+10px)] z-50
          w-80 overflow-hidden
          rounded-2xl
          border border-ecclesia-300/30
          bg-white
          shadow-[0_8px_40px_rgba(103,61,230,0.18)]
          animate-in fade-in slide-in-from-top-2 duration-200
        "
      >
        {/* HEADER */}
        <div className="bg-gradient-to-br from-ecclesia-800 to-ecclesia-900 px-5 py-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 ring-2 ring-white/20">
            <User size={20} className="text-white/80" />
          </div>

          <div>
            <p className="font-navbar font-bold text-white text-base leading-tight">
              {user?.name ?? "Minha Conta"}
            </p>

            <p className="text-ecclesia-300 text-xs mt-0.5 font-sans">
              {user?.email ?? "Administrador"}
            </p>
          </div>
        </div>

        {/* LINKS */}
        <div className="p-2">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.href}
                href={item.href}
                className="
                  group flex items-center gap-3
                  rounded-xl px-4 py-3
                  transition-all duration-200
                  hover:bg-ecclesia-600
                "
              >
                <div
                  className="
                    flex h-9 w-9 items-center justify-center rounded-lg
                    bg-ecclesia-50 text-ecclesia-600
                    group-hover:bg-white/20
                    group-hover:text-white
                    transition-all duration-200
                  "
                >
                  <Icon size={18} />
                </div>

                <div className="flex-1 min-w-0">
                  <p
                    className="
                      font-navbar font-semibold
                      text-black text-sm leading-tight
                      group-hover:text-white
                    "
                  >
                    {item.label}
                  </p>

                  <p
                    className="
                      text-gray-500 text-xs mt-0.5 font-sans
                      group-hover:text-white/80
                    "
                  >
                    {item.description}
                  </p>
                </div>

                <ChevronRight
                  size={14}
                  className="
                    text-gray-300
                    group-hover:text-white
                    transition-colors
                  "
                />
              </a>
            );
          })}
        </div>

        {/* FOOTER */}
        <div className="border-t border-gray-100 p-2">
          <button
            className="
              group flex w-full items-center gap-3
              rounded-xl px-4 py-3
              transition-all duration-200
              hover:bg-red-50
            "
          >
            <div
              className="
                flex h-9 w-9 items-center justify-center rounded-lg
                bg-red-50 text-red-400
                group-hover:bg-red-100
                transition-all duration-200
              "
            >
              <LogOut size={18} />
            </div>

            <span className="font-navbar font-semibold text-red-500 text-sm">
              Sair da conta
            </span>
          </button>
        </div>
      </div>
    </>
  );
}