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
        relative overflow-hidden
        flex items-center justify-center
        px-6 py-24 lg:py-32
        bg-gradient-to-b from-[#F6F4ED] to-[#EDEBE4]
      "
    >
      <div className="relative z-10 mx-auto max-w-7xl text-center">
        
     <br></br>

        {/* GRID DE FEATURES */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 max-w-6xl mx-auto">
          {features.map(({ icon: Icon, title, description, tag }) => (
            <div
              key={title}
              className="group rounded-2xl border border-[#E7E1D1] bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:border-[#D7B36A]/40 hover:shadow-lg"
            >
              <span className="inline-block rounded-full bg-[#F4F1E8] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#8B7857]">
                {tag}
              </span>

              <div className="mt-6 mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F7F2E4] to-[#EEF5F0] mx-auto group-hover:rotate-3 transition">
                <Icon size={28} className="text-[#315C4B]" />
              </div>

              <h3
                className="mb-3 text-2xl font-black text-[#18241F]"
                style={{ fontFamily: "var(--font-ecclesia)" }}
              >
                {title}
              </h3>

              <p className="text-[#626C66] leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
        <br></br>
      </div>
    </section>
  )
}
