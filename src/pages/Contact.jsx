import { Mail, MessageCircle, Phone, MapPin } from 'lucide-react'

const contacts = [
  { icon: Mail, label: 'E-mail', value: 'contato@ecclesia.com.br', href: 'mailto:contato@ecclesia.com.br' },
  { icon: MessageCircle, label: 'WhatsApp', value: '(11) 99999-0000', href: 'https://wa.me/5511999990000' },
  { icon: Phone, label: 'Telefone', value: '(11) 3333-0000', href: 'tel:+551133330000' },
  { icon: MapPin, label: 'Endereço', value: 'São Paulo, SP — Brasil', href: null },
]

export default function Contact() {
  return (
    <div className="min-h-screen overflow-x-hidden">

      <section
        className="relative py-24 sm:py-32 px-6 text-center"
        style={{ background: 'linear-gradient(180deg, #0D1815 0%, #13221D 100%)' }}
      >
        <div className="max-w-2xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#82D39E]/10 border border-[#82D39E]/20 text-[#9BE8B5] text-xs font-bold uppercase tracking-[0.28em] mb-6">
            Fale conosco
          </span>
          <h1
            className="text-4xl sm:text-5xl font-black text-white mb-5"
            style={{ fontFamily: 'var(--font-ecclesia)' }}
          >
            Estamos aqui{' '}
            <span style={{ background: 'linear-gradient(90deg,#86E6A7,#D7B36A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              para ajudar
            </span>
          </h1>
          <p className="text-white/60 text-lg leading-relaxed">
            Tem dúvidas sobre o Ecclesia? Nossa equipe responde em até 24 horas úteis.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#F6F4ED]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">

          <div className="bg-white rounded-3xl border border-[#E7E1D1] p-8 sm:p-10">
            <h2 className="text-2xl font-black text-[#18241F] mb-2" style={{ fontFamily: 'var(--font-ecclesia)' }}>
              Envie uma mensagem
            </h2>
            <p className="text-sm text-[#59645D] mb-7">Responderemos em breve.</p>
            <div className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-[#18241F] uppercase tracking-wider mb-2">Nome</label>
                  <input type="text" placeholder="Seu nome" className="w-full px-4 py-3 rounded-xl border border-[#E7E1D1] bg-[#FAF9F6] text-[#18241F] text-sm placeholder-[#A8A49C] focus:outline-none focus:border-[#315C4B] transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#18241F] uppercase tracking-wider mb-2">Igreja</label>
                  <input type="text" placeholder="Nome da sua igreja" className="w-full px-4 py-3 rounded-xl border border-[#E7E1D1] bg-[#FAF9F6] text-[#18241F] text-sm placeholder-[#A8A49C] focus:outline-none focus:border-[#315C4B] transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#18241F] uppercase tracking-wider mb-2">E-mail</label>
                <input type="email" placeholder="seu@email.com" className="w-full px-4 py-3 rounded-xl border border-[#E7E1D1] bg-[#FAF9F6] text-[#18241F] text-sm placeholder-[#A8A49C] focus:outline-none focus:border-[#315C4B] transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#18241F] uppercase tracking-wider mb-2">Mensagem</label>
                <textarea rows={5} placeholder="Como podemos ajudar sua igreja?" className="w-full px-4 py-3 rounded-xl border border-[#E7E1D1] bg-[#FAF9F6] text-[#18241F] text-sm placeholder-[#A8A49C] focus:outline-none focus:border-[#315C4B] transition-colors resize-none" />
              </div>
              <button
                type="button"
                className="w-full py-3.5 rounded-xl font-bold text-white text-sm transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg, #315C4B, #1E6B4B)', boxShadow: '0 6px 24px rgba(49,92,75,0.35)' }}
              >
                Enviar mensagem
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-5 justify-center">
            <div className="mb-2">
              <h2 className="text-2xl font-black text-[#18241F] mb-2" style={{ fontFamily: 'var(--font-ecclesia)' }}>
                Canais diretos
              </h2>
              <p className="text-sm text-[#59645D]">Prefere falar diretamente? Escolha o canal mais conveniente.</p>
            </div>
            {contacts.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-center gap-4 bg-white rounded-2xl border border-[#E7E1D1] p-5 hover:-translate-y-0.5 transition-transform duration-300">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#F7F2E4] to-[#EEF5F0] flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-[#315C4B]" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#8A7350] uppercase tracking-wider">{label}</div>
                  {href ? (
                    <a href={href} className="text-sm font-medium text-[#18241F] hover:text-[#315C4B] transition-colors">{value}</a>
                  ) : (
                    <span className="text-sm font-medium text-[#18241F]">{value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  )
}