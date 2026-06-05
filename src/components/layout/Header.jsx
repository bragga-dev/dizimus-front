import { useEffect, useState } from "react";

import { LogIn, Menu, Search, User, UserCircle2, X, Bell } from "lucide-react";

import Logo from "../ui/logo/Logo";

const navLinks = ["Início", "Sobre", "Serviços", "Contato"];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isAuthenticated = false;

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`
        ${
          scrolled
            ? `
            border-b border-[#E0B14A]/10
            bg-[#2E004F]/95
            shadow-[0_10px_30px_rgba(46,0,79,0.35)]
            backdrop-blur-xl
          `
          : `
            bg-[#2E004F]
          `
        }
      `}
    >
      <div
        className="
          mx-auto
          flex h-20 max-w-7xl
          items-center justify-between
          px-6
        "
      >
        {/* LEFT */}
        <div className="flex items-center gap-14">
          {/* LOGO */}
          <a
            href="/"
            className="
              shrink-0
              transition-all duration-300
              hover:opacity-90
            "
          >
            <Logo />
          </a>

          {/* NAV */}
          <nav
            className="
              hidden 
              items-center
              gap-2
              font-navbar
              lg:flex
              
            "
          >
            {navLinks.map((item) => (
              <a
                key={item}
                href="#"
                className="
                  relative

                  rounded-xl
                  px-4 py-2.5

                  text-[15px]
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
                {item}
              </a>
            ))}
          </nav>
        </div>

        {/* RIGHT */}
        <div
          className="
            hidden items-center gap-3
            lg:flex
          "
        >
          {/* SEARCH */}
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

        
          {/* LOGIN */}
          <button
            className="
              flex items-center gap-2

              rounded-xl

              px-4 py-3

              text-sm
              font-semibold
              text-[#E2E8F0]

              relative

            rounded-xl
            px-4 py-2.5

            text-[15px]
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
            <Bell size={30} className="text-white transition-colors duration-300 group-hover:text-[#E0B14A]" />
          </button>      
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="
            flex h-11 w-11
            items-center justify-center

            rounded-xl

            border border-[#1E293B]

            bg-[#111827]

            text-white

            transition-all duration-300

            hover:bg-[#172033]

            lg:hidden
          "
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
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

                  text-sm
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
              <a
                key={item}
                href="#"
                className="
                  rounded-xl
                  font-navbar
                  px-4 py-4
                  px-4
                  py-2.5

                  text-[15px]
                  font-medium

                  text-sm
                  font-medium
                  text-[#CBD5E1]

                  transition-all duration-300

                  hover:bg-white/[0.05]
                  hover:text-white
                "
              >
                {item}
              </a>
            ))}

            {/* LOGIN */}
            <button
              className="
                mt-4

                flex items-center justify-center gap-2
                font-navbar   {/* ← adicionar */}
                rounded-xl

                border border-[#1E293B]

                bg-[#111827]

                px-4 py-4

                text-sm
                font-semibold
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
      )}
    </header>
  );
}
