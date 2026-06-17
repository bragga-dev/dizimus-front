import { User, LogOut, ChevronRight } from "lucide-react";
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
  DropdownFooter,
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
            <DropdownAvatar size="md" photoUrl={user?.photo_url} alt={user?.email}>
              <User size={20} className="text-white/80" />
            </DropdownAvatar>
          }
          title={user?.name ?? user?.email ?? "Minha Conta"}
          subtitle={user?.member ?? user?.church ?? user?.role_label ?? ""}
        />

        {/* Itens de menu */}
        <div className="p-2">
          {allItems.map((item) => (
            <DropdownMenuItem key={item.href} href={item.href} onClick={onClose}>
              <DropdownIconBadge icon={item.icon} variant="purple" size="md" />

              <div className="flex-1 min-w-0">
                <p className="font-navbar font-semibold text-black text-sm leading-tight group-hover:text-white">
                  {item.label}
                </p>
                <p className="text-gray-500 text-xs mt-0.5 font-sans group-hover:text-white/80">
                  {item.description}
                </p>
              </div>

              <ChevronRight
                size={14}
                className="text-gray-300 group-hover:text-white transition-colors"
              />
            </DropdownMenuItem>
          ))}
        </div>

        {/* Rodapé — logout */}
        <DropdownFooter>
          <DropdownMenuItem variant="danger" asButton onClick={handleLogout}>
            <DropdownIconBadge icon={logoutItem.icon} variant="red" size="md" />
            <span className="font-navbar font-semibold text-red-500 text-sm">
              Sair da conta
            </span>
          </DropdownMenuItem>
        </DropdownFooter>
      </DropdownPanel>
    </>
  );
}