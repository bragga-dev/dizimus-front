import { useRef, useState, useEffect } from "react";
import { UserCircle2, Bell } from "lucide-react";
import DesktopUserDropdown from "./dropdowns/user/DesktopUserDropdown";
import DesktopNotificationDropdown from "./dropdowns/notification/DesktopNotificationDropdown";

export default function HeaderActions({ isAuthenticated, user }) {
  const [userOpen, setUserOpen] = useState(false);
  const userRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (userRef.current && !userRef.current.contains(e.target)) setUserOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="hidden items-center gap-3 lg:flex">

      {/* USER */}
      {isAuthenticated ? (
        <div className="relative" ref={userRef}>
          <button
            onClick={() => setUserOpen((v) => !v)}
            className="
              flex h-11 w-11
              items-center justify-center
              rounded-xl
              transition-all duration-300
              [&_svg]:transition-colors [&_svg]:duration-300
              hover:bg-[#FFD700]/5 hover:[&_svg]:text-[#FFD700]
            "
          >
            <UserCircle2 size={30} className="text-white" />
          </button>
          <DesktopUserDropdown open={userOpen} onClose={() => setUserOpen(false)} user={user} />
        </div>
      ) : (
        <a
          href="/login"
          className="
            flex h-11 w-11
            items-center justify-center
            rounded-xl
            transition-all duration-300
            [&_svg]:transition-colors [&_svg]:duration-300
            hover:bg-[#FFD700]/5 hover:[&_svg]:text-[#FFD700]
          "
        >
          <UserCircle2 size={30} className="text-white" />
        </a>
      )}

      {/* NOTIFICATION */}
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
            className="text-white transition-colors duration-300 group-hover:text-[#FFD700]"
          />
        </a>
      )}
    </div>
  );
}