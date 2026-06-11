// home/BenefitsSection.jsx - Nova seção de benefícios
import { Clock, Users, TrendingUp, Heart, Zap, Target } from 'lucide-react'

const benefits = [
  {
    icon: Clock,
    title: 'Economia de tempo',
    description: 'Reduza em até 70% o tempo gasto com tarefas administrativas.',
    stat: '-70%',
  },
  {
    icon: Users,
    title: 'Engajamento da comunidade',
    description: 'Aumente a participação nos eventos e ministérios.',
    stat: '+45%',
  },
  {
    icon: TrendingUp,
    title: 'Transparência financeira',
    description: 'Prestação de contas clara para liderança e membros.',
    stat: '100%',
  },
  {
    icon: Heart,
    title: 'Foco no ministério',
    description: 'Libere sua equipe para o que realmente importa.',
    stat: '2x',
  },
  {
    icon: Zap,
    title: 'Automação inteligente',
    description: 'Processos automatizados que funcionam sozinhos.',
    stat: '24/7',
  },
  {
    icon: Target,
    title: 'Decisões baseadas em dados',
    description: 'Relatórios estratégicos para crescimento saudável.',
    stat: 'Real-time',
  },
]

export default function BenefitsSection() {
  return (
    <section className="relative py-28 px-6 overflow-hidden bg-gradient-to-b from-[#0A0F14] to-[#05080C]">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#2A8A61] rounded-full blur-[180px] opacity-[0.08]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#2A8A61]/10 border border-[#2A8A61]/20 text-[#2A8A61] text-xs font-bold uppercase tracking-wider mb-5">
            Resultados reais
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-5">
            Números que
            <span className="bg-gradient-to-r from-[#2A8A61] to-[#D4AF37] bg-clip-text text-transparent"> transformam</span>
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Igrejas que usam Ecclesia experimentam crescimento saudável e gestão eficiente
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map(({ icon: Icon, title, description, stat }, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent p-8 transition-all duration-500 hover:border-[#2A8A61]/30 hover:-translate-y-2"
            >
              {/* Stat badge */}
              <div className="absolute top-6 right-6 text-2xl font-black bg-gradient-to-r from-[#2A8A61] to-[#D4AF37] bg-clip-text text-transparent">
                {stat}
              </div>

              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-[#2A8A61]/10 border border-[#2A8A61]/20 flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:bg-[#2A8A61]/20">
                <Icon className="w-7 h-7 text-[#2A8A61]" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
              <p className="text-white/40 leading-relaxed">{description}</p>

              {/* Hover line */}
              <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#2A8A61]/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}