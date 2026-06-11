// home/TestimonialsSection.jsx - Depoimentos
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Pastor Marcos Silva',
    role: 'Igreja Nova Aliança',
    content: 'O Ecclesia transformou completamente nossa gestão. Hoje temos total transparência financeira e os membros estão mais engajados do que nunca.',
    rating: 5,
    image: null,
  },
  {
    name: 'Líder administrativo',
    role: 'Comunidade Shalom',
    content: 'Reduzimos em 80% o tempo gasto com planilhas. A automação de envio de recibos e relatórios financeiros mudou nossa rotina.',
    rating: 5,
    image: null,
  },
  {
    name: 'Pastora Ana Costa',
    role: 'Ministério Vida',
    content: 'Interface intuitiva e suporte excepcional. Nossa igreja cresceu 40% no último ano e o Ecclesia acompanhou perfeitamente.',
    rating: 5,
    image: null,
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-28 px-6 bg-gradient-to-b from-[#0A0F14] to-[#05080C] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[url('/testimonials-bg.svg')] opacity-[0.03]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#2A8A61]/10 border border-[#2A8A61]/20 text-[#2A8A61] text-xs font-bold uppercase tracking-wider mb-5">
            Depoimentos
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-5">
            Quem usa{' '}
            <span className="bg-gradient-to-r from-[#2A8A61] to-[#D4AF37] bg-clip-text text-transparent">
              recomenda
            </span>
          </h2>
          <p className="text-lg text-white/40 max-w-2xl mx-auto">
            Mais de 5.000 igrejas confiam no Ecclesia para sua gestão
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-8 transition-all duration-500 hover:border-[#2A8A61]/30 hover:-translate-y-2"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-white/5" />

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                ))}
              </div>

              {/* Content */}
              <p className="text-white/70 leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2A8A61] to-[#1E6B4B] flex items-center justify-center mb-3">
                  <span className="text-white font-bold text-sm">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <h4 className="font-bold text-white">{testimonial.name}</h4>
                <p className="text-sm text-[#2A8A61]">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badge */}
        <div className="text-center mt-12">
          <p className="text-white/30 text-sm tracking-wide">
            ★★★★★ · 4.9 de 5 baseado em mais de 1.500 avaliações
          </p>
        </div>
      </div>
    </section>
  )
}