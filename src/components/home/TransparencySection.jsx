import { ArrowRight, BarChart3, PieChart, FileText } from 'lucide-react'

export default function TransparencySection() {
  return (
    <section className="py-20 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Illustration side */}
          <div className="relative">
            <div className="absolute inset-0 bg-dizimus-900 rounded-3xl" />
            <div className="relative p-10">
              {/* Report card mockup */}
              <div className="bg-white rounded-2xl shadow-2xl p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 bg-gold-500/10 rounded-lg flex items-center justify-center">
                    <FileText size={18} className="text-gold-500" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-dizimus-900">Relatório Financeiro</p>
                    <p className="text-xs text-gray-400">Maio 2024</p>
                  </div>
                  <span className="ml-auto text-xs bg-green-50 text-green-600 font-semibold px-2 py-0.5 rounded-full">+12%</span>
                </div>

                {/* Bar chart mock */}
                <div className="mb-5">
                  <div className="flex items-end gap-2 h-24">
                    {[40, 65, 50, 80, 60, 90, 75].map((h, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-1">
                        <div
                          className="w-full rounded-t-md"
                          style={{
                            height: `${h}%`,
                            background: i === 5 ? '#7B61D6' : i % 2 === 0 ? '#D4AF37' : '#4A2D7A',
                            opacity: i === 5 ? 1 : 0.5 + i * 0.07,
                          }}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-2 mt-1">
                    {['J', 'F', 'M', 'A', 'M', 'J', 'J'].map((m) => (
                      <div key={m} className="flex-1 text-center text-[9px] text-gray-400">{m}</div>
                    ))}
                  </div>
                </div>

                {/* Bottom stats */}
                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-gray-100">
                  {[
                    { label: 'Total Dízimos', value: 'R$ 45.231', icon: BarChart3 },
                    { label: 'Ofertas', value: 'R$ 12.980', icon: PieChart },
                    { label: 'Membros', value: '512', icon: FileText },
                  ].map(({ label, value, icon: Icon }) => (
                    <div key={label} className="text-center">
                      <Icon size={14} className="text-dizimus-500 mx-auto mb-1" />
                      <p className="text-[10px] text-gray-400">{label}</p>
                      <p className="text-xs font-bold text-dizimus-900">{value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Shield badge */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gold-500 rounded-2xl flex flex-col items-center justify-center shadow-xl">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M16 3L4 8V16C4 22.6 9.4 28.6 16 30C22.6 28.6 28 22.6 28 16V8L16 3Z" fill="white" opacity="0.3"/>
                  <path d="M16 3L4 8V16C4 22.6 9.4 28.6 16 30C22.6 28.6 28 22.6 28 16V8L16 3Z" stroke="white" strokeWidth="2" fill="none"/>
                  <polyline points="11,16 14,19 21,12" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-[8px] text-white font-bold mt-0.5">Seguro</span>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div>
            <span className="text-xs font-semibold text-dizimus-500 uppercase tracking-widest">Finanças</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-dizimus-900 mt-3 mb-5 leading-tight">
              Transparência que fortalece a{' '}
              <span className="text-gold-500">confiança.</span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Relatórios claros e detalhados para uma gestão financeira responsável e transparente. Mostre à sua
              congregação que cada real está sendo bem administrado.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                'Relatórios mensais e anuais completos',
                'Exportação em PDF para compartilhar com a liderança',
                'Gráficos de evolução de dízimos e ofertas',
                'Controle por categoria e destinação',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                  <span className="w-5 h-5 mt-0.5 bg-dizimus-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <polyline points="2,5 4,7 8,3" stroke="#7B61D6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="#"
              className="inline-flex items-center gap-2 border-2 border-dizimus-900 text-dizimus-900 font-semibold px-6 py-3 rounded-lg hover:bg-dizimus-900 hover:text-white transition-all group"
            >
              Conhecer relatórios
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
