import { X, UserCircle2 } from "lucide-react";
import { userMenuItems, logoutItem } from "./userMenuItems";

const mockUser = {
  name: "Pastor João Silva",
  email: "joao@igrejagraca.com.br",
  church: "Igreja da Graça",
  avatar: null,
};

export default function MobileUserDropdown({ isAuthenticated, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-[#2E004F] overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#673DE6]/20 px-6 py-5">
        <div className="flex items-center gap-3">
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
          <div className="flex flex-col leading-none">
            <span className="text-sm font-bold text-white">{mockUser.name}</span>
            <span className="text-[11px] text-[#7b7498] mt-0.5">{mockUser.church}</span>
          </div>
        </div>
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

      {/* Menu items */}
      <div className="flex flex-col gap-0.5 p-4">
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
                  px-4 py-4
                  text-[#c8c0e8]
                  transition-all duration-200
                  hover:bg-[#673DE6]/10
                  hover:text-white
                "
              >
                <div
                  className="
                    flex h-8 w-8 shrink-0 items-center justify-center
                    rounded-lg bg-[#271460]/60
                  "
                >
                  <Icon size={16} className="text-[#9D7BFF]" />
                </div>
                <span className="text-base font-medium">{item.label}</span>
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
            px-4 py-4 mt-2
            text-[#f87171]
            transition-all duration-200
            hover:bg-red-500/10
            w-full
          "
        >
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-500/10">
            <logoutItem.icon size={16} className="text-[#f87171]" />
          </div>
          <span className="text-base font-medium">{logoutItem.label}</span>
        </button>
      </div>
    </div>
  );
}