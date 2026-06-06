import { LogIn, User, UserCircle2, Bell } from "lucide-react";
import DesktopUserDropdown from "./dropdowns/user/DesktopUserDropdown";
import DesktopNotificationDropdown from "./dropdowns/notification/DesktopNotificationDropdown";

export default function HeaderActions({ isAuthenticated }) {
  return (
    <div
      className="
        hidden items-center gap-3
        lg:flex
      "
    >
      {/* LOGIN */}
      <button
        className="
          relative
          flex items-center gap-2
          rounded-xl
          px-4 py-2.5
          font-navbar
          text-lg
          font-medium
          text-[#CBD5E1]

          transition-all duration-300

          after:absolute
          after:bottom-0
          after:left-1/2
          after:h-[2px]
          after:w-0
          after:-translate-x-1/2
          after:bg-[#FFFF00]

          after:transition-all
          after:duration-300

          hover:text-[#FFFF00]
          hover:after:w-[70%]
        "
      >
      </button>

      {/* USER — anônimo: redireciona /login | logado: abre dropdown */}
      {isAuthenticated ? (
        <DesktopUserDropdown isAuthenticated={isAuthenticated} />
      ) : (
        <a
          href="/login"
          className="
            flex h-11 w-11
            items-center justify-center
            rounded-xl
            transition-all duration-300
            [&_svg]:transition-colors
            [&_svg]:duration-300
            hover:[&_svg]:text-[#FFD700]
            hover:bg-[#FFD700]/5
          "
        >
          <User size={30} className="text-white" />
        </a>
      )}

      {/* NOTIFICATION — anônimo: redireciona /login | logado: abre dropdown */}
      {isAuthenticated ? (
        <DesktopNotificationDropdown />
      ) : (
        <a
          href="/login"
          className="
            flex h-11 w-11
            items-center justify-center
            rounded-xl
            transition-all duration-300
            hover:bg-[#FFD700]/5
            group
          "
        >
          <Bell
            size={30}
            className="
              text-white
              transition-colors
              duration-300
              group-hover:text-[#FFD700]
            "
          />
        </a>
      )}
    </div>
  );
}