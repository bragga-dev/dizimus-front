import { Search, User, UserCircle2, Bell } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { navLinks } from "./constants";
import MobileUserDropdown from "./dropdowns/user/MobileUserDropdown";
import MobileNotificationDropdown from "./dropdowns/notification/MobileNotificationDropdown";

export default function MobileMenu({ isAuthenticated }) {
  const [userOpen, setUserOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);

  return (
    <div
      className="
        border-t border-[#E0B14A]/10
        bg-[#2E004F]
        px-6 py-6
        lg:hidden
      "
    >
      {/* ACTIONS */}
      <div className="mb-6 flex items-center justify-end gap-3">

        {/* USER */}
        {isAuthenticated ? (
          <div className="relative">
            <button
              onClick={() => setUserOpen((v) => !v)}
              className="
                flex h-12 w-12 items-center justify-center rounded-xl
                transition-all duration-300
                [&_svg]:transition-colors [&_svg]:duration-300
                hover:bg-[#FFD700]/5 hover:[&_svg]:text-[#FFD700]
              "
            >
              <UserCircle2 size={30} className="text-white" />
            </button>
            {userOpen && <MobileUserDropdown isAuthenticated={isAuthenticated} inline />}
          </div>
        ) : (
          <a
            href="/login"
            className="
              flex h-12 w-12 items-center justify-center rounded-xl
              transition-all duration-300
              [&_svg]:transition-colors [&_svg]:duration-300
              hover:bg-[#FFD700]/5 hover:[&_svg]:text-[#FFD700]
            "
          >
            <User size={30} className="text-white" />
          </a>
        )}

        {/* NOTIFICATION */}
        {isAuthenticated ? (
          <div className="relative">
            <button
              onClick={() => setNotifOpen((v) => !v)}
              className="
                group flex h-12 w-12 items-center justify-center rounded-xl
                transition-all duration-300 hover:bg-[#FFD700]/5
              "
            >
              <Bell size={30} className="text-white transition-colors duration-300 group-hover:text-[#FFD700]" />
            </button>
            {notifOpen && <MobileNotificationDropdown isAuthenticated={isAuthenticated} inline />}
          </div>
        ) : (
          <a
            href="/login"
            className="
              group flex h-12 w-12 items-center justify-center rounded-xl
              transition-all duration-300 hover:bg-[#FFD700]/5
            "
          >
            <Bell size={30} className="text-white transition-colors duration-300 group-hover:text-[#FFD700]" />
          </a>
        )}
      </div>

      {/* SEARCH */}
      <div
        className="
          mb-5 flex items-center overflow-hidden rounded-2xl bg-white
          transition-all duration-300
          focus-within:ring-4 focus-within:ring-[#673DE6]/20
        "
      >
        <input
          type="text"
          placeholder="Buscar..."
          className="
            flex-1 bg-transparent px-6 py-4
            font-navbar text-lg font-bold
            text-[#2E004F] placeholder:text-[#6B4B8A] outline-none
          "
        />
        <button className="flex items-center justify-center px-6 py-4 text-[#2E004F] transition-all duration-300 hover:text-[#673DE6]">
          <Search size={24} />
        </button>
      </div>

      {/* LINKS */}
      <div className="flex flex-col gap-1">
        {navLinks.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="
              relative rounded-xl px-4 py-3
              font-navbar text-xl font-medium text-[#CBD5E1]
              transition-all duration-300 hover:text-white
              after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0
              after:-translate-x-1/2 after:bg-[#E0B14A]
              after:transition-all after:duration-300 hover:after:w-[70%]
            "
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
}