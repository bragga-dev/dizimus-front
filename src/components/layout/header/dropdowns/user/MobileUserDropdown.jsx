import { useState } from "react";
import { UserCircle2, User, ChevronRight } from "lucide-react";
import { userMenuItems, logoutItem } from "./userMenuItems";

const mockUser = {
  name: "Pastor João Silva",
  email: "joao@igrejagraca.com.br",
  church: "Igreja da Graça",
  avatar: null,
};

export default function MobileUserDropdown({ isAuthenticated }) {
  const [open, setOpen] = useState(false);

  // Não autenticado
  if (!isAuthenticated) {
    return (
      <div className="border-t border-[#673DE6]/15 pt-4 mt-2">
        <a
          href="/login"
          className="
            flex items-center justify-center gap-2
            w-full rounded-xl
            bg-gradient-to-r from-[#673DE6] to-[#3d2096]
            px-4 py-3
            text-sm font-semibold text-white
            transition-all duration-300
            hover:opacity-90
          "
        >
          <User size={16} />
          Entrar na minha conta
        </a>
        <a
          href="/cadastro"
          className="
            flex items-center justify-center
            w-full mt-2 rounded-xl
            border border-[#673DE6]/30
            px-4 py-3
            text-sm font-medium text-[#9D7BFF]
            transition-all duration-300
            hover:bg-[#673DE6]/10
          "
        >
          Criar conta grátis
        </a>
      </div>
    );
  }

  return (
    <div className="border-t border-[#673DE6]/15 pt-4 mt-2">
      {/* Profile card - toggle */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="
          flex w-full items-center gap-3
          rounded-xl
          px-3 py-3
          transition-all duration-200
          hover:bg-[#673DE6]/10
        "
      >
        <div
          className="
            flex h-10 w-10 shrink-0 items-center justify-center
            rounded-full
            bg-gradient-to-br from-[#673DE6] to-[#3d2096]
            border border-[#FFD700]/20
          "
        >
          <UserCircle2 size={22} className="text-white/80" />
        </div>
        <div className="flex flex-col items-start leading-none flex-1">
          <span className="text-sm font-bold text-white">{mockUser.name}</span>
          <span className="text-[11px] text-[#7b7498] mt-0.5">{mockUser.church}</span>
        </div>
        <ChevronRight
          size={16}
          className={`
            text-[#7b7498] transition-transform duration-300
            ${open ? "rotate-90" : ""}
          `}
        />
      </button>

      {/* Expanded menu */}
      {open && (
        <div className="mt-1 flex flex-col gap-0.5">
          {userMenuItems.map((group) =>
            group.items.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className="
                    flex items-center gap-3
                    rounded-xl
                    px-3 py-2.5
                    text-[#c8c0e8]
                    transition-all duration-200
                    hover:bg-[#673DE6]/10
                    hover:text-white
                  "
                >
                  <div
                    className="
                      flex h-7 w-7 shrink-0 items-center justify-center
                      rounded-lg bg-[#271460]/60
                    "
                  >
                    <Icon size={14} className="text-[#9D7BFF]" />
                  </div>
                  <span className="text-sm font-medium">{item.label}</span>
                  {item.badge && (
                    <span
                      className="
                        ml-auto rounded-full
                        bg-[#FFD700]/15 border border-[#FFD700]/25
                        px-2 py-0.5
                        text-[9px] font-bold text-[#FFD700] uppercase tracking-wider
                      "
                    >
                      {item.badge}
                    </span>
                  )}
                </a>
              );
            })
          )}

          {/* Logout */}
          <button
            onClick={() => {/* logout real aqui */}}
            className="
              flex items-center gap-3
              rounded-xl
              px-3 py-2.5 mt-1
              text-[#f87171]
              transition-all duration-200
              hover:bg-red-500/10
              w-full
            "
          >
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-red-500/10">
              <logoutItem.icon size={14} className="text-[#f87171]" />
            </div>
            <span className="text-sm font-medium">{logoutItem.label}</span>
          </button>
        </div>
      )}
    </div>
  );
}