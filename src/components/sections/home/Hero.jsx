import { ArrowRight, Shield, Cloud, Headphones, CheckCircle2 } from 'lucide-react'

const highlights = [
  'Sem cartão de crédito',
  '7 dias grátis',
  'Cancele quando quiser',
]

const stats = [
  { value: '2.000+', label: 'Igrejas ativas' },
  { value: '99,9%', label: 'Disponibilidade' },
  { value: '4.9★', label: 'Avaliação' },
]

export default function Hero() {
  return (
    <section
      className="relative min-h-screen overflow-hidden pt-[72px] flex flex-col"
      style={{ background: 'var(--gradient-hero)' }}
    >
      {/* Grid pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glow orb */}
      <div className="pointer-events-none absolute right-1/4 top-0 h-[500px] w-[500px] rounded-full bg-dizimus-500 opacity-[0.12] blur-[120px]" />
      <div className="pointer-events-none absolute left-0 bottom-1/4 h-[300px] w-[300px] rounded-full bg-dizimus-700 opacity-[0.15] blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl w-full flex-1 flex items-center px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center w-full py-20">

          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-dizimus-400/30 bg-dizimus-500/10 px-4 py-1.5 mb-8">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-400 animate-pulse" />
              <span className="text-xs font-semibold text-dizimus-300 uppercase tracking-widest">
                Plataforma de gestão para igrejas
              </span>
            </div>

            <h1 className="text-4xl lg:text-5xl xl:text-[3.6rem] font-extrabold text-white leading-[1.1] mb-6">
              Menos burocracia,{' '}
              <span className="block">mais tempo para o que</span>
              <span
                className="block"
                style={{
                  background: 'linear-gradient(90deg, #8b63ff, #e0a020)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                realmente importa.
              </span>
            </h1>

            <p className="text-white/60 text-base leading-relaxed mb-8 max-w-lg">
              O Dizimus é o sistema completo para igrejas — controle de dízimos, membros, eventos e muito mais, com transparência, segurança e excelência.
            </p>

            {/* Highlights */}
            <div className="flex flex-wrap gap-4 mb-10">
              {highlights.map(h => (
                <span key={h} className="flex items-center gap-1.5 text-xs text-white/50">
                  <CheckCircle2 size={14} className="text-dizimus-400" />
                  {h}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-14">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-xl bg-dizimus-500 px-7 py-4 text-sm font-bold text-white transition-all hover:bg-dizimus-400 hover:shadow-2xl hover:shadow-dizimus-500/40 active:scale-95"
              >
                Começar gratuitamente
                <ArrowRight size={16} />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-7 py-4 text-sm font-semibold text-white/80 transition-all hover:bg-white/5 hover:border-white/25 hover:text-white"
              >
                Ver demonstração
              </a>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8">
              {stats.map(({ value, label }) => (
                <div key={label}>
                  <p className="text-xl font-extrabold text-white">{value}</p>
                  <p className="text-xs text-white/40">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Dashboard */}
          <div className="relative hidden lg:block">
            {/* Glow behind card */}
            <div className="absolute inset-0 scale-90 rounded-3xl bg-dizimus-500/20 blur-3xl" />

            <div className="relative rounded-2xl border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur-sm">
              {/* Browser bar */}
              <div className="flex items-center gap-2 rounded-xl bg-white/8 px-3 py-2 mb-3">
                <div className="flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
                  <div className="h-2.5 w-2.5 rounded-full bg-green-400/60" />
                </div>
                <div className="mx-3 flex h-5 flex-1 items-center rounded bg-white/8 px-2 text-[9px] text-white/30">
                  app.dizimus.com.br
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-dizimus-500 text-[7px] font-bold text-white">PL</div>
                  <span className="text-[8px] font-semibold text-white/50">Igreja Esperança</span>
                </div>
              </div>

              {/* Dashboard UI */}
              <div className="flex overflow-hidden rounded-xl border border-white/8">
                {/* Sidebar */}
                <div className="w-32 shrink-0 bg-dizimus-950/80 p-2.5">
                  <div className="mb-3 flex items-center gap-1.5 px-2 py-1">
                    <div className="flex h-4 w-4 items-center justify-center rounded bg-dizimus-500/20 text-[8px]">⛪</div>
                    <span className="text-[9px] font-extrabold text-white">dizimus</span>
                  </div>
                  {['Início','Dízimos','Membros','Batizados','Casamentos','Eventos','Relatórios','Config.'].map((item, i) => (
                    <div
                      key={item}
                      className={`flex items-center gap-1.5 rounded px-2 py-1 text-[8px] ${
                        i === 0 ? 'bg-dizimus-500 font-semibold text-white' : 'text-white/35'
                      }`}
                    >
                      <div className="h-1 w-1 rounded-full bg-current opacity-60" />
                      {item}
                    </div>
                  ))}
                </div>

                {/* Main content */}
                <div className="flex-1 bg-gray-50 p-3">
                  <p className="mb-2 text-[9px] font-bold text-dizimus-900">Resumo Geral</p>
                  <div className="mb-3 grid grid-cols-4 gap-1.5">
                    {[
                      { label: 'Dízimos', value: 'R$ 45.231', delta: '+12%' },
                      { label: 'Ofertas', value: 'R$ 12.980', delta: '+8%' },
                      { label: 'Membros', value: '512', delta: '+23' },
                      { label: 'Batizados', value: '28', delta: '+5' },
                    ].map(k => (
                      <div key={k.label} className="rounded-md bg-white p-1.5 shadow-sm">
                        <p className="text-[6px] text-gray-400">{k.label}</p>
                        <p className="text-[8px] font-bold text-dizimus-900">{k.value}</p>
                        <p className="text-[6px] font-semibold text-green-500">{k.delta}</p>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-1.5">
                    <div className="rounded-md bg-white p-2 shadow-sm">
                      <p className="mb-1.5 text-[7px] font-semibold text-gray-500">Arrecadações</p>
                      <svg viewBox="0 0 110 42" className="w-full">
                        <polyline points="5,34 18,26 30,28 44,20 56,16 70,10 84,7 98,4" fill="none" stroke="#673de6" strokeWidth="1.5" strokeLinecap="round"/>
                        <polyline points="5,38 18,32 30,34 44,30 56,26 70,24 84,22 98,19" fill="none" stroke="#e0a020" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <div className="rounded-md bg-white p-2 shadow-sm">
                      <p className="mb-1.5 text-[7px] font-semibold text-gray-500">Próximos Eventos</p>
                      {['Batizado', 'Casamento', 'Festa Família'].map((ev, i) => (
                        <div key={ev} className="flex items-center gap-1 border-b border-gray-50 py-0.5 last:border-0">
                          <div className="h-1 w-1 rounded-full bg-dizimus-500" />
                          <span className="flex-1 text-[6px] text-gray-600">{ev}</span>
                          <span className="text-[6px] text-gray-400">{['24/05','06/06','15/06'][i]}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-4 w-44 rounded-2xl border border-gray-100 bg-white p-3 shadow-2xl">
              <p className="text-[7px] text-gray-400">Dízimos (mês)</p>
              <p className="text-sm font-extrabold text-dizimus-900">R$ 45.231,00</p>
              <p className="text-[7px] font-medium text-green-500">+12% vs mês anterior</p>
              <div className="my-2 border-t border-gray-100" />
              <p className="text-[7px] text-gray-400">Membros ativos</p>
              <p className="text-sm font-extrabold text-dizimus-900">512</p>
              <p className="text-[7px] font-medium text-dizimus-500">+23 este mês</p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom wave */}
      <div className="relative z-10 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 56" fill="none" className="w-full block">
          <path d="M0 56L1440 56L1440 18C1200 56 960 0 720 18C480 36 240 0 0 18Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}
