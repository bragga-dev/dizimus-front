import { Facebook, Youtube, MessageCircle, ArrowRight, Mail } from "lucide-react";
import Logo from "../ui/logo/Logo";

// LinkedIn inline (sem dependência de versão do lucide)
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

const links = {
  Produto: ["Recursos", "Planos", "Integrações", "Atualizações", "Roadmap"],
  Empresa: ["Sobre", "Blog", "Contato", "Trabalhe conosco"],
  Suporte: ["Central de ajuda", "Tutoriais", "Status do sistema", "Documentação"],
};

const socials = [
  { title: "Facebook",  icon: Facebook     },
  { title: "LinkedIn",  icon: LinkedinIcon },
  { title: "YouTube",   icon: Youtube      },
  { title: "WhatsApp",  icon: MessageCircle },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ecclesia-950">

      {/* ── Divider com glow dourado — eco do header ── */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />

      {/* Glow ambiental roxo — sutil, vindo de baixo */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 h-[500px] w-[900px] -translate-x-1/2 translate-y-1/3 rounded-full bg-ecclesia-700/15 blur-[140px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* ═══════════════════════════════════════════
            BRAND + LINKS + NEWSLETTER
        ════════════════════════════════════════════ */}
        <div className="grid gap-12 pt-16 pb-14 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1.3fr]">

          {/* MARCA */}
          <div>
            {/* Logo idêntico ao cabeçalho */}
            <a href="/" className="inline-block mb-6 transition-opacity hover:opacity-80">
              <Logo />
            </a>

            <p className="text-sm leading-relaxed text-white/35 mb-8 max-w-[220px]">
              Sistema moderno para igrejas que buscam
              excelência na gestão e mais tempo para servir.
            </p>

            {/* Redes sociais */}
            <div className="flex gap-2 mb-8">
              {socials.map(({ title, icon: Icon }) => (
                <a
                  key={title}
                  href="#"
                  title={title}
                  className="
                    h-9 w-9 rounded-lg
                    border border-white/8
                    bg-white/[0.03]
                    flex items-center justify-center
                    text-white/35
                    hover:border-gold-500/30
                    hover:bg-gold-500/10
                    hover:text-gold-400
                    transition-all duration-200
                  "
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>

            {/* Versículo — âncora de identidade */}
            <blockquote
              className="
                border-l-2 border-ecclesia-500/40
                pl-4
                text-xs italic text-white/25
                leading-relaxed
              "
            >
              "E tudo que fizerdes, fazei-o de todo o coração,
              como para o Senhor."
              <br />
              <cite className="not-italic text-white/20">— Cl 3:23</cite>
            </blockquote>
          </div>

          {/* LINKS */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <h4
                className="mb-5 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/50"
                style={{ fontFamily: "var(--font-ecclesia)" }}
              >
                {group}
              </h4>

              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-white/30 hover:text-white/80 transition-colors duration-150"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* NEWSLETTER */}
          <div>
            <h4
              className="mb-5 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/50"
              style={{ fontFamily: "var(--font-ecclesia)" }}
            >
              Newsletter
            </h4>

            <p className="mb-5 text-sm text-white/30 leading-relaxed">
              Novidades, atualizações e conteúdo para líderes.
            </p>

            <div className="space-y-2.5">
              <div className="relative">
                <Mail
                  size={14}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/20"
                />
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="
                    w-full rounded-xl
                    border border-white/8
                    bg-white/[0.03]
                    pl-9 pr-4 py-3
                    text-sm text-white
                    placeholder:text-white/20
                    outline-none
                    focus:border-ecclesia-500/60
                    focus:bg-ecclesia-900/40
                    transition-all duration-200
                  "
                />
              </div>

              <button
                className="
                  w-full flex items-center justify-center gap-2
                  rounded-xl
                  bg-ecclesia-700 hover:bg-ecclesia-600
                  border border-ecclesia-500/20
                  py-3
                  text-sm font-semibold text-white
                  transition-all duration-200
                "
              >
                Inscrever-se
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            BOTTOM BAR
        ════════════════════════════════════════════ */}
        <div className="border-t border-white/[0.06] py-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          <span className="text-xs text-white/20">
            © 2026 Ecclesia · Todos os direitos reservados
          </span>

          <nav className="flex flex-wrap gap-5">
            {["Privacidade", "Termos de uso", "Cookies"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs text-white/20 hover:text-white/50 transition-colors duration-150"
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