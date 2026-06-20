// ============================================================
// PROBLEM SECTION — com suas fontes originais
// ============================================================

const pains = [
  {
    before: "Finanças controladas em planilhas e anotações",
    after: "Dízimos, ofertas e movimentações centralizados",
  },
  {
    before: "Cadastro de membros espalhado em vários lugares",
    after: "Informações organizadas e sempre acessíveis",
  },
  {
    before: "Eventos e comunicados no improviso",
    after: "Agenda, confirmações e comunicação integrada",
  },
  {
    before: "Horas preparando relatórios e acompanhamentos",
    after: "Indicadores e relatórios disponíveis em segundos",
  },
]

export default function ProblemSection() {
  return (
    <section
      className="
        relative overflow-hidden
        px-6 py-28 lg:py-36
        flex items-center justify-center
      "
      style={{
        background: `
          radial-gradient(circle at 0% 20%, rgba(111,182,138,.10) 0%, transparent 50%),
          radial-gradient(circle at 100% 80%, rgba(209,179,108,.07) 0%, transparent 50%),
          linear-gradient(180deg, #0D1815 0%, #13221D 55%, #182922 100%)
        `,
      }}
    >
      {/* Grid decorativo */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.25) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.25) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
      />

      {/* Glow esquerdo */}
      <div
        className="absolute -left-56 top-0 h-[620px] w-[620px] rounded-full blur-[200px] opacity-[0.12]"
        style={{ background: "radial-gradient(circle,#67C38A,transparent 70%)" }}
      />

      {/* Glow direito */}
      <div
        className="absolute -right-56 bottom-0 h-[650px] w-[650px] rounded-full blur-[220px] opacity-[0.08]"
        style={{ background: "radial-gradient(circle,#DAB870,transparent 70%)" }}
      />

      <div className="relative z-10 mx-auto max-w-6xl text-center">
        {/* HEADER */}
        <div className="mx-auto mb-20 max-w-4xl">
          <span
            className="
              mb-7 inline-block
              rounded-full border border-[#82D39E]/20
              bg-[#82D39E]/10
              px-6 py-2.5
              text-xs font-semibold uppercase
              tracking-[0.28em]
              text-[#9BE8B5]
            "
          >
            Crescimento sem perder organização
          </span>

          <h2
            className="
              text-4xl sm:text-5xl lg:text-6xl
              font-black leading-[1.1]
              text-white
            "
            style={{ fontFamily: "var(--font-ecclesia)" }}
          >
            Sua missão é servir.
            <br />
            <span
              style={{
                background: "linear-gradient(90deg,#86E6A7,#FFFFFF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              A gestão precisa acompanhar.
            </span>
          </h2>

          <p
            className="
              mt-8 max-w-3xl mx-auto
              text-lg leading-relaxed
              text-white/70
            "
            style={{ fontFamily: "var(--font-navbar)" }}
          >
            Quando a igreja cresce, processos improvisados começam a consumir tempo,
            gerar retrabalho e reduzir a capacidade de acompanhar pessoas.
            <span className="text-[#97E6B1]">
              {" "}O Ecclesia organiza a operação para que o foco continue sendo o ministério.
            </span>
          </p>
        </div>

        {/* COMPARAÇÃO — antes → depois */}
        <div className="mx-auto max-w-5xl space-y-5">
          {pains.map(({ before, after }, i) => (
            <div
              key={i}
              className="
                group grid md:grid-cols-[1fr_100px_1fr]
                gap-7 rounded-[30px]
                border border-white/10
                bg-white/[0.04]
                px-7 py-8
                backdrop-blur-xl
                transition-all duration-500
                hover:-translate-y-1
                hover:border-[#7DD89D]/20
                hover:bg-white/[0.06]
              "
            >
              {/* ANTES */}
              <div className="flex items-center justify-center gap-4 text-center">
                <div className="flex h-10 w-10 shrink-0 rounded-full items-center justify-center bg-white/5 text-white/40">
                  <span className="text-lg font-bold">—</span>
                </div>
                <span
                  className="max-w-[280px] text-white/50"
                  style={{ fontFamily: "var(--font-navbar)" }}
                >
                  {before}
                </span>
              </div>

              {/* SETA com animação */}
              <div className="flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#86E6A7]/10 border border-[#86E6A7]/20 text-[#9BE8B5] text-xl transition-all duration-300 group-hover:scale-110 group-hover:bg-[#86E6A7]/20 group-hover:rotate-12">
                  <span className="font-bold">→</span>
                </div>
              </div>

              {/* DEPOIS */}
              <div className="flex items-center justify-center gap-4 text-center">
                <div className="flex h-10 w-10 shrink-0 rounded-full items-center justify-center bg-[#86E6A7]/14 text-[#9BE8B5]">
                  <span className="text-lg font-bold">✓</span>
                </div>
                <span
                  className="max-w-[300px] text-white/90 font-medium"
                  style={{ fontFamily: "var(--font-navbar)" }}
                >
                  {after}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER com destaque */}
        <div className="mt-20">
          <p
            className="text-lg text-white/60"
            style={{ fontFamily: "var(--font-navbar)" }}
          >
            Mais organização.
            <span className="text-[#9BE8B5] font-semibold"> Menos operação.</span>
            <br />
            Mais tempo para cuidar de pessoas.
          </p>

          <div className="mt-8 flex justify-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#5a2e6b]" />
            <span className="h-2 w-2 rounded-full bg-[#d4a347]" />
            <span className="h-2 w-2 rounded-full bg-[#2b7a4b]" />
            <span className="h-2 w-2 rounded-full bg-[#b13e3e]" />
            <span className="h-2 w-2 rounded-full bg-[#1f3a5f]" />
          </div>
        </div>
      </div>
    </section>
  )
}