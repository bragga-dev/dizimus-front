import { ArrowRight, Shield, Cloud, Headphones } from 'lucide-react'

export default function Hero() {
  return (
    <section className="bg-dizimus-800 pt-16 overflow-hidden relative min-h-screen flex flex-col">
      {/* Church illustration */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 pointer-events-none hidden lg:block">
        <svg viewBox="0 0 300 600" fill="none" className="h-full w-full">
          <rect x="80" y="250" width="140" height="200" stroke="white" strokeWidth="2"/>
          <polygon points="150,80 50,250 250,250" stroke="white" strokeWidth="2" fill="none"/>
          <line x1="150" y1="80" x2="150" y2="50" stroke="white" strokeWidth="3"/>
          <line x1="135" y1="65" x2="165" y2="65" stroke="white" strokeWidth="3"/>
          <rect x="115" y="350" width="70" height="100" stroke="white" strokeWidth="1.5" fill="none"/>
          <rect x="90" y="290" width="35" height="45" stroke="white" strokeWidth="1.5" fill="none"/>
          <rect x="175" y="290" width="35" height="45" stroke="white" strokeWidth="1.5" fill="none"/>
          <path d="M50 450 Q80 440 110 450 Q140 460 170 450 Q200 440 230 450 Q260 460 290 450" stroke="white" strokeWidth="1.5" fill="none"/>
          <ellipse cx="80" cy="440" rx="20" ry="30" stroke="white" strokeWidth="1" fill="none"/>
          <ellipse cx="220" cy="440" rx="20" ry="30" stroke="white" strokeWidth="1" fill="none"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 flex-1 flex items-center w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full py-20">

          {/* Left */}
          <div>
            <span className="inline-flex items-center gap-1.5 bg-white/10 text-white/80 text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
              Feito para igrejas
            </span>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight mb-6">
              Menos burocracia,{' '}
              <span className="block">mais tempo para o que</span>
              <span className="text-gold-500">realmente importa.</span>
            </h1>
            <p className="text-white/60 text-base leading-relaxed mb-10 max-w-lg">
              O Dizimus é o sistema completo para igrejas que desejam gerenciar dízimos, ofertas, membros e muito mais com transparência, segurança e excelência.
            </p>

            <div className="flex flex-wrap gap-3 mb-14">
              <a href="#" className="inline-flex items-center gap-2 bg-dizimus-600 hover:bg-dizimus-500 text-white font-semibold px-7 py-3.5 rounded-lg transition-all hover:shadow-xl hover:shadow-dizimus-600/40 active:scale-95">
                Agendar demonstração
                <ArrowRight size={16} />
              </a>
              <a href="#" className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white font-semibold px-7 py-3.5 rounded-lg transition-all hover:bg-white/5">
                Conhecer recursos
              </a>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { icon: Shield, label: 'Seguro e confiável', desc: 'Seus dados protegidos sempre.' },
                { icon: Cloud, label: 'Acesse de qualquer lugar', desc: 'Na nuvem, disponível onde você estiver.' },
                { icon: Headphones, label: 'Suporte dedicado', desc: 'Time pronto para ajudar sua igreja crescer.' },
              ].map(({ icon: Icon, label, desc }) => (
                <div key={label}>
                  <div className="w-9 h-9 bg-white/10 rounded-xl flex items-center justify-center mb-2">
                    <Icon size={16} className="text-white/70" />
                  </div>
                  <p className="text-white text-xs font-semibold leading-snug">{label}</p>
                  <p className="text-white/40 text-xs mt-0.5 leading-snug">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Dashboard mockup */}
          <div className="relative hidden lg:block">
            <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-3 shadow-2xl">
              {/* Browser bar */}
              <div className="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-2 mb-3">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
                </div>
                <div className="flex-1 mx-3 bg-white/10 rounded h-4 text-[9px] text-white/40 flex items-center px-2">app.dizimus.com.br</div>
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded-full bg-dizimus-500 flex items-center justify-center text-[7px] font-bold text-white">PL</div>
                  <div className="text-[8px] text-white/60 leading-tight">
                    <div className="font-semibold text-white/80">Pb. Pastor Lucas</div>
                    <div>Igreja Esperança</div>
                  </div>
                </div>
              </div>

              {/* Dashboard */}
              <div className="flex rounded-xl overflow-hidden border border-white/10">
                {/* Sidebar */}
                <div className="w-32 bg-dizimus-900 p-2.5 flex flex-col gap-0.5">
                  <div className="flex items-center gap-1.5 px-2 py-1.5 mb-2">
                    <div className="w-4 h-4 bg-gold-500/20 rounded flex items-center justify-center">
                      <span className="text-[8px]">⛪</span>
                    </div>
                    <span className="text-white text-[9px] font-bold">dizimus</span>
                  </div>
                  {['Início', 'Dízimos e Ofertas', 'Membros', 'Batizados', 'Casamentos', 'Eventos', 'Agenda', 'Relatórios', 'Configurações'].map((item, i) => (
                    <div key={item} className={`px-2 py-1 rounded text-[8px] flex items-center gap-1.5 ${i === 0 ? 'bg-dizimus-600 text-white font-semibold' : 'text-white/40'}`}>
                      <div className="w-1 h-1 rounded-full bg-current opacity-60" />
                      {item}
                    </div>
                  ))}
                </div>

                {/* Content */}
                <div className="flex-1 p-3 bg-gray-50">
                  <p className="text-[9px] font-bold text-dizimus-900 mb-2">Resumo Geral</p>
                  <div className="grid grid-cols-4 gap-1.5 mb-3">
                    {[
                      { label: 'Dízimos (Mês)', value: 'R$ 45.231', change: '+12%', green: true },
                      { label: 'Ofertas (Mês)', value: 'R$ 12.980', change: '+8%', green: true },
                      { label: 'Membros', value: '512', change: '+23', green: false },
                      { label: 'Batizados', value: '28', change: '+5', green: false },
                    ].map(k => (
                      <div key={k.label} className="bg-white rounded-md p-1.5 shadow-sm">
                        <p className="text-[6px] text-gray-400 mb-0.5">{k.label}</p>
                        <p className="text-[8px] font-bold text-dizimus-900">{k.value}</p>
                        <p className={`text-[6px] font-medium ${k.green ? 'text-green-500' : 'text-dizimus-500'}`}>{k.change}</p>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-1.5">
                    <div className="bg-white rounded-md p-2 shadow-sm">
                      <p className="text-[7px] font-semibold text-gray-600 mb-1.5">Arrecadações</p>
                      <svg viewBox="0 0 110 40" className="w-full">
                        <polyline points="5,32 18,24 30,26 44,18 56,14 70,8 84,6 98,3" fill="none" stroke="#6B42CC" strokeWidth="1.5" strokeLinecap="round"/>
                        <polyline points="5,36 18,30 30,32 44,28 56,24 70,22 84,20 98,17" fill="none" stroke="#F5B800" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <div className="bg-white rounded-md p-2 shadow-sm">
                      <p className="text-[7px] font-semibold text-gray-600 mb-1.5">Próximos Eventos</p>
                      {['Batizado', 'Casamento', 'Festa da Família'].map((ev, i) => (
                        <div key={ev} className="flex items-center gap-1 py-0.5 border-b border-gray-50 last:border-0">
                          <div className="w-1 h-1 rounded-full bg-dizimus-500" />
                          <span className="text-[6px] text-gray-600 flex-1">{ev}</span>
                          <span className="text-[6px] text-gray-400">{['24/05', '06/06', '15/06'][i]}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-8 -right-6 w-40 bg-white rounded-2xl shadow-2xl border border-gray-100 p-3">
              <p className="text-[7px] text-gray-400 mb-0.5">Dízimos (Mês)</p>
              <p className="text-xs font-bold text-dizimus-900">R$ 45.231,00</p>
              <p className="text-[7px] text-green-500 font-medium">+12% vs mês anterior</p>
              <div className="mt-2 pt-2 border-t border-gray-100">
                <p className="text-[7px] text-gray-400 mb-0.5">Membros</p>
                <p className="text-xs font-bold text-dizimus-900">512</p>
                <p className="text-[7px] text-dizimus-500 font-medium">+23 este mês</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave */}
      <div className="w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60L1440 60L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20L0 60Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}
