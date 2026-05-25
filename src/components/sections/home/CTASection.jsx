import { ArrowRight } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="bg-dizimus-800 py-20 px-6 relative overflow-hidden">
      {/* Church illustration */}
      <div className="absolute left-0 top-0 bottom-0 flex items-center pl-10 pointer-events-none">
        <svg viewBox="0 0 200 220" fill="none" className="w-48 h-auto opacity-20">
          <rect x="55" y="110" width="90" height="90" stroke="white" strokeWidth="2"/>
          <polygon points="100,30 40,110 160,110" stroke="white" strokeWidth="2" fill="none"/>
          <line x1="100" y1="30" x2="100" y2="10" stroke="white" strokeWidth="2.5"/>
          <line x1="88" y1="20" x2="112" y2="20" stroke="white" strokeWidth="2.5"/>
          <rect x="75" y="150" width="50" height="50" stroke="white" strokeWidth="1.5" fill="none"/>
          <rect x="60" y="125" width="25" height="30" stroke="white" strokeWidth="1.5" fill="none"/>
          <rect x="115" y="125" width="25" height="30" stroke="white" strokeWidth="1.5" fill="none"/>
          <ellipse cx="55" cy="195" rx="25" ry="20" stroke="white" strokeWidth="1" fill="none"/>
          <ellipse cx="145" cy="195" rx="25" ry="20" stroke="white" strokeWidth="1" fill="none"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="text-center lg:text-left max-w-xl">
            <h2 className="text-2xl lg:text-3xl font-extrabold text-white mb-3 leading-snug">
              Pronto para transformar a gestão da sua igreja?
            </h2>
            <p className="text-white/60 text-sm leading-relaxed">
              Agende uma demonstração gratuita e veja como o Dizimus pode ajudar sua igreja a crescer com propósito e excelência.
            </p>
          </div>
          <a
            href="#"
            className="shrink-0 inline-flex items-center gap-2 bg-white text-dizimus-800 hover:bg-dizimus-50 font-bold px-8 py-4 rounded-xl transition-all hover:shadow-xl active:scale-95 text-sm"
          >
            Agendar demonstração
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
