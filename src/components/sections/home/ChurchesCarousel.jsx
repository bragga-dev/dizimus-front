// src/components/sections/home/ChurchesCarousel.jsx

const MOCK_CHURCHES = [
  { id: 1, full_name: 'Igreja Esperança' },
  { id: 2, full_name: 'Ministério Vida' },
  { id: 3, full_name: 'Igreja Nova Aliança' },
  { id: 4, full_name: 'Comunidade Graça' },
  { id: 5, full_name: 'Igreja Recomeçar' },
  { id: 6, full_name: 'Ministério Luz do Mundo' },
  { id: 7, full_name: 'Igreja Boas Novas' },
  { id: 8, full_name: 'Comunidade Shalom' },
  { id: 9, full_name: 'Igreja Palavra Viva' },
  { id: 10, full_name: 'Ministério Colheita' },
]

function getInitials(name = '') {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join('')
}

// Alterna entre roxo e dourado para dar ritmo visual
const ACCENT_CYCLE = [
  { bg: 'rgba(103,61,230,0.18)', border: 'rgba(103,61,230,0.30)', text: '#b09aff', dot: '#8b63ff' },
  { bg: 'rgba(224,160,32,0.14)', border: 'rgba(224,160,32,0.28)', text: '#f5c842', dot: '#e0a020' },
  { bg: 'rgba(139,99,255,0.14)', border: 'rgba(139,99,255,0.25)', text: '#d1c6ff', dot: '#8b63ff' },
  { bg: 'rgba(224,160,32,0.10)', border: 'rgba(245,200,66,0.22)', text: '#f5c842', dot: '#f5c842' },
]

function ChurchCard({ full_name, index }) {
  const accent = ACCENT_CYCLE[index % ACCENT_CYCLE.length]

  return (
    <div
      className="
        group mx-3 flex items-center gap-4
        rounded-2xl border px-7 py-5
        backdrop-blur-xl shrink-0
        transition-all duration-300
        hover:-translate-y-[2px] hover:brightness-110
      "
      style={{
        background: accent.bg,
        borderColor: accent.border,
      }}
    >
      {/* Avatar */}
      <div
        className="relative h-11 w-11 overflow-hidden rounded-full flex-shrink-0 flex items-center justify-center"
        style={{
          background: `linear-gradient(135deg, ${accent.dot}33, ${accent.dot}15)`,
          border: `1px solid ${accent.border}`,
        }}
      >
        <span
          className="text-xs font-bold"
          style={{ color: accent.text }}
        >
          {getInitials(full_name)}
        </span>

        {/* Brilho no hover */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
      </div>

      {/* Texto */}
      <div className="flex flex-col">
        <span
          className="text-[12px] font-bold uppercase tracking-[0.18em]"
          style={{ color: accent.text }}
        >
          {full_name}
        </span>
        <span className="mt-0.5 text-[10px] tracking-[0.14em] text-white/30">
          Ecclesia Network
        </span>
      </div>

      {/* Dot decorativo */}
      <div
        className="ml-2 h-1.5 w-1.5 rounded-full flex-shrink-0"
        style={{ background: accent.dot, opacity: 0.6 }}
      />
    </div>
  )
}

export default function ChurchesCarousel({ churches = MOCK_CHURCHES }) {
  const track = [...churches, ...churches, ...churches]

  return (
    <section
      className="relative overflow-hidden border-y py-14"
      style={{
        background: 'linear-gradient(180deg, #0c0620 0%, #160b3c 50%, #0c0620 100%)',
        borderColor: 'rgba(103,61,230,0.20)',
      }}
    >
      {/* Glow roxo central */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[180px] w-[600px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(103,61,230,0.25), transparent 70%)' }}
      />

      {/* Fade esquerda */}
      <div
        className="absolute left-0 top-0 bottom-0 z-10 w-40 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #0c0620, transparent)' }}
      />
      {/* Fade direita */}
      <div
        className="absolute right-0 top-0 bottom-0 z-10 w-40 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #0c0620, transparent)' }}
      />

      {/* Marquee */}
      <div className="overflow-hidden">
        <div
          className="flex w-max items-center"
          style={{ animation: 'churchesMarquee 55s linear infinite' }}
        >
          {track.map((church, i) => (
            <ChurchCard key={`${church.id}-${i}`} {...church} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes churchesMarquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-33.333%); }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="churchesMarquee"] { animation: none; }
        }
      `}</style>
    </section>
  )
}