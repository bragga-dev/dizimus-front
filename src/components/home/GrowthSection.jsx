import { ArrowRight, TrendingUp } from 'lucide-react'

export default function GrowthSection() {
  return (
    <section className="py-20 px-6 bg-dizimus-900 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-dizimus-700/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <span className="text-xs font-semibold text-gold-500 uppercase tracking-widest">Crescimento</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white mt-3 mb-5 leading-tight">
              Crescimento que{' '}
              <span className="text-gold-500">glorifica a Deus.</span>
            </h2>
            <p className="text-dizimus-300 leading-relaxed mb-8">
              Dados, organização e planejamento para impulsionar o crescimento da sua igreja. Tome decisões
              baseadas em informações reais, não em suposições.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-6 mb-10">
              {[
                { value: '+340%', label: 'igrejas cresceram com Dizimus' },
                { value: '15h', label: 'economizadas por semana' },
                { value: '99.9%', label: 'de uptime garantido' },
              ].map(({ value, label }) => (
                <div key={label}>
                  <p className="text-2xl font-extrabold text-gold-500">{value}</p>
                  <p className="text-dizimus-300 text-xs mt-1 leading-snug">{label}</p>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-2 border-2 border-gold-500 text-gold-500 font-semibold px-6 py-3 rounded-lg hover:bg-gold-500 hover:text-dizimus-900 transition-all group"
            >
              Ver plano de crescimento
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Chart illustration */}
          <div className="relative flex items-end justify-center h-64">
            {/* Arrow */}
            <div className="absolute top-0 right-8 w-1 h-4/5 flex flex-col items-center">
              <div className="w-0 h-0 border-l-8 border-r-8 border-b-12 border-l-transparent border-r-transparent border-b-gold-500" />
              <div className="w-1 flex-1 bg-gold-500 opacity-50" />
            </div>

            {/* Bars */}
            <div className="flex items-end gap-4 h-full px-8">
              {[
                { h: '30%', color: 'bg-dizimus-700' },
                { h: '45%', color: 'bg-dizimus-600' },
                { h: '55%', color: 'bg-dizimus-500' },
                { h: '70%', color: 'bg-dizimus-400' },
                { h: '85%', color: 'bg-gold-500' },
              ].map((bar, i) => (
                <div
                  key={i}
                  className={`flex-1 ${bar.color} rounded-t-lg shadow-lg`}
                  style={{ height: bar.h }}
                />
              ))}
            </div>

            {/* Floating badge */}
            <div className="absolute top-4 left-4 bg-dizimus-700 rounded-xl p-3 flex items-center gap-3">
              <div className="w-10 h-10 bg-gold-500/20 rounded-lg flex items-center justify-center">
                <TrendingUp size={18} className="text-gold-500" />
              </div>
              <div>
                <p className="text-white text-xs font-bold">Crescimento real</p>
                <p className="text-dizimus-300 text-[10px]">baseado em dados</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
