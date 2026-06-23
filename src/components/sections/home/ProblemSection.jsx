// src/components/sections/home/ProblemSection.jsx

const pains = [
  {
    before: 'Finanças controladas em planilhas e anotações',
    after:  'Dízimos, ofertas e movimentações centralizados',
  },
  {
    before: 'Cadastro de membros espalhado em vários lugares',
    after:  'Informações organizadas e sempre acessíveis',
  },
  {
    before: 'Eventos e comunicados no improviso',
    after:  'Agenda, confirmações e comunicação integrada',
  },
  {
    before: 'Horas preparando relatórios e acompanhamentos',
    after:  'Indicadores e relatórios disponíveis em segundos',
  },
]

export default function ProblemSection() {
  return (
    <section
      className="relative overflow-hidden px-6 py-28 lg:py-36"
      style={{
        background: `
          radial-gradient(ellipse at 20% 50%, rgba(103,61,230,0.18) 0%, transparent 50%),
          radial-gradient(ellipse at 80% 20%, rgba(224,160,32,0.10) 0%, transparent 45%),
          linear-gradient(180deg, #0c0620 0%, #160b3c 60%, #0c0620 100%)
        `,
      }}
    >
      {/* Grid decorativo */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(176,154,255,0.6) 1px, transparent 1px),
            linear-gradient(90deg, rgba(176,154,255,0.6) 1px, transparent 1px)
          `,
          backgroundSize: '72px 72px',
        }}
      />

      {/* Glow roxo esquerdo */}
      <div
        className="absolute -left-40 top-1/4 h-[500px] w-[500px] rounded-full blur-[180px] opacity-25"
        style={{ background: 'radial-gradient(circle, #673de6, transparent 70%)' }}
      />
      {/* Glow dourado direito */}
      <div
        className="absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full blur-[160px] opacity-15"
        style={{ background: 'radial-gradient(circle, #e0a020, transparent 70%)' }}
      />

      <div className="relative z-10 mx-auto max-w-5xl">

        {/* Header */}
        <div className="mb-20 text-center">
          <span
            className="inline-block rounded-full border border-ecclesia-500/30 bg-ecclesia-500/10 px-5 py-2 text-[11px] font-bold uppercase tracking-[0.28em] text-ecclesia-300 mb-8"
          >
            Por que igrejas escolhem o Ecclesia
          </span>

          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] text-white"
            style={{ fontFamily: 'var(--font-ecclesia)' }}
          >
            Sua missão é servir.
            <br />
            <span
              style={{
                background: 'linear-gradient(90deg, #8b63ff, #e0a020)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              A gestão precisa acompanhar.
            </span>
          </h2>

          <p
            className="mt-6 max-w-2xl mx-auto text-lg leading-relaxed text-white/60"
            style={{ fontFamily: 'var(--font-navbar)' }}
          >
            Quando a igreja cresce, processos improvisados consomem tempo e geram retrabalho.
            O Ecclesia organiza a operação para que o foco continue sendo o ministério.
          </p>
        </div>

        {/* Cards de comparação */}
        <div className="space-y-4">
          {pains.map(({ before, after }, i) => (
            <div
              key={i}
              className="group grid md:grid-cols-[1fr_80px_1fr] gap-4 items-center rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-6 backdrop-blur-sm transition-all duration-300 hover:border-ecclesia-500/30 hover:bg-ecclesia-500/5"
            >
              {/* Antes */}
              <div className="flex items-center gap-4">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-white/5 border border-white/10">
                  <span className="text-white/30 text-lg font-light">✕</span>
                </div>
                <span className="text-white/45 text-sm leading-relaxed">{before}</span>
              </div>

              {/* Seta */}
              <div className="flex justify-center">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-ecclesia-500/30 bg-ecclesia-500/10 text-ecclesia-400 text-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-ecclesia-500/20"
                >
                  →
                </div>
              </div>

              {/* Depois */}
              <div className="flex items-center gap-4">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-gold-500/15 border border-gold-500/30">
                  <span className="text-gold-400 text-sm">✓</span>
                </div>
                <span className="text-white/90 text-sm font-medium leading-relaxed">{after}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <p className="text-white/40 text-base" style={{ fontFamily: 'var(--font-navbar)' }}>
            Mais organização.{' '}
            <span className="text-ecclesia-400">Menos operação.</span>
            <br />
            Mais tempo para cuidar de pessoas.
          </p>
        </div>
      </div>
    </section>
  )
}