import Logo from "../../ui/logo/Logo";

export default function HeaderLogo() {
  return (
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
  );
}