import { Heart, Target, Users, Award } from 'lucide-react'

const values = [
  {
    icon: Heart,
    title: 'Propósito acima do lucro',
    description: 'Acreditamos que a tecnologia deve servir à missão. Cada funcionalidade que construímos tem como norte liberar líderes para cuidar de pessoas.',
  },
  {
    icon: Target,
    title: 'Simplicidade como virtude',
    description: 'Ferramentas complexas criam atrito. Construímos tudo para ser intuitivo, acessível e eficiente — desde o pastor até o voluntário mais recente.',
  },
  {
    icon: Users,
    title: 'Comunidade em primeiro lugar',
    description: 'Ouvimos pastores, líderes e secretários de todo o Brasil para entender os desafios reais da gestão eclesiástica.',
  },
  {
    icon: Award,
    title: 'Excelência contínua',
    description: 'Melhoramos continuamente com base no feedback da comunidade. Quando sua igreja cresce, o Ecclesia cresce junto.',
  },
]

export default function About() {
  return (
    <div className="min-h-screen overflow-x-hidden">

      <section
        className="relative py-24 sm:py-32 px-6 text-center"
        style={{ background: 'linear-gradient(180deg, #0D1815 0%, #13221D 100%)' }}
      >
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)',
            backgroundSize: '72px 72px',
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#82D39E]/10 border border-[#82D39E]/20 text-[#9BE8B5] text-xs font-bold uppercase tracking-[0.28em] mb-6">
            Nossa história
          </span>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-[1.05]"
            style={{ fontFamily: 'var(--font-ecclesia)' }}
          >
            Nascemos{' '}
            <span style={{ background: 'linear-gradient(90deg,#86E6A7,#D7B36A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              dentro da igreja
            </span>
          </h1>
          <p className="text-lg text-white/60 leading-relaxed">
            O Ecclesia nasceu da experiência direta de líderes que sentiram na prática a dor de gerir uma comunidade crescente sem as ferramentas certas. Somos uma equipe apaixonada por tecnologia e por ministério.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#F6F4ED]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full border border-[#D7B36A]/20 bg-white/70 text-[#8A7350] text-[11px] font-semibold uppercase tracking-[0.30em] mb-5">
              Nossa missão
            </span>
            <h2
              className="text-3xl sm:text-4xl font-black text-[#18241F] mb-5 leading-tight"
              style={{ fontFamily: 'var(--font-ecclesia)' }}
            >
              Libertar líderes para o que realmente importa
            </h2>
            <p className="text-[#59645D] leading-relaxed text-base">
              Acreditamos que um pastor não deveria gastar seu domingo tentando conciliar planilhas financeiras ou rastrear presenças. Nossa missão é eliminar a fricção operacional para que cada minuto seja dedicado ao crescimento espiritual da comunidade.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { number: '5.000+', label: 'Igrejas ativas' },
              { number: '2M+', label: 'Membros cadastrados' },
              { number: '97%', label: 'Satisfação' },
              { number: '2020', label: 'Fundação' },
            ].map(({ number, label }) => (
              <div key={label} className="rounded-2xl border border-[#E7E1D1] bg-white p-6 text-center">
                <div
                  className="text-3xl font-black mb-1"
                  style={{ background: 'linear-gradient(90deg,#315C4B,#D7B36A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontFamily: 'var(--font-ecclesia)' }}
                >
                  {number}
                </div>
                <div className="text-sm text-[#59645D]">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full border border-[#D7B36A]/20 bg-[#F6F4ED] text-[#8A7350] text-[11px] font-semibold uppercase tracking-[0.30em] mb-5">
              Valores
            </span>
            <h2
              className="text-3xl sm:text-4xl font-black text-[#18241F]"
              style={{ fontFamily: 'var(--font-ecclesia)' }}
            >
              O que guia cada decisão
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, description }) => (
              <div key={title} className="rounded-2xl border border-[#E7E1D1] bg-[#F9F7F2] p-7 hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#F7F2E4] to-[#EEF5F0] flex items-center justify-center mb-5">
                  <Icon size={22} className="text-[#315C4B]" />
                </div>
                <h3 className="font-bold text-[#18241F] mb-2 text-base" style={{ fontFamily: 'var(--font-ecclesia)' }}>{title}</h3>
                <p className="text-sm text-[#59645D] leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}