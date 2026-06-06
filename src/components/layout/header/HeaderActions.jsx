import { LogIn, User, UserCircle2, Bell } from "lucide-react";

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
          after:bg-[#E0B14A]

          after:transition-all
          after:duration-300

          hover:text-white
          hover:after:w-[70%]
        "
      >
        <LogIn size={18} />
        Entrar
      </button>

      {/* USER */}
      <button
        className="
          flex h-11 w-11
          items-center justify-center
          rounded-xl
          transition-all duration-300
          [&_svg]:transition-all [&_svg]:duration-300
          hover:[&_svg]:stroke-[#E0B14A]
          hover:bg-[#E0B14A]/10
        "
      >
        {isAuthenticated ? (
          <UserCircle2 size={30} className="text-white" />
        ) : (
          <User size={30} className="text-white" />
        )}
      </button>

      {/* NOTIFICATION */}
      <button
        className="
          flex h-11 w-11
          items-center justify-center
          rounded-xl
          transition-all duration-300
          hover:bg-[#E0B14A]/10
          group
        "
      >
        <Bell
          size={30}
          className="text-white transition-colors duration-300 group-hover:text-[#E0B14A]"
        />
      </button>
    </div>
  );
}