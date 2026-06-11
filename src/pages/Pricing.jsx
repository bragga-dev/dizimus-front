import PricingSection from '@/components/sections/home/PricingSection'
import CTASection from '@/components/sections/home/CTASection'

export default function Pricing() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <section
        className="relative py-24 sm:py-28 px-6 text-center"
        style={{ background: 'linear-gradient(180deg, #0D1815 0%, #13221D 100%)' }}
      >
        <div className="max-w-2xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#82D39E]/10 border border-[#82D39E]/20 text-[#9BE8B5] text-xs font-bold uppercase tracking-[0.28em] mb-6">
            Planos e Preços
          </span>
          <h1
            className="text-4xl sm:text-5xl font-black text-white mb-5"
            style={{ fontFamily: 'var(--font-ecclesia)' }}
          >
            Transparente desde{' '}
            <span style={{ background: 'linear-gradient(90deg,#86E6A7,#D7B36A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              o primeiro dia
            </span>
          </h1>
          <p className="text-white/60 text-lg leading-relaxed">
            Sem taxas escondidas. Sem surpresas. Comece grátis e cresça no seu ritmo.
          </p>
        </div>
      </section>

      <PricingSection />
      <CTASection />
    </div>
  )
}