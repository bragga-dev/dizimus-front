import {
  User,
  LayoutDashboard,
  Settings,
  LogOut,
} from "lucide-react";

export default function DesktopUserDropdown({
  open,
  onClose,
}) {
  if (!open) return null;

  const items = [
    {
      label: "Meu Perfil",
      icon: User,
      href: "/profile",
    },
    {
      label: "Dashboard",
      icon: LayoutDashboard,
      href: "/dashboard",
    },
    {
      label: "Configurações",
      icon: Settings,
      href: "/settings",
    },
  ];

  return (
    <div
      className="
        absolute
        right-0
        top-[calc(100%+12px)]
        z-50

        w-72

        overflow-hidden
        rounded-2xl

        border
        border-[#E0B14A]/10

        bg-[#2E004F]

        shadow-2xl
      "
    >
      {/* HEADER */}
      <div
        className="
          border-b
          border-white/10
          px-5
          py-4
        "
      >
        <p className="font-navbar text-white">
          Minha Conta
        </p>

        <p
          className="
            mt-1
            text-sm
            text-[#CBD5E1]
          "
        >
          Gerencie sua conta
        </p>
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
                flex
                items-center
                gap-3

                rounded-xl

                px-4
                py-3

                text-[#CBD5E1]

                transition-all
                duration-300

                hover:bg-[#FFD700]/5
                hover:text-[#FFD700]
              "
            >
              <Icon size={18} />

              {item.label}
            </a>
          );
        })}
      </div>

      {/* FOOTER */}
      <div
        className="
          border-t
          border-white/10
          p-2
        "
      >
        <button
          className="
            flex
            w-full
            items-center
            gap-3

            rounded-xl

            px-4
            py-3

            text-red-300

            transition-all
            duration-300

            hover:bg-red-500/10
          "
        >
          <LogOut size={18} />

          Sair
        </button>
      </div>
    </div>
  );
}