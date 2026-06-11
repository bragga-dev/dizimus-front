/**
 * ProblemSection — Premium Marketing Version
 */

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
        relative
        overflow-hidden
        px-6
        py-28
        lg:py-36
      "
      style={{
        background: `
          radial-gradient(
            circle at top left,
            rgba(111,182,138,.14),
            transparent 35%
          ),

          radial-gradient(
            circle at right center,
            rgba(209,179,108,.10),
            transparent 40%
          ),

          linear-gradient(
            180deg,
            #0D1815 0%,
            #13221D 55%,
            #182922 100%
          )
        `,
      }}
    >
      {/* GRID */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
        "
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(255,255,255,.4) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,.4) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "72px 72px",
        }}
      />

      {/* Glow esquerdo */}
      <div
        className="
          absolute
          -left-56
          top-0
          h-[620px]
          w-[620px]
          rounded-full
          blur-[200px]
          opacity-[0.18]
        "
        style={{
          background:
            "radial-gradient(circle,#67C38A,transparent 70%)",
        }}
      />

      {/* Glow direito */}
      <div
        className="
          absolute
          -right-56
          bottom-0
          h-[650px]
          w-[650px]
          rounded-full
          blur-[220px]
          opacity-[0.12]
        "
        style={{
          background:
            "radial-gradient(circle,#DAB870,transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* HEADER */}

        <div
          className="
            mx-auto
            mb-20
            flex
            max-w-4xl
            flex-col
            items-center
            text-center
          "
        >
          <span
            className="
              mb-7

              rounded-full
              border

              border-[#82D39E]/20

              bg-[#82D39E]/10

              px-5
              py-2

              text-xs
              font-semibold

              uppercase

              tracking-[0.28em]

              text-[#9BE8B5]
            "
          >
            Crescimento sem perder organização
          </span>

          <h2
            className="
              text-4xl
              font-black
              leading-[1.03]
              text-white

              sm:text-5xl
              lg:text-6xl
            "
            style={{
              fontFamily:
                "var(--font-ecclesia)",
            }}
          >
            Sua missão é servir.

            <br />

            <span
              style={{
                background:
                  "linear-gradient(90deg,#86E6A7,#FFFFFF)",

                WebkitBackgroundClip:
                  "text",

                WebkitTextFillColor:
                  "transparent",
              }}
            >
              A gestão precisa acompanhar.
            </span>
          </h2>

          <p
            className="
              mt-8

              max-w-3xl

              text-lg

              leading-relaxed

              text-white/65
            "
            style={{
              fontFamily:
                "var(--font-navbar)",
            }}
          >
            Quando a igreja cresce, processos
            improvisados começam a consumir
            tempo, gerar retrabalho e reduzir
            a capacidade de acompanhar pessoas.

            <span className="text-[#97E6B1]">
              {" "}
              O Ecclesia organiza a operação
              para que o foco continue sendo
              o ministério.
            </span>
          </p>
        </div>

        {/* COMPARAÇÃO */}

        <div className="mx-auto max-w-6xl">

          <div
            className="
              hidden
              md:grid

              grid-cols-[1fr_90px_1fr]

              px-8
              mb-5
            "
          >
            <span
              className="
                text-center
                text-xs
                uppercase
                tracking-[0.3em]
                text-white/25
              "
            >
              Antes
            </span>

            <span />

            <span
              className="
                text-center
                text-xs
                uppercase
                tracking-[0.3em]
                text-[#9BE8B5]
              "
            >
              Com Ecclesia
            </span>
          </div>

          <div className="space-y-5">

            {pains.map(({ before, after }, i) => (
              <div
                key={i}
                className="
                  group

                  grid

                  md:grid-cols-[1fr_100px_1fr]

                  gap-7

                  rounded-[30px]

                  border
                  border-white/6

                  bg-white/[0.04]

                  px-7
                  py-8

                  backdrop-blur-xl

                  transition-all
                  duration-500

                  hover:-translate-y-1

                  hover:border-[#7DD89D]/20

                  hover:bg-white/[0.06]
                "
              >
                <div
                  className="
                    flex
                    items-center
                    justify-center
                    gap-4
                    text-center
                  "
                >
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      rounded-full
                      items-center
                      justify-center

                      bg-white/5

                      text-white/40
                    "
                  >
                    —
                  </div>

                  <span
                    className="
                      max-w-[280px]

                      text-white/42
                    "
                  >
                    {before}
                  </span>
                </div>

                <div className="flex justify-center">
                  <div
                    className="
                      flex

                      h-16
                      w-16

                      items-center
                      justify-center

                      rounded-full

                      bg-[#86E6A7]/10

                      border
                      border-[#86E6A7]/20

                      text-[#9BE8B5]

                      text-xl

                      transition

                      group-hover:scale-110
                    "
                  >
                    →
                  </div>
                </div>

                <div
                  className="
                    flex
                    items-center
                    justify-center
                    gap-4
                    text-center
                  "
                >
                  <div
                    className="
                      flex
                      h-10
                      w-10

                      rounded-full

                      items-center
                      justify-center

                      bg-[#86E6A7]/14

                      text-[#9BE8B5]
                    "
                  >
                    ✓
                  </div>

                  <span
                    className="
                      max-w-[300px]

                      text-white/90

                      font-medium
                    "
                  >
                    {after}
                  </span>
                </div>
              </div>
            ))}

          </div>

        </div>

        {/* FOOTER */}

        <div
          className="
            mt-20
            text-center
          "
        >
          <p
            className="
              text-lg
              text-white/45
            "
          >
            Mais organização.
            <span className="text-[#9BE8B5]">
              {" "}
              Menos operação.
            </span>

            <br />

            Mais tempo para cuidar de pessoas.
          </p>
        </div>

      </div>
    </section>
  )
}