// src/components/sections/home/FeaturesSection.jsx
import {
  Users, DollarSign, CalendarDays,
  MessageSquare, BarChart3, ShieldCheck,
} from 'lucide-react'

const features = [
  {
    icon: Users,
    title: 'Gestão de Membros',
    description: 'Acompanhe pessoas, histórico, ministérios e participação em um único lugar.',
    tag: 'Pessoas',
    accent: 'ecclesia',
  },
  {
    icon: DollarSign,
    title: 'Dízimos e Ofertas',
    description: 'Organize entradas financeiras com transparência e acompanhamento.',
    tag: 'Financeiro',
    accent: 'gold',
  },
  {
    icon: CalendarDays,
    title: 'Agenda e Eventos',
    description: 'Cultos, encontros e atividades organizados sem desencontros.',
    tag: 'Organização',
    accent: 'ecclesia',
  },
  {
    icon: MessageSquare,
    title: 'Comunicação',
    description: 'Envie comunicados para grupos específicos sem ruído.',
    tag: 'Conexão',
    accent: 'gold',
  },
  {
    icon: BarChart3,
    title: 'Relatórios',
    description: 'Indicadores claros para apoiar decisões da liderança.',
    tag: 'Inteligência',
    accent: 'ecclesia',
  },
  {
    icon: ShieldCheck,
    title: 'Permissões',
    description: 'Cada equipe acessa apenas o que precisa.',
    tag: 'Segurança',
    accent: 'gold',
  },
]

export default function FeaturesSection() {
  return (
    <section
      className="relative overflow-hidden px-6 py-28"
      style={{
        background: `
          radial-gradient(ellipse at 70% 0%, rgba(103,61,230,0.12) 0%, transparent 50%),
          radial-gradient(ellipse at 10% 100%, rgba(224,160,32,0.08) 0%, transparent 50%),
          #0c0620
        `,
      }}
    >
      {/* Linha decorativa topo */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-[600px]"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(103,61,230,0.5), rgba(224,160,32,0.4), transparent)' }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <span
            className="inline-block rounded-full border border-gold-500/30 bg-gold-500/10 px-5 py-2 text-[11px] font-bold uppercase tracking-[0.28em] text-gold-400 mb-8"
          >
            Plataforma ministerial completa
          </span>

          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] text-white"
            style={{ fontFamily: 'var(--font-ecclesia)' }}
          >
            Uma única plataforma.
            <br />
            <span
              style={{
                background: 'linear-gradient(90deg, #8b63ff, #e0a020)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Toda a operação da igreja.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-white/55">
            Organize pessoas, finanças, eventos e comunicação em um ambiente
            construído para apoiar o crescimento do ministério.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {features.map(({ icon: Icon, title, description, tag, accent }) => {
            const isGold = accent === 'gold'
            return (
              <div
                key={title}
                className="group relative overflow-hidden rounded-2xl border border-white/8 bg-white/[0.04] p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-ecclesia-500/25 hover:bg-white/[0.07]"
              >
                {/* Linha topo animada */}
                <div
                  className="absolute top-0 left-0 h-[2px] w-0 transition-all duration-700 group-hover:w-full"
                  style={{
                    background: isGold
                      ? 'linear-gradient(90deg, #e0a020, #f5c842)'
                      : 'linear-gradient(90deg, #673de6, #8b63ff)',
                  }}
                />

                {/* Tag */}
                <span
                  className="inline-block rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.20em] mb-6"
                  style={{
                    background: isGold ? 'rgba(224,160,32,0.12)' : 'rgba(103,61,230,0.12)',
                    border: `1px solid ${isGold ? 'rgba(224,160,32,0.25)' : 'rgba(103,61,230,0.25)'}`,
                    color: isGold ? '#f5c842' : '#b09aff',
                  }}
                >
                  {tag}
                </span>

                {/* Ícone */}
                <div
                  className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: isGold
                      ? 'linear-gradient(135deg, rgba(224,160,32,0.15), rgba(245,200,66,0.08))'
                      : 'linear-gradient(135deg, rgba(103,61,230,0.20), rgba(139,99,255,0.10))',
                    border: `1px solid ${isGold ? 'rgba(224,160,32,0.20)' : 'rgba(103,61,230,0.20)'}`,
                  }}
                >
                  <Icon size={24} style={{ color: isGold ? '#f5c842' : '#8b63ff' }} />
                </div>

                <h3
                  className="mb-3 text-xl font-bold text-white"
                  style={{ fontFamily: 'var(--font-ecclesia)' }}
                >
                  {title}
                </h3>

                <p className="text-sm leading-relaxed text-white/50">{description}</p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Linha decorativa base */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-[600px]"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(224,160,32,0.3), rgba(103,61,230,0.4), transparent)' }}
      />
    </section>
  )
}