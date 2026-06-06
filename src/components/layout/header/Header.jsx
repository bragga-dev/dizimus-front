import { useEffect, useState } from "react";

import { Menu, X } from "lucide-react";

import HeaderActions from "./HeaderActions";
import HeaderLogo from "./HeaderLogo";
import HeaderNav from "./HeaderNav";
import HeaderSearch from "./HeaderSearch";
import MobileMenu from "./MobileMenu";

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
          <HeaderLogo />
          <HeaderNav />
        </div>

        {/* RIGHT */}
        <div className="hidden items-center gap-3 lg:flex">
          <HeaderSearch />
          <HeaderActions isAuthenticated={isAuthenticated} />
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
      {mobileOpen && <MobileMenu />}
    </header>
  );
}