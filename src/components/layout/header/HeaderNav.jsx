import { navLinks } from "./constants";

export default function HeaderNav() {
  return (
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
          {item}
        </a>
      ))}
    </nav>
  );
}