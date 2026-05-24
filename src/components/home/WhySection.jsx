import { ShieldCheck, Users, Lock, TrendingUp } from 'lucide-react'

const pillars = [
  {
    icon: ShieldCheck,
    title: 'Transparência',
    desc: 'Relatórios claros e prestação de contas em poucos cliques.',
  },
  {
    icon: Users,
    title: 'Comunhão',
    desc: 'Conecte-se melhor com sua comunidade e fortaleça vínculos.',
  },
  {
    icon: Lock,
    title: 'Segurança',
    desc: 'Seus dados protegidos com tecnologia de ponta e backups diários.',
  },
  {
    icon: TrendingUp,
    title: 'Crescimento',
    desc: 'Informações que ajudam sua igreja a tomar decisões e crescer com propósito.',
  },
]

export default function WhySection() {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Text */}
          <div className="lg:sticky lg:top-24">
            <span className="text-xs font-bold text-dizimus-500 uppercase tracking-widest">Por que usar o Dizimus</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-dizimus-900 mt-3 mb-5 leading-tight">
              Mais tempo para o Reino.{' '}
              <span className="text-dizimus-500">Menos tempo</span>{' '}
              com burocracia.
            </h2>
            <p className="text-gray-500 leading-relaxed">
              O Dizimus foi criado para pastores, líderes e equipes que desejam eficiência sem abrir mão da missão.
            </p>
          </div>

          {/* Pillars */}
          <div className="grid sm:grid-cols-2 gap-6">
            {pillars.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all">
                <div className="w-12 h-12 bg-dizimus-100 rounded-xl flex items-center justify-center mb-4">
                  <Icon size={22} className="text-dizimus-600" />
                </div>
                <h3 className="text-dizimus-900 font-bold mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
