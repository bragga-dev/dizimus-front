import { ArrowRight, Facebook, Youtube, MessageCircle } from "lucide-react";
import Logo from "../ui/logo/Logo";

const LinkedinIcon = ({ size = 16, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const socials = [
  { title: "Facebook",  icon: Facebook,      href: "#" },
  { title: "LinkedIn",  icon: LinkedinIcon,  href: "#" },
  { title: "YouTube",   icon: Youtube,       href: "#" },
  { title: "WhatsApp",  icon: MessageCircle, href: "#" },
];

const cols = [
  {
    title: "Produto",
    links: ["Recursos", "Planos", "Integrações", "Atualizações", "Roadmap", "API"],
  },
  {
    title: "Empresa",
    links: ["Sobre nós", "Blog", "Cases de sucesso", "Trabalhe conosco", "Contato", "Imprensa"],
  },
  {
    title: "Suporte",
    links: ["Central de ajuda", "Tutoriais em vídeo", "Documentação", "Status do sistema", "Comunidade", "Solicitar demo"],
  },
];

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* ── Mesma grade de pontos do Hero ─────────────────────────── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
        aria-hidden
      />

      {/* ── Glow orbs — mesma lógica do Hero ─────────────────────── */}
      <div className="pointer-events-none absolute right-1/4 top-0 h-[500px] w-[500px] rounded-full bg-ecclesia-500 opacity-[0.10] blur-[130px]" aria-hidden />
      <div className="pointer-events-none absolute left-0 bottom-0 h-[400px] w-[400px] rounded-full bg-ecclesia-700 opacity-[0.13] blur-[110px]" aria-hidden />

      {/* ── Divisor de entrada — eco do header ────────────────────── */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#E0B14A]/40 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* ════════════════════════════════════════════════════════════
            CORPO PRINCIPAL
        ═════════════════════════════════════════════════════════════ */}
        <div className="grid gap-16 py-24 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">

          {/* ── COLUNA DA MARCA ──────────────────────────────────── */}
          <div className="flex flex-col gap-8">

            {/* Logo — idêntico ao header */}
            <a href="/" className="inline-block w-fit transition-opacity hover:opacity-80">
              <Logo />
            </a>

            {/* Tagline no mesmo espírito da headline do Hero */}
            <p
              className="text-lg leading-relaxed text-white/50 max-w-[300px]"
              style={{ fontFamily: "var(--font-navbar)" }}
            >
              Sistema completo de gestão para igrejas que desejam
              excelência e mais tempo para servir.
            </p>

            {/* Redes — hover dourado, igual ao header */}
            <div className="flex gap-3">
              {socials.map(({ title, icon: Icon, href }) => (
                <a
                  key={title}
                  href={href}
                  title={title}
                  className="
                    flex h-11 w-11 items-center justify-center
                    rounded-xl border border-white/10 bg-white/[0.04]
                    text-white/40
                    transition-all duration-300
                    hover:border-[#E0B14A]/30
                    hover:bg-[#E0B14A]/8
                    hover:text-[#E0B14A]
                  "
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>

            {/* Versículo — âncora de identidade, mesmo tom sutil do Hero */}
            <blockquote className="border-l-2 border-[#E0B14A]/25 pl-5 max-w-[260px]">
              <p
                className="text-sm italic leading-relaxed text-white/25"
                style={{ fontFamily: "var(--font-navbar)" }}
              >
                "E tudo que fizerdes, fazei-o de todo o coração,
                como para o Senhor."
              </p>
              <cite className="mt-2 block not-italic text-xs text-white/15">
                — Colossenses 3:23
              </cite>
            </blockquote>

          </div>

          {/* ── 3 COLUNAS DE LINKS ──────────────────────────────── */}
          {cols.map(({ title, links }) => (
            <div key={title} className="flex flex-col gap-7">

              <h4
                className="text-xs font-semibold uppercase tracking-[0.22em] text-white/40"
                style={{ fontFamily: "var(--font-ecclesia)" }}
              >
                {title}
              </h4>

              <ul className="flex flex-col gap-4">
                {links.map((label) => (
                  <li key={label}>
                    <a
                      href="#"
                      className="
                        relative text-base text-white/35
                        font-navbar
                        transition-colors duration-300
                        hover:text-white/80
                        after:absolute after:-bottom-0.5 after:left-0
                        after:h-px after:w-0 after:bg-[#E0B14A]
                        after:transition-all after:duration-300
                        hover:after:w-full
                      "
                      style={{ fontFamily: "var(--font-navbar)" }}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>

            </div>
          ))}

        </div>

        {/* ════════════════════════════════════════════════════════════
            BOTTOM BAR
        ═════════════════════════════════════════════════════════════ */}
        <div
          className="
            border-t border-white/[0.06]
            py-9
            flex flex-col gap-4
            sm:flex-row sm:items-center sm:justify-between
          "
        >
          <span className="text-sm text-white/20">
            © 2026 Ecclesia · Todos os direitos reservados
          </span>

          <nav className="flex flex-wrap gap-7">
            {["Política de Privacidade", "Termos de Uso", "Cookies"].map((item) => (
              <a
                key={item}
                href="#"
                className="
                  relative text-sm text-white/20
                  transition-colors duration-300 hover:text-white/50
                  after:absolute after:-bottom-0.5 after:left-0
                  after:h-px after:w-0 after:bg-[#E0B14A]/50
                  after:transition-all after:duration-300
                  hover:after:w-full
                "
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

      </div>
    </footer>
  );
}