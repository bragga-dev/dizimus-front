import { CheckCircle2 } from 'lucide-react'

const checklist = [
  'Controle total de dízimos e ofertas',
  'Gestão de membros e ministérios',
  'Agenda de eventos e comunicações',
  'Relatórios inteligentes e personalizáveis',
  'Acesso seguro e permissões por função',
]

export default function FeaturesOverview() {
  return (
    <section className="py-20 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — Text */}
          <div>
            <span className="text-[10px] font-bold text-dizimus-500 uppercase tracking-[0.2em]">Gestão Completa</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-dizimus-900 mt-3 mb-5 leading-tight">
              Tudo o que sua igreja precisa
              <br />
              em <span className="text-dizimus-500">um só lugar.</span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8 max-w-md">
              Do controle financeiro ao relacionamento com membros, o Dizimus oferece
              as ferramentas certas para uma gestão eficiente, transparente e espiritual.
            </p>

            <ul className="space-y-3 mb-10">
              {checklist.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                  <CheckCircle2 size={18} className="text-dizimus-500 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            {/* Mini stat */}
            <div className="bg-dizimus-50 rounded-2xl px-6 py-4 inline-flex items-center gap-4 border border-dizimus-100">
              <div>
                <p className="text-2xl font-extrabold text-dizimus-900">R$ 78.420,80</p>
                <p className="text-xs text-gray-400 mt-0.5">Saldo em conta · Maio 2024</p>
                <p className="text-xs text-green-500 font-semibold mt-0.5">+15% vs. mês anterior</p>
              </div>
              <div className="w-px h-12 bg-dizimus-200 shrink-0" />
              <div className="text-center">
                <p className="text-xl font-extrabold text-dizimus-700">23</p>
                <p className="text-[10px] text-gray-400">novos membros</p>
                <p className="text-[10px] text-green-500 font-medium">+10% este mês</p>
              </div>
            </div>
          </div>

          {/* Right — Dashboard screenshots collage */}
          <div className="relative">
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-dizimus-50 rounded-full blur-3xl opacity-80" />

            {/* Main report card */}
            <div className="relative bg-white rounded-2xl shadow-xl border border-gray-100 p-5 mb-4">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm font-bold text-dizimus-900">Relatório Financeiro</p>
                  <p className="text-xs text-gray-400">Jan – Jul 2024</p>
                </div>
                <span className="text-xs bg-green-50 text-green-600 font-semibold px-2.5 py-1 rounded-full">+12%</span>
              </div>

              {/* Bar chart */}
              <div className="flex items-end gap-2 h-28 mb-2">
                {[
                  { h: 42, label: 'Jan' }, { h: 60, label: 'Fev' }, { h: 50, label: 'Mar' },
                  { h: 76, label: 'Abr' }, { h: 65, label: 'Mai' }, { h: 92, label: 'Jun' },
                  { h: 78, label: 'Jul' },
                ].map((bar, i) => (
                  <div key={bar.label} className="flex-1 flex flex-col items-center gap-1">
                    <div
                      className="w-full rounded-t-md transition-all"
                      style={{
                        height: `${bar.h}%`,
                        background: i === 5 ? '#7B61D6' : '#4A2D7A',
                        opacity: i === 5 ? 1 : 0.35 + i * 0.08,
                      }}
                    />
                    <span className="text-[8px] text-gray-400">{bar.label}</span>
                  </div>
                ))}
              </div>

              {/* Donut + legend */}
              <div className="flex items-center gap-6 pt-4 border-t border-gray-100">
                <div className="relative w-20 h-20 shrink-0">
                  <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                    <circle cx="18" cy="18" r="14" fill="none" stroke="#e5e7eb" strokeWidth="4"/>
                    <circle cx="18" cy="18" r="14" fill="none" stroke="#7B61D6" strokeWidth="4" strokeDasharray="52 48" strokeLinecap="round"/>
                    <circle cx="18" cy="18" r="14" fill="none" stroke="#D4AF37" strokeWidth="4" strokeDasharray="28 72" strokeDashoffset="-52" strokeLinecap="round"/>
                    <circle cx="18" cy="18" r="14" fill="none" stroke="#e5e7eb" strokeWidth="4" strokeDasharray="20 80" strokeDashoffset="-80" strokeLinecap="round"/>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[10px] font-bold text-dizimus-900">100%</span>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  {[
                    { color: 'bg-dizimus-500', label: 'Dízimos', pct: '52%' },
                    { color: 'bg-gold-500', label: 'Ofertas', pct: '28%' },
                    { color: 'bg-gray-200', label: 'Outros', pct: '20%' },
                  ].map((l) => (
                    <div key={l.label} className="flex items-center gap-2 text-xs text-gray-600">
                      <span className={`w-2.5 h-2.5 rounded-full ${l.color} shrink-0`} />
                      <span className="flex-1">{l.label}</span>
                      <span className="font-semibold text-dizimus-900">{l.pct}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mini floating cards */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-dizimus-900 rounded-xl p-4 text-white">
                <p className="text-[9px] text-dizimus-300 mb-1 font-medium">Contribuições</p>
                <p className="text-lg font-extrabold">R$ 45.231</p>
                <p className="text-[9px] text-green-400 mt-0.5">+12% este mês</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow border border-gray-100">
                <p className="text-[9px] text-gray-400 mb-1 font-medium">Novos membros</p>
                <p className="text-lg font-extrabold text-dizimus-900">23</p>
                <div className="flex -space-x-1.5 mt-1.5">
                  {['JS', 'MC', 'PA', 'AL'].map((i) => (
                    <div key={i} className="w-5 h-5 rounded-full bg-dizimus-200 border border-white flex items-center justify-center text-[6px] font-bold text-dizimus-700">{i}</div>
                  ))}
                  <div className="w-5 h-5 rounded-full bg-dizimus-500 border border-white flex items-center justify-center text-[6px] font-bold text-white">+5</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
