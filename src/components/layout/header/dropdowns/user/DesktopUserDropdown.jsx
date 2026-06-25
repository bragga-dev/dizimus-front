import { User, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { userMenuItems, logoutItem } from "./userMenuItems";
import {
  DropdownPanel,
  DropdownOverlay,
  DropdownHeader,
  DropdownAvatar,
  DropdownIconBadge,
  DropdownMenuItem,
} from "../shared";

export default function DesktopUserDropdown({ open, onClose, user }) {
  const { logout } = useAuth();
  const navigate = useNavigate();

  if (!open) return null;

  const handleLogout = async () => {
    onClose();
    await logout();
    navigate("/login");
  };

  const allItems = userMenuItems.flatMap((g) => g.items);

  return (
    <>
      <DropdownOverlay onClose={onClose} />

      <DropdownPanel width="md" align="right">
        {/* Cabeçalho */}
        <DropdownHeader
          avatar={
            <DropdownAvatar
              size="md"
              photoUrl={user?.photo_url}
              alt={user?.email}
            >
              <User size={20} className="text-white/80" />
            </DropdownAvatar>
          }
          title={user?.name ?? user?.email ?? "Minha Conta"}
          subtitle={user?.member ?? user?.church ?? user?.role_label ?? ""}
        />

        {/* Itens de menu */}
        <div className="p-2">
          {allItems.map((item) => (
            <DropdownMenuItem
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="group dropdown-hover transition-colors"
            >
              <DropdownIconBadge icon={item.icon} variant="purple" size="md" />

              <div className="flex-1 min-w-0">
                <p className="dropdown-text font-navbar font-semibold text-sm leading-tight">
                  {item.label}
                </p>
                <p className="dropdown-text text-xs mt-0.5 font-sans">
                  {item.description}
                </p>
              </div>

              <ChevronRight
                size={14}
                className="text-gray-300 transition-colors group-hover:text-white"
              />
            </DropdownMenuItem>
          ))}

          {/* Separador */}
          <div className="border-t border-gray-200 my-2" />

          {/* Item de logout */}
          <DropdownMenuItem
            asButton
            onClick={handleLogout}
            className="group dropdown-hover transition-colors"
          >
            <DropdownIconBadge
              icon={logoutItem.icon}
              variant="purple"
              size="md"
            />

            <div className="flex-1 min-w-0 flex items-center">
              <p className="dropdown-text font-navbar font-semibold text-sm leading-tight">
                Sair da conta
              </p>
            </div>

            <ChevronRight
              size={14}
              className="text-gray-300 transition-colors group-hover:text-white"
            />
          </DropdownMenuItem>
        </div>
      </DropdownPanel>
    </>
  );
}
