// home/CTASection.jsx - Chamada final
import { ArrowRight, Sparkles } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0F14] via-[#0D1915] to-[#0A0F14]" />

      {/* Glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#2A8A61] rounded-full blur-[180px] opacity-[0.12]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#D4AF37] rounded-full blur-[180px] opacity-[0.05]" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2A8A61]/10 border border-[#2A8A61]/20 mb-8">
          <Sparkles className="w-4 h-4 text-[#D4AF37]" />
          <span className="text-xs font-bold text-[#2A8A61] uppercase tracking-wider">
            Oferta especial
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
          Sua missão é servir.{' '}
          <span className="bg-gradient-to-r from-[#2A8A61] to-[#D4AF37] bg-clip-text text-transparent">
            A gestão é com a gente.
          </span>
        </h2>

        <p className="text-lg text-white/50 max-w-2xl mx-auto mb-10">
          Junte-se a milhares de líderes que já simplificaram a administração da sua igreja.
          Comece grátis, sem compromisso.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#2A8A61] to-[#1E6B4B] text-white font-bold text-lg shadow-xl shadow-[#2A8A61]/30 hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Começar agora — é grátis
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl border-2 border-white/20 text-white font-bold text-lg hover:bg-white/5 hover:border-white/30 transition-all duration-300"
          >
            Ver demonstração
          </a>
        </div>

        <p className="text-white/25 text-sm mt-6">
          ✓ Sem cartão de crédito · ✓ Cancele quando quiser · ✓ Suporte incluso
        </p>
      </div>
    </section>
  )
}