import { X, UserCircle2, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { userMenuItems, logoutItem } from "./userMenuItems";
import {
  DropdownHeader,
  DropdownAvatar,
  DropdownIconBadge,
} from "../shared";

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

      {/* Cabeçalho */}
      <DropdownHeader
        size="md"
        avatar={
          <DropdownAvatar size="lg" className="rounded-[22px]" photoUrl={user?.photo_url} alt={user?.email}>
            <UserCircle2 size={32} className="text-white" />
          </DropdownAvatar>
        }
        title={
          <h2 className="font-navbar text-xl font-bold text-white">
            {user?.name ?? user?.email ?? "Minha Conta"}
          </h2>
        }
        subtitle={user?.church ?? user?.role_label ?? ""}
        actions={
          <button
            onClick={onClose}
            aria-label="Fechar"
            className="flex h-12 w-12 items-center justify-center text-white hover:bg-white/10 rounded-xl transition"
          >
            <X size={28} />
          </button>
        }
      />

      {/* Menu */}
      <div className="flex-1 px-5 py-6">
        <div className="space-y-2">
          {userMenuItems.flatMap((group) =>
            group.items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="group flex items-center gap-6 rounded-[30px] px-4 py-4 transition-all hover:bg-ecclesia-600"
              >
                <DropdownIconBadge
                  icon={item.icon}
                  iconSize={28}
                  size="xl"
                  variant="purple"
                  className="rounded-[22px] !bg-ecclesia-50/55"
                />
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
            ))
          )}

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="group mt-4 flex w-full items-center gap-6 rounded-[30px] px-4 py-4 transition-all hover:bg-red-500"
          >
            <DropdownIconBadge
              icon={logoutItem.icon}
              iconSize={28}
              size="xl"
              variant="red"
              className="rounded-[22px]"
            />
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