const plans = [
  {
    name: 'Básico',
    sub: 'Para pequenas igrejas',
    price: 59,
    featured: false,
    features: ['Até 200 membros', 'Relatórios básicos', 'Suporte por email'],
  },
  {
    name: 'Crescimento',
    sub: 'Para igrejas que querem avançar',
    price: 129,
    featured: true,
    badge: 'Mais escolhido',
    features: ['Até 1.000 membros', 'Relatórios avançados', 'Suporte prioritário', 'Controle de permissões'],
  },
  {
    name: 'Premium',
    sub: 'Para igrejas em expansão',
    price: 249,
    featured: false,
    features: ['Membros ilimitados', 'Relatórios completos', 'Suporte dedicado', 'Integrações e API'],
  },
]

function Check() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 mt-0.5">
      <circle cx="7" cy="7" r="6" fill="#7B61D6" opacity="0.15"/>
      <polyline points="4,7 6,9 10,5" stroke="#7B61D6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default function Pricing() {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left text */}
          <div>
            <span className="text-xs font-bold text-ecclesia-500 uppercase tracking-widest">Planos que cabem na sua igreja</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-ecclesia-900 mt-3 leading-tight">
              Escolha o plano ideal para{' '}
              <span className="text-ecclesia-500">sua realidade.</span>
            </h2>
          </div>

          {/* Plans */}
          <div className="grid sm:grid-cols-3 gap-4">
            {plans.map(({ name, sub, price, featured, badge, features }) => (
              <div
                key={name}
                className={`relative rounded-2xl p-5 flex flex-col ${
                  featured
                    ? 'bg-ecclesia-700 text-white shadow-2xl shadow-ecclesia-700/30 scale-105'
                    : 'bg-white border border-gray-100 shadow-sm'
                }`}
              >
                {badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold-500 text-ecclesia-900 text-[10px] font-bold px-3 py-0.5 rounded-full whitespace-nowrap">
                    {badge}
                  </span>
                )}
                <div className="mb-4">
                  <p className={`text-xs font-bold uppercase tracking-wide mb-0.5 ${featured ? 'text-white/60' : 'text-gray-400'}`}>{sub}</p>
                  <p className={`text-lg font-extrabold ${featured ? 'text-white' : 'text-ecclesia-900'}`}>{name}</p>
                </div>
                <div className="mb-5">
                  <span className={`text-3xl font-extrabold ${featured ? 'text-white' : 'text-ecclesia-900'}`}>
                    R$ {price}
                  </span>
                  <span className={`text-xs ${featured ? 'text-white/60' : 'text-gray-400'}`}>/mês</span>
                </div>
                <ul className="space-y-2 flex-1 mb-6">
                  {features.map(f => (
                    <li key={f} className="flex items-start gap-2 text-xs">
                      {featured
                        ? <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 mt-0.5"><circle cx="7" cy="7" r="6" fill="white" opacity="0.2"/><polyline points="4,7 6,9 10,5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        : <Check />
                      }
                      <span className={featured ? 'text-white/90' : 'text-gray-600'}>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className={`w-full text-center text-sm font-bold py-2.5 rounded-lg transition-all active:scale-95 ${
                    featured
                      ? 'bg-white text-ecclesia-700 hover:bg-ecclesia-50'
                      : 'border-2 border-ecclesia-200 text-ecclesia-700 hover:border-ecclesia-500 hover:bg-ecclesia-50'
                  }`}
                >
                  Começar agora
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
