const featureList = [
  'Controle total de dízimos e ofertas',
  'Gestão de membros e ministérios',
  'Agenda de eventos e comunicações',
  'Relatórios inteligentes e personalizáveis',
  'Acesso seguro e permissões por função',
]

export default function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs font-bold text-ecclesia-500 uppercase tracking-widest">Gestão completa</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-ecclesia-900 mt-3 mb-5 leading-tight">
              Tudo o que sua igreja precisa{' '}
              <span className="text-ecclesia-500">em um só lugar.</span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Do controle financeiro ao relacionamento com membros, o ecclesia oferece as ferramentas certas para uma gestão eficiente, transparente e espiritual.
            </p>
            <ul className="space-y-3 mb-10">
              {featureList.map(item => (
                <li key={item} className="flex items-center gap-3 text-sm text-gray-700">
                  <span className="w-5 h-5 bg-ecclesia-500 rounded-full flex items-center justify-center shrink-0">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <polyline points="2,5 4,7 8,3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Dashboard mockup */}
          <div className="relative">
            <div className="absolute -inset-4 bg-ecclesia-50 rounded-3xl" />
            <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
              <div className="bg-ecclesia-900 px-4 py-2.5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-white text-[10px] font-bold">ecclesia</span>
                </div>
                <span className="text-white/50 text-[8px]">Igreja Esperança</span>
              </div>

              <div className="flex">
                <div className="w-28 bg-ecclesia-900 p-2 flex flex-col gap-0.5">
                  {['Início', 'Dízimos e Ofertas', 'Membros', 'Batizados', 'Casamentos', 'Eventos', 'Agenda', 'Relatórios', 'Configurações'].map((item, i) => (
                    <div key={item} className={`px-1.5 py-1 rounded text-[7px] flex items-center gap-1 ${i === 0 ? 'bg-ecclesia-600 text-white' : 'text-white/40'}`}>
                      <div className="w-1 h-1 rounded-full bg-current opacity-50" />
                      {item}
                    </div>
                  ))}
                </div>

                <div className="flex-1 p-3 bg-gray-50">
                  <div className="bg-white rounded-lg p-2.5 mb-2 shadow-sm border border-gray-100">
                    <p className="text-[8px] font-bold text-ecclesia-900 mb-0.5">Saldo em conta</p>
                    <p className="text-sm font-extrabold text-ecclesia-900">R$ 78.420,80</p>
                    <p className="text-[7px] text-green-500 font-medium">+15% vs mês anterior</p>
                  </div>

                  {/* Bar chart */}
                  <div className="bg-white rounded-lg p-2 shadow-sm border border-gray-100 mb-2">
                    <p className="text-[7px] font-semibold text-gray-600 mb-1">Relatório Financeiro</p>
                    <div className="flex items-end gap-1 h-16">
                      {[30, 45, 38, 55, 48, 70, 62].map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-t-sm"
                          style={{
                            height: `${h}%`,
                            backgroundColor: i === 5 ? '#6B42CC' : `rgba(61,34,143,${0.25 + i * 0.08})`
                          }}
                        />
                      ))}
                    </div>
                    <div className="flex gap-1 mt-1">
                      {['J','F','M','A','M','J','J'].map(m => (
                        <div key={m} className="flex-1 text-center text-[6px] text-gray-400">{m}</div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-white rounded-lg p-2 shadow-sm border border-gray-100">
                      <p className="text-[7px] text-gray-400 mb-1">Distribuição</p>
                      <svg viewBox="0 0 40 40" className="w-10 h-10 mx-auto">
                        <circle cx="20" cy="20" r="15" fill="none" stroke="#6B42CC" strokeWidth="8" strokeDasharray="60 35"/>
                        <circle cx="20" cy="20" r="15" fill="none" stroke="#3D228F" strokeWidth="8" strokeDasharray="25 70" strokeDashoffset="-60"/>
                        <circle cx="20" cy="20" r="15" fill="none" stroke="#F5B800" strokeWidth="8" strokeDasharray="10 85" strokeDashoffset="-85"/>
                      </svg>
                    </div>
                    <div className="bg-white rounded-lg p-2 shadow-sm border border-gray-100">
                      <p className="text-[7px] text-gray-400 mb-1">Novos membros</p>
                      <p className="text-lg font-extrabold text-ecclesia-900">23</p>
                      <p className="text-[7px] text-green-500">+15% este mês</p>
                      <div className="flex -space-x-1.5 mt-1">
                        {['JS','MC','PA'].map(i => (
                          <div key={i} className="w-4 h-4 rounded-full bg-ecclesia-200 border border-white flex items-center justify-center text-[5px] font-bold text-ecclesia-700">{i[0]}</div>
                        ))}
                        <div className="w-4 h-4 rounded-full bg-ecclesia-600 border border-white flex items-center justify-center text-[5px] font-bold text-white">+5</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
