import { ArrowRight } from 'lucide-react'

const eventTypes = [
  { label: 'Batizados', emoji: '💧', color: 'bg-blue-50 text-blue-600' },
  { label: 'Casamentos', emoji: '💍', color: 'bg-pink-50 text-pink-600' },
  { label: 'Festas', emoji: '🎉', color: 'bg-yellow-50 text-yellow-600' },
  { label: 'Viagens', emoji: '✈️', color: 'bg-purple-50 text-purple-600' },
  { label: 'Agenda', emoji: '📅', color: 'bg-green-50 text-green-600' },
]

export default function EventsSection() {
  return (
    <section className="py-20 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Event icons grid */}
          <div className="relative">
            {/* Church illustration placeholder */}
            <div className="absolute inset-0 flex items-center justify-center opacity-5">
              <svg viewBox="0 0 200 200" className="w-64 h-64" fill="none">
                <rect x="60" y="80" width="80" height="100" stroke="#2C1E4A" strokeWidth="3"/>
                <polygon points="100,20 50,80 150,80" stroke="#2C1E4A" strokeWidth="3" fill="none"/>
                <line x1="100" y1="20" x2="100" y2="5" stroke="#D4AF37" strokeWidth="3"/>
                <line x1="92" y1="12" x2="108" y2="12" stroke="#D4AF37" strokeWidth="3"/>
                <rect x="80" y="130" width="40" height="50" stroke="#2C1E4A" strokeWidth="2.5" fill="none"/>
              </svg>
            </div>

            <div className="grid grid-cols-3 gap-4 relative">
              {eventTypes.map(({ label, emoji, color }, i) => (
                <div
                  key={label}
                  className={`${color} rounded-2xl p-5 flex flex-col items-center gap-2 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 cursor-pointer ${
                    i === 4 ? 'col-span-1 col-start-2' : ''
                  }`}
                >
                  <span className="text-3xl">{emoji}</span>
                  <span className="text-xs font-semibold">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Text side */}
          <div>
            <span className="text-xs font-semibold text-ecclesia-500 uppercase tracking-widest">Eventos</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-ecclesia-900 mt-3 mb-5 leading-tight">
              Momentos especiais,{' '}
              <span className="text-ecclesia-500">lembranças eternas.</span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Organize batizados, casamentos, festas e viagens com facilidade e praticidade. Todos os momentos
              especiais da sua comunidade registrados e celebrados.
            </p>

            {/* Upcoming events mini list */}
            <div className="bg-ecclesia-50 rounded-2xl p-5 mb-8">
              <p className="text-xs font-bold text-ecclesia-900 mb-3 uppercase tracking-wide">Próximos eventos</p>
              <div className="space-y-3">
                {[
                  { event: 'Batizado de Novos Membros', date: '24 Mai', type: '💧', color: 'bg-blue-100' },
                  { event: 'Casamento Silva & Costa', date: '06 Jun', type: '💍', color: 'bg-pink-100' },
                  { event: 'Festa da Família', date: '15 Jun', type: '🎉', color: 'bg-yellow-100' },
                ].map(({ event, date, type, color }) => (
                  <div key={event} className="flex items-center gap-3 bg-white rounded-xl p-3 shadow-sm">
                    <div className={`w-9 h-9 ${color} rounded-lg flex items-center justify-center text-lg`}>
                      {type}
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-ecclesia-900">{event}</p>
                    </div>
                    <span className="text-xs text-ecclesia-500 font-medium whitespace-nowrap">{date}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-2 border-2 border-ecclesia-900 text-ecclesia-900 font-semibold px-6 py-3 rounded-lg hover:bg-ecclesia-900 hover:text-white transition-all group"
            >
              Gerenciar eventos
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
