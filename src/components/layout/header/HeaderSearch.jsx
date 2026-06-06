import { Search } from "lucide-react";

export default function HeaderSearch() {
  return (
    <div
      className="
        flex items-center

        overflow-hidden

        rounded-2xl

        bg-white

        transition-all duration-300

        focus-within:ring-4
        focus-within:ring-[#673DE6]/20
      "
    >
      {/* INPUT */}
      <input
        type="text"
        placeholder="Buscar..."
        className="
          w-80

          bg-transparent

          px-6
          py-4

          font-navbar

          text-lg
          font-bold

          text-[#2E004F]

          placeholder:text-[#6B4B8A]

          outline-none
        "
      />

      {/* BUTTON */}
      <button
        className="
          flex items-center justify-center

          px-6
          py-4

          text-[#2E004F]

          transition-all duration-300

          hover:text-[#673DE6]
        "
      >
        <Search size={24} />
      </button>
    </div>
  );
}