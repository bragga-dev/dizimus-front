const MOCK_CHURCHES = [
  { id: 1, full_name: "Igreja Esperança", avatar_url: null },
  { id: 2, full_name: "Ministério Vida", avatar_url: null },
  { id: 3, full_name: "Igreja Nova Aliança", avatar_url: null },
  { id: 4, full_name: "Comunidade Graça", avatar_url: null },
  { id: 5, full_name: "Igreja Recomeçar", avatar_url: null },
  { id: 6, full_name: "Ministério Luz do Mundo", avatar_url: null },
  { id: 7, full_name: "Igreja Boas Novas", avatar_url: null },
  { id: 8, full_name: "Comunidade Shalom", avatar_url: null },
  { id: 9, full_name: "Igreja Palavra Viva", avatar_url: null },
  { id: 10, full_name: "Ministério Colheita", avatar_url: null },
]

function getInitials(name = "") {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("")
}

function ChurchCard({ full_name, avatar_url }) {
  return (
    <div
      className="
        group

        mx-3

        flex
        items-center
        gap-4

        rounded-2xl

        border
        border-white/[0.06]

        bg-white/[0.04]

        backdrop-blur-xl

        px-7
        py-5

        transition-all
        duration-500

        hover:-translate-y-[2px]
        hover:border-[#3E936D]/18
        hover:bg-white/[0.06]

        shrink-0
      "
    >
      {/* Avatar */}

      <div
        className="
          relative

          h-12
          w-12

          overflow-hidden
          rounded-full

          border
          border-[#4A9D77]/20

          bg-gradient-to-br
          from-[#163126]
          to-[#0D1915]

          shadow-[0_0_40px_rgba(62,147,109,.10)]

          transition-all
          duration-500

          group-hover:scale-105
        "
      >
        {avatar_url ? (
          <img
            src={avatar_url}
            alt={full_name}
            className="
              h-full
              w-full
              object-cover

              opacity-70
              grayscale

              transition-all
              duration-500

              group-hover:opacity-100
              group-hover:grayscale-0
            "
          />
        ) : (
          <span
            className="
              absolute
              inset-0

              flex
              items-center
              justify-center

              text-xs
              font-black

              text-[#D8C38D]

              transition-all
              duration-500

              group-hover:text-white
            "
            style={{
              fontFamily: "var(--font-ecclesia)",
            }}
          >
            {getInitials(full_name)}
          </span>
        )}

        {/* brilho */}

        <div
          className="
            absolute
            inset-0

            bg-gradient-to-tr
            from-transparent
            via-white/[0.05]
            to-transparent

            opacity-0

            transition

            group-hover:opacity-100
          "
        />
      </div>

      {/* Texto */}

      <div className="flex flex-col">

        <span
          className="
            text-[12px]

            font-bold

            uppercase

            tracking-[0.18em]

            text-white/82

            transition

            group-hover:text-white
          "
          style={{
            fontFamily: "var(--font-ecclesia)",
          }}
        >
          {full_name}
        </span>

        <span
          className="
            mt-1

            text-[10px]

            tracking-[0.14em]

            text-[#82B79F]
          "
        >
          usando Ecclesia
        </span>

      </div>

      {/* indicador */}

      <div
        className="
          ml-2

          h-2
          w-2

          rounded-full

          bg-[#67C495]

          shadow-[0_0_18px_rgba(103,196,149,.9)]
        "
      />

    </div>
  )
}

export default function ChurchesCarousel({
  churches = MOCK_CHURCHES,
}) {
  const track = [...churches, ...churches, ...churches]

  return (
    <section
      className="
        relative

        overflow-hidden

        border-y
        border-white/[0.05]

        bg-gradient-to-b
        from-[#09130F]
        via-[#0D1714]
        to-[#11161B]

        py-14
      "
    >

      {/* brilho topo */}

      <div
        className="
          absolute
          left-1/2
          top-0

          h-[220px]
          w-[700px]

          -translate-x-1/2

          rounded-full

          bg-[#2A8A61]

          opacity-[0.05]

          blur-[140px]
        "
      />

      {/* fades */}

      <div className="absolute left-0 top-0 bottom-0 z-10 w-40 bg-gradient-to-r from-[#09130F]" />

      <div className="absolute right-0 top-0 bottom-0 z-10 w-40 bg-gradient-to-l from-[#11161B]" />

     
      {/* trilho */}

      <div className="overflow-hidden">

        <div
          className="flex w-max items-center"
          style={{
            animation:
              "churchesMarquee 52s linear infinite",
          }}
        >
          {track.map((church, i) => (
            <ChurchCard
              key={`${church.id}-${i}`}
              {...church}
            />
          ))}
        </div>

      </div>

      <style>{`
        @keyframes churchesMarquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-33.333%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          [style*="churchesMarquee"] {
            animation: none;
          }
        }
      `}</style>

    </section>
  )
}