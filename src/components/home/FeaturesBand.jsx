import { ShieldCheck, Users, LayoutGrid, TrendingUp } from 'lucide-react'

const features = [
  {
    icon: ShieldCheck,
    title: 'Transparência',
    desc: 'Relatórios claros para prestação de contas.',
  },
  {
    icon: Users,
    title: 'Comunhão',
    desc: 'Conecte-se melhor com sua comunidade.',
  },
  {
    icon: LayoutGrid,
    title: 'Organização',
    desc: 'Menos burocracia, mais tempo para o que realmente importa.',
  },
  {
    icon: TrendingUp,
    title: 'Crescimento',
    desc: 'Mais eficiência para sua igreja avançar.',
  },
]

export default function FeaturesBand() {
  return (
    <section className="bg-dizimus-900 py-14 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-8 items-center">
          {/* Heading */}
          <div className="lg:col-span-1">
            <h2 className="text-xl font-bold text-white leading-snug">
              Tudo que sua igreja precisa em um só lugar
            </h2>
            <div className="w-10 h-1 bg-gold-500 rounded-full mt-3" />
          </div>

          {/* Features */}
          <div className="lg:col-span-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="group">
                <div className="w-12 h-12 bg-dizimus-700/50 group-hover:bg-dizimus-500/50 rounded-xl flex items-center justify-center mb-3 transition-colors">
                  <Icon size={22} className="text-gold-500" />
                </div>
                <h3 className="text-white font-semibold text-sm mb-1">{title}</h3>
                <p className="text-dizimus-300 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
