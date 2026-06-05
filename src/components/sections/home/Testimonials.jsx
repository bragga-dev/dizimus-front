const testimonials = [
  {
    stars: 5,
    text: 'O ecclesia trouxe organização e transparência para nossa igreja. Hoje temos relatórios claros e mais tempo para cuidar de pessoas.',
    name: 'Pr. Marcos Almeida',
    church: 'Igreja Nova Aliança',
    initials: 'MA',
  },
  {
    stars: 5,
    text: 'O suporte é incrível e o sistema é intuitivo. Facilitou muito a vida da nossa equipe e da liderança.',
    name: 'Pra. Juliana Costa',
    church: 'Comunidade Graça',
    initials: 'JC',
  },
  {
    stars: 5,
    text: 'Recomendamos para todas as igrejas que desejam crescer com excelência e honrar ao Reino.',
    name: 'Pr. André Silva',
    church: 'Ministério Vida',
    initials: 'AS',
  },
]

const trustBadges = [
  { icon: '🧪', label: 'Teste grátis', sub: '7 dias para experimentar' },
  { icon: '✕', label: 'Sem fidelidade', sub: 'Cancele quando quiser' },
  { icon: '🔒', label: 'Pagamento seguro', sub: 'Ambiente 100% seguro' },
]

function Stars({ count }) {
  return (
    <div className="flex gap-0.5 mb-3">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#D4AF37">
          <path d="M7 1l1.5 4h4l-3.3 2.4 1.3 4L7 9l-3.5 2.4 1.3-4L1.5 5h4L7 1z"/>
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <span className="text-xs font-bold text-ecclesia-500 uppercase tracking-widest">O que dizem nossos clientes</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-ecclesia-900 mt-3 mb-8 leading-tight">
              Histórias de igrejas que foram{' '}
              <span className="text-ecclesia-500">transformadas.</span>
            </h2>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6">
              {trustBadges.map(({ icon, label, sub }) => (
                <div key={label} className="flex items-center gap-2">
                  <span className="text-xl">{icon}</span>
                  <div>
                    <p className="text-xs font-bold text-ecclesia-900">{label}</p>
                    <p className="text-xs text-gray-400">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial cards */}
          <div className="grid gap-4">
            {testimonials.map(({ stars, text, name, church, initials }) => (
              <div key={name} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <Stars count={stars} />
                <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">"{text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-ecclesia-200 flex items-center justify-center text-xs font-bold text-ecclesia-700 shrink-0">
                    {initials}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-ecclesia-900">{name}</p>
                    <p className="text-xs text-gray-400">{church}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
