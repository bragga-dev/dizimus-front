import { X, UserCircle2, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { userMenuItems, logoutItem } from "./userMenuItems";
import { useAuth } from "@/hooks/useAuth";

export default function MobileUserDropdown({ onClose }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    onClose();
    await logout();
    navigate("/login");
  };

  return (
    <div className="fixed inset-0 z-50 bg-white flex flex-col overflow-y-auto">

      {/* HEADER */}
      <div className="bg-gradient-to-br from-ecclesia-800 to-ecclesia-900 px-6 pt-6 pb-5 flex items-center justify-between">
        <div className="flex items-center gap-5">
          <div className="flex h-16 w-16 items-center justify-center rounded-[22px] bg-white/6">
            <UserCircle2 size={32} className="text-white" />
          </div>
          <div>
            <h2 className="font-navbar text-xl font-bold text-white">
              {user?.name ?? user?.email ?? "Minha Conta"}
            </h2>
            <p className="mt-1 text-sm text-white/65">
              {user?.church ?? user?.role ?? ""}
            </p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="flex h-12 w-[92px] items-center justify-center text-white hover:bg-white/8"
        >
          <X size={28} />
        </button>
      </div>

      {/* MENU */}
      <div className="flex-1 px-5 py-6">
        <div className="space-y-2">
          {userMenuItems.flatMap((group) =>
            group.items.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className="group flex items-center gap-6 rounded-[30px] px-4 py-4 transition-all hover:bg-ecclesia-600"
                >
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[22px] bg-ecclesia-50/55 text-ecclesia-600 transition-all group-hover:bg-white/10 group-hover:text-white">
                    <Icon size={28} />
                  </div>
                  <div className="flex-1">
                    <p className="font-navbar text-xl font-bold text-black group-hover:text-white">
                      {item.label}
                    </p>
                    {item.badge && (
                      <p className="mt-1 text-sm text-ecclesia-500 group-hover:text-white/80">
                        {item.badge}
                      </p>
                    )}
                  </div>
                  <ChevronRight size={22} className="text-gray-300 group-hover:text-white" />
                </a>
              );
            })
          )}

          {/* LOGOUT */}
          <button
            onClick={handleLogout}
            className="group mt-4 flex w-full items-center gap-6 rounded-[30px] px-4 py-4 transition-all hover:bg-red-500"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-[22px] bg-red-50 text-red-500 group-hover:bg-white/10 group-hover:text-white">
              <logoutItem.icon size={28} />
            </div>
            <span className="flex-1 text-left font-navbar text-xl font-bold text-red-500 group-hover:text-white">
              {logoutItem.label}
            </span>
            <ChevronRight size={22} className="text-red-300 group-hover:text-white" />
          </button>
        </div>
      </div>

    </div>
  );
}