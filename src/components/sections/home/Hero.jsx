import { ArrowRight, CheckCircle2 } from 'lucide-react'
import capaImg from '@/assets/capaIMG.avif'

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
    <>
      {/* ─── COVER PHOTO ─────────────────────────────────────────── */}
      <section
        className="relative w-full overflow-hidden"
        style={{ height: 'clamp(380px, 60vw, 680px)' }}
      >
        <img
          src={capaImg}
          alt="Comunidade em adoração"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
        />

        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(12,6,32,0.55) 0%, rgba(12,6,32,0.30) 40%, rgba(12,6,32,0.85) 100%)',
          }}
        />

        {/* Texto de marketing */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-1.5 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-yellow-400 animate-pulse" />
            <span
              className="text-xs font-semibold text-white/90 uppercase tracking-widest"
              style={{ fontFamily: 'var(--font-ecclesia)' }}
            >
              Gestão para igrejas
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.1] mb-5 max-w-4xl"
            style={{
              fontFamily: 'var(--font-ecclesia)',
              textShadow: '0 2px 24px rgba(0,0,0,0.5)',
            }}
          >
            Sua missão é servir.{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #8b63ff, #e0a020)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Não administrar.
            </span>
          </h1>

          {/* Subtítulo */}
          <p
            className="text-base sm:text-lg text-white/75 max-w-xl mb-8 leading-relaxed"
            style={{ textShadow: '0 1px 8px rgba(0,0,0,0.6)' }}
          >
            Membros, dízimos, eventos e comunicação — tudo em um só lugar.
            Para você gastar energia onde ela realmente importa.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-bold text-white transition-all hover:shadow-2xl active:scale-95"
              style={{ background: 'var(--color-ecclesia-500)' }}
            >
              Comece agora — é grátis
              <ArrowRight size={16} />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/10 backdrop-blur-sm px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/20 hover:border-white/40"
            >
              Ver demonstração
            </a>
          </div>
        </div>

        {/* Wave de transição */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg viewBox="0 0 1440 56" fill="none" className="w-full block">
            <path
              d="M0 56L1440 56L1440 18C1200 56 960 0 720 18C480 36 240 0 0 18Z"
              fill="#0c0620"
            />
          </svg>
        </div>
      </section>

      {/* ─── HERO CONTENT (dashboard + stats) ───────────────────── */}
      <section
        className="relative overflow-hidden pt-0 pb-0 flex flex-col"
        style={{ background: 'var(--gradient-hero)' }}
      >
        {/* Grid pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Glow orbs */}
        <div className="pointer-events-none absolute right-1/4 top-0 h-[500px] w-[500px] rounded-full bg-ecclesia-500 opacity-[0.12] blur-[120px]" />
        <div className="pointer-events-none absolute left-0 bottom-1/4 h-[300px] w-[300px] rounded-full bg-ecclesia-700 opacity-[0.15] blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-7xl w-full flex-1 flex items-center px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center w-full py-20">

            {/* Left */}
            <div>
              {/* Highlights */}
              <div className="flex flex-wrap gap-4 mb-10">
                {highlights.map(h => (
                  <span key={h} className="flex items-center gap-1.5 text-xs text-white/50">
                    <CheckCircle2 size={14} className="text-ecclesia-400" />
                    {h}
                  </span>
                ))}
              </div>

              {/* Stats */}
              <div className="flex items-center gap-8">
                {stats.map(({ value, label }) => (
                  <div key={label}>
                    <p
                      className="text-xl font-extrabold text-white"
                      style={{ fontFamily: 'var(--font-ecclesia)' }}
                    >
                      {value}
                    </p>
                    <p className="text-xs text-white/40">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Dashboard mockup */}
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 scale-90 rounded-3xl bg-ecclesia-500/20 blur-3xl" />

              <div className="relative rounded-2xl border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur-sm">
                {/* Browser bar */}
                <div className="flex items-center gap-2 rounded-xl bg-white/8 px-3 py-2 mb-3">
                  <div className="flex gap-1.5">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
                    <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
                    <div className="h-2.5 w-2.5 rounded-full bg-green-400/60" />
                  </div>
                  <div className="mx-3 flex h-5 flex-1 items-center rounded bg-white/8 px-2 text-[9px] text-white/30">
                    app.ecclesia.com.br
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-ecclesia-500 text-[7px] font-bold text-white">PL</div>
                    <span className="text-[8px] font-semibold text-white/50">Igreja Esperança</span>
                  </div>
                </div>

                {/* Dashboard UI */}
                <div className="flex overflow-hidden rounded-xl border border-white/8">
                  {/* Sidebar */}
                  <div className="w-32 shrink-0 bg-ecclesia-950/80 p-2.5">
                    <div className="mb-3 flex items-center gap-1.5 px-2 py-1">
                      <div className="flex h-4 w-4 items-center justify-center rounded bg-ecclesia-500/20 text-[8px]">⛪</div>
                      <span
                        className="text-[9px] font-extrabold text-white"
                        style={{ fontFamily: 'var(--font-ecclesia)' }}
                      >
                        ecclesia
                      </span>
                    </div>
                    {['Início','Dízimos','Membros','Batizados','Casamentos','Eventos','Relatórios','Config.'].map((item, i) => (
                      <div
                        key={item}
                        className={`flex items-center gap-1.5 rounded px-2 py-1 text-[8px] ${
                          i === 0 ? 'bg-ecclesia-500 font-semibold text-white' : 'text-white/35'
                        }`}
                      >
                        <div className="h-1 w-1 rounded-full bg-current opacity-60" />
                        {item}
                      </div>
                    ))}
                  </div>

                  {/* Main content */}
                  <div className="flex-1 bg-gray-50 p-3">
                    <p className="mb-2 text-[9px] font-bold text-ecclesia-900">Resumo Geral</p>
                    <div className="mb-3 grid grid-cols-4 gap-1.5">
                      {[
                        { label: 'Dízimos', value: 'R$ 45.231', delta: '+12%' },
                        { label: 'Ofertas', value: 'R$ 12.980', delta: '+8%' },
                        { label: 'Membros', value: '512', delta: '+23' },
                        { label: 'Batizados', value: '28', delta: '+5' },
                      ].map(k => (
                        <div key={k.label} className="rounded-md bg-white p-1.5 shadow-sm">
                          <p className="text-[6px] text-gray-400">{k.label}</p>
                          <p className="text-[8px] font-bold text-ecclesia-900">{k.value}</p>
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
                            <div className="h-1 w-1 rounded-full bg-ecclesia-500" />
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
                <p className="text-sm font-extrabold text-ecclesia-900">R$ 45.231,00</p>
                <p className="text-[7px] font-medium text-green-500">+12% vs mês anterior</p>
                <div className="my-2 border-t border-gray-100" />
                <p className="text-[7px] text-gray-400">Membros ativos</p>
                <p className="text-sm font-extrabold text-ecclesia-900">512</p>
                <p className="text-[7px] font-medium text-ecclesia-500">+23 este mês</p>
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
    </>
  )
}