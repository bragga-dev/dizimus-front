import { LogIn, Search } from "lucide-react";

import { navLinks } from "./constants";

export default function MobileMenu() {
  return (
    <div
      className="
        border-t border-white/5

        bg-[#0A0F1C]/95

        px-6 py-6

        backdrop-blur-2xl

        lg:hidden
      "
    >
      {/* SEARCH */}
      <div
        className="
          mb-5

          flex items-center

          overflow-hidden

          rounded-2xl

          border border-[#1E293B]

          bg-[#111827]
        "
      >
        <div
          className="
            flex flex-1 items-center gap-3
            px-4
          "
        >
          <Search size={18} className="text-[#64748B]" />

          <input
            type="text"
            placeholder="Buscar..."
            className="
              flex-1

              bg-transparent

              py-3

              font-navbar
              text-lg
              text-white

              placeholder:text-[#64748B]

              outline-none
            "
          />
        </div>

        {/* BUTTON */}
        <button
          className="
            flex items-center justify-center

            border-l border-[#1E293B]

            bg-gradient-to-r
            from-[#673DE6]
            to-[#8B5CF6]

            px-4 py-3

            text-white
          "
        >
          <Search size={18} />
        </button>
      </div>

      {/* LINKS */}
      <div className="flex flex-col gap-2">
        {navLinks.map((item) => (
          <a key={item.href} href={item.href} className="
            rounded-xl
            px-4 py-3

            font-navbar
            text-lg
            font-medium
            text-[#CBD5E1]

            transition-all duration-300

            hover:bg-[#E0B14A]/10
            hover:text-white
          ">
            {item.label}
          </a>
        ))}
        {/* LOGIN */}
        <button
          className="
            mt-4

            flex items-center justify-center gap-2

            font-navbar
            rounded-xl

            border border-[#1E293B]

            bg-[#111827]

            px-4 py-4

            text-lg
            font-bold
            text-white

            transition-all duration-300

            hover:bg-[#172033]
          "
        >
          <LogIn size={18} />
          Entrar
        </button>
      </div>
    </div>
  );
}
