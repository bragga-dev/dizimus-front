import { Search } from "lucide-react";

export default function HeaderSearch() {
  return (
    <div
      className="
        flex items-center

        overflow-hidden

        rounded-2xl

        border border-[#1E293B]

        bg-[#111827]

        transition-all duration-300

        focus-within:border-[#6D5EF5]
        focus-within:shadow-[0_0_0_4px_rgba(109,94,245,0.15)]
      "
    >
      {/* INPUT */}
      <div
        className="
          flex items-center gap-3
          px-4
        "
      >
        <Search size={18} className="text-[#64748B]" />

        <input
          type="text"
          placeholder="Buscar..."
          className="
            w-52

            bg-transparent

            py-3

            font-navbar
            text-sm
            font-medium
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

          transition-all duration-300

          hover:brightness-110
        "
      >
        <Search size={18} />
      </button>
    </div>
  );
}