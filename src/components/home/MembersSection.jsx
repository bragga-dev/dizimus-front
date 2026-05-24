import { ArrowRight, Heart, UserCheck, Music } from 'lucide-react'

const members = [
  { name: 'João Silva', initials: 'JS', role: 'Pastor', size: 'lg', offset: '-top-4 left-8' },
  { name: 'Maria Costa', initials: 'MC', role: 'Diziminsta', size: 'xl', offset: 'top-8 left-1/2 -translate-x-1/2', featured: true },
  { name: 'Pedro Alves', initials: 'PA', role: 'Membro', size: 'md', offset: '-top-4 right-8' },
  { name: 'Ana Lima', initials: 'AL', role: 'Louvor', size: 'md', offset: 'bottom-8 right-12' },
]

export default function MembersSection() {
  return (
    <section className="py-20 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text side */}
          <div>
            <span className="text-xs font-semibold text-dizimus-500 uppercase tracking-widest">Membros</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-dizimus-900 mt-3 mb-5 leading-tight">
              Cada membro <span className="text-dizimus-500">importa.</span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Tenha o cadastro completo da sua comunidade sempre à mão. Histórico, ministérios, contribuições e
              muito mais — tudo em um só lugar.
            </p>

            {/* Member card preview */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-5 mb-8 max-w-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-dizimus-200 flex items-center justify-center font-bold text-dizimus-700">
                  AP
                </div>
                <div>
                  <p className="font-bold text-dizimus-900">Ana Paula Silva</p>
                  <p className="text-xs text-gray-400">Membro desde 2019</p>
                </div>
                <div className="ml-auto w-8 h-8 bg-dizimus-100 rounded-full flex items-center justify-center">
                  <Heart size={14} className="text-dizimus-500 fill-dizimus-500" />
                </div>
              </div>
              <div className="space-y-2">
                {[
                  { icon: UserCheck, label: 'Dizimista', color: 'text-green-500 bg-green-50' },
                  { icon: Music, label: 'Participa do Ministério de Louvor', color: 'text-dizimus-500 bg-dizimus-100' },
                ].map(({ icon: Icon, label, color }) => (
                  <div key={label} className="flex items-center gap-2 text-xs text-gray-600">
                    <div className={`w-5 h-5 rounded flex items-center justify-center ${color}`}>
                      <Icon size={11} />
                    </div>
                    {label}
                  </div>
                ))}
              </div>
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-2 bg-dizimus-700 hover:bg-dizimus-900 text-white font-semibold px-6 py-3 rounded-lg transition-all hover:shadow-lg hover:shadow-dizimus-700/30 group"
            >
              Gerenciar membros
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Illustration side */}
          <div className="relative h-80 hidden lg:block">
            {/* Floating avatars */}
            {[
              { initials: 'JS', top: '0%', left: '15%', size: 'w-16 h-16', bg: 'bg-dizimus-200', text: 'text-dizimus-700' },
              { initials: 'MC', top: '30%', left: '40%', size: 'w-24 h-24', bg: 'bg-dizimus-700', text: 'text-white', featured: true },
              { initials: 'PA', top: '0%', left: '65%', size: 'w-14 h-14', bg: 'bg-gold-500/20', text: 'text-gold-500' },
              { initials: 'AL', top: '60%', left: '70%', size: 'w-14 h-14', bg: 'bg-dizimus-100', text: 'text-dizimus-700' },
              { initials: 'RL', top: '65%', left: '10%', size: 'w-12 h-12', bg: 'bg-dizimus-200', text: 'text-dizimus-700' },
            ].map((a, i) => (
              <div
                key={i}
                className={`absolute ${a.size} ${a.bg} rounded-full flex items-center justify-center font-bold ${a.text} shadow-lg border-2 border-white ${a.featured ? 'text-lg ring-4 ring-dizimus-300' : 'text-sm'}`}
                style={{ top: a.top, left: a.left }}
              >
                {a.initials}
              </div>
            ))}

            {/* Center heart */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-dizimus-500 rounded-full flex items-center justify-center shadow-xl shadow-dizimus-500/40">
              <Heart size={22} className="text-white fill-white" />
            </div>

            {/* Stats floating badges */}
            <div className="absolute top-4 right-0 bg-white rounded-xl shadow-lg px-3 py-2 text-center border border-gray-100">
              <p className="text-lg font-extrabold text-dizimus-900">512</p>
              <p className="text-[10px] text-gray-400">membros ativos</p>
            </div>
            <div className="absolute bottom-4 left-0 bg-white rounded-xl shadow-lg px-3 py-2 text-center border border-gray-100">
              <p className="text-lg font-extrabold text-green-500">+23</p>
              <p className="text-[10px] text-gray-400">novos este mês</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
