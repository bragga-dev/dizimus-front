// home/PricingSection.jsx - Seção de preços
import { Check, Star } from 'lucide-react'

const plans = [
  {
    name: 'Grátis',
    price: 'R$ 0',
    period: '/mês',
    description: 'Para igrejas que estão começando',
    features: [
      'Até 100 membros',
      'Gestão básica de membros',
      'Agenda de eventos',
      'Comunicados por e-mail',
      'Suporte por e-mail',
    ],
    featured: false,
    cta: 'Começar grátis',
    buttonClass: 'border-2 border-[#2A8A61] text-[#2A8A61] hover:bg-[#2A8A61]/5',
  },
  {
    name: 'Profissional',
    price: 'R$ 97',
    period: '/mês',
    description: 'Para igrejas em crescimento',
    features: [
      'Membros ilimitados',
      'Gestão financeira completa',
      'Múltiplos ministérios',
      'Comunicados por WhatsApp',
      'Relatórios avançados',
      'Suporte prioritário',
      'App mobile',
    ],
    featured: true,
    cta: 'Testar 7 dias grátis',
    buttonClass: 'bg-gradient-to-r from-[#2A8A61] to-[#1E6B4B] text-white shadow-lg shadow-[#2A8A61]/25 hover:shadow-xl hover:scale-105',
  },
  {
    name: 'Igreja+',
    price: 'Sob consulta',
    period: '',
    description: 'Para denominações e múltiplas unidades',
    features: [
      'Múltiplas igrejas',
      'Dashboard unificado',
      'Relatórios consolidados',
      'API personalizada',
      'Treinamento exclusivo',
      'Suporte 24/7',
      'SLA garantido',
    ],
    featured: false,
    cta: 'Falar com vendas',
    buttonClass: 'border-2 border-white/20 text-white hover:bg-white/5',
  },
]

export default function PricingSection() {
  return (
    <section className="py-28 px-6 bg-gradient-to-b from-[#F8F9FA] to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#2A8A61]/10 text-[#2A8A61] text-xs font-bold uppercase tracking-wider mb-5">
            Planos e Preços
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#1A1A2E] mb-5">
            Para igrejas de{' '}
            <span className="bg-gradient-to-r from-[#2A8A61] to-[#1E6B4B] bg-clip-text text-transparent">
              todos os tamanhos
            </span>
          </h2>
          <p className="text-lg text-[#5A5A6E] max-w-2xl mx-auto">
            Comece grátis, cresça com a gente. Pague apenas pelo que precisa.
          </p>
        </div>

        {/* Plans grid */}
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`
                relative rounded-2xl transition-all duration-500
                ${plan.featured 
                  ? 'bg-gradient-to-b from-white to-[#F8FAF9] shadow-2xl scale-105 border border-[#2A8A61]/20' 
                  : 'bg-white shadow-xl border border-gray-100 hover:shadow-2xl hover:-translate-y-1'
                }
              `}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#2A8A61] to-[#D4AF37] text-white text-xs font-bold">
                  MAIS ESCOLHIDO
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-black text-[#1A1A2E] mb-2">{plan.name}</h3>
                <p className="text-sm text-[#8A8A9E] mb-6">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-4xl font-black text-[#1A1A2E]">{plan.price}</span>
                  <span className="text-[#8A8A9E]">{plan.period}</span>
                </div>

                <a
                  href="#"
                  className={`
                    w-full block text-center py-3 px-4 rounded-xl font-semibold transition-all duration-300
                    ${plan.buttonClass}
                  `}
                >
                  {plan.cta}
                </a>

                <hr className="my-6 border-gray-100" />

                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-[#5A5A6E]">
                      <Check className="w-4 h-4 text-[#2A8A61]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}