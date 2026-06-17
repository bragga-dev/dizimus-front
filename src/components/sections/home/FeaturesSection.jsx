import {
  Users,
  DollarSign,
  CalendarDays,
  MessageSquare,
  BarChart3,
  ShieldCheck,
} from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Gestão de Membros",
    description:
      "Acompanhe pessoas, histórico, ministérios e participação em um único lugar.",
    tag: "Pessoas",
  },

  {
    icon: DollarSign,
    title: "Dízimos e Ofertas",
    description:
      "Organize entradas financeiras com transparência e acompanhamento.",
    tag: "Financeiro",
  },

  {
    icon: CalendarDays,
    title: "Agenda e Eventos",
    description:
      "Cultos, encontros e atividades organizados sem desencontros.",
    tag: "Organização",
  },

  {
    icon: MessageSquare,
    title: "Comunicação",
    description:
      "Envie comunicados para grupos específicos sem ruído.",
    tag: "Conexão",
  },

  {
    icon: BarChart3,
    title: "Relatórios",
    description:
      "Indicadores claros para apoiar decisões da liderança.",
    tag: "Inteligência",
  },

  {
    icon: ShieldCheck,
    title: "Permissões",
    description:
      "Cada equipe acessa apenas o que precisa.",
    tag: "Segurança",
  },
]

export default function FeaturesSection() {
  return (
    <section
      className="
        relative
        overflow-hidden
        flex
        items-center
        justify-center
        py-28
        px-6
      "
      style={{
        background: `
          radial-gradient(circle at right top, rgba(215,179,106,.10), transparent 35%),
          radial-gradient(circle at left center, rgba(111,182,138,.08), transparent 40%),
          linear-gradient(180deg,#F6F4ED,#F1EEE5)
        `,
      }}
    >
      {/* brilho */}
      <div
        className="
          absolute left-1/2 top-0
          h-[260px] w-[900px]
          -translate-x-1/2
          rounded-full blur-[140px]
          opacity-[0.06]
        "
        style={{
          background: "radial-gradient(circle,#D7B36A,transparent)",
        }}
      />

      {/* Conteúdo centralizado */}
      <div className="relative z-10 mx-auto max-w-7xl text-center">
        
        {/* HEADER */}
        <div className="mb-20 max-w-4xl mx-auto">
          <span
            className="
              inline-flex rounded-full border border-[#D7B36A]/20
              bg-white/70 px-5 py-2
              text-[11px] font-semibold uppercase
              tracking-[0.30em] text-[#8A7350]
            "
          >
            Plataforma ministerial completa
          </span>

          <h2
            className="
              mt-8 text-5xl lg:text-6xl
              font-black leading-[1.1]
              text-[#18241F]
            "
            style={{ fontFamily: "var(--font-ecclesia)" }}
          >
            Uma única plataforma.
            <br />
            <span
              style={{
                background: "linear-gradient(90deg,#315C4B,#D7B36A)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Toda a operação da igreja.
            </span>
          </h2>

          <p
            className="
              mt-8 max-w-2xl mx-auto
              text-lg leading-relaxed
              text-[#59645D]
            "
          >
            Organize pessoas, finanças, eventos e comunicação em um ambiente construído para apoiar o crescimento do ministério.
          </p>
        </div>

        {/* GRID */}
        <div
          className="
            grid gap-7
            md:grid-cols-2 xl:grid-cols-3
            mx-auto max-w-6xl
          "
        >
          {features.map(({ icon: Icon, title, description, tag }) => (
            <div
              key={title}
              className="
                group relative overflow-hidden
                rounded-[34px] border border-[#E7E1D1]
                bg-white/82 p-10 backdrop-blur-xl
                transition-all duration-500
                hover:-translate-y-2
                hover:border-[#D7B36A]/40
                hover:shadow-[0_40px_80px_rgba(31,44,38,.10)]
              "
            >
              <div
                className="
                  absolute left-0 top-0 h-1 w-0
                  bg-gradient-to-r from-[#6FB68A] to-[#D7B36A]
                  transition-all duration-700
                  group-hover:w-full
                "
              />

              {/* TAG */}
              <span
                className="
                  inline-flex rounded-full bg-[#F4F1E8]
                  px-3 py-1 text-[10px] font-bold uppercase
                  tracking-[0.20em] text-[#8B7857]
                "
              >
                {tag}
              </span>

              {/* ICON */}
              <div
                className="
                  mt-7 mb-8 flex h-16 w-16
                  items-center justify-center
                  rounded-3xl bg-gradient-to-br
                  from-[#F7F2E4] to-[#EEF5F0]
                  transition duration-500
                  group-hover:rotate-3
                  mx-auto
                "
              >
                <Icon size={28} className="text-[#315C4B]" />
              </div>

              <h3
                className="
                  mb-4 text-[28px] font-black text-[#18241F]
                "
                style={{ fontFamily: "var(--font-ecclesia)" }}
              >
                {title}
              </h3>

              <p className="leading-relaxed text-[#626C66]">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
