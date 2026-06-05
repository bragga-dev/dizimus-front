const links = {
  Produto: ['Recursos', 'Planos', 'Atualizações', 'Roadmap'],
  Empresa: ['Sobre', 'Blog', 'Contato', 'Trabalhe conosco'],
  Suporte: ['Central de ajuda', 'Fale conosco', 'Status do sistema', 'Tutoriais'],
}

const socials = [
  { label: 'f', title: 'Facebook' },
  { label: 'in', title: 'LinkedIn' },
  { label: 'yt', title: 'YouTube' },
  { label: 'wa', title: 'WhatsApp' },
]

export default function Footer() {
  return (
    <footer className="bg-ecclesia-950 border-t border-white/6 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 mb-14">

          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-ecclesia-500/20 border border-ecclesia-500/30 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                  <path d="M10 2L6 7H3V11L10 18L17 11V7H14L10 2Z" stroke="#8b63ff" strokeWidth="1.3" fill="none"/>
                  <line x1="10" y1="2" x2="10" y2="7" stroke="#8b63ff" strokeWidth="1.3"/>
                </svg>
              </div>
              <span className="text-white font-extrabold text-lg tracking-tight">ecclesia</span>
            </div>
            <p className="text-xs leading-relaxed text-white/30 mb-6 max-w-[180px]">
              O sistema completo para igrejas que buscam excelência na gestão e mais tempo para o que realmente importa.
            </p>
            <div className="flex gap-2">
              {socials.map(s => (
                <a
                  key={s.label}
                  href="#"
                  title={s.title}
                  className="h-8 w-8 rounded-lg bg-white/6 flex items-center justify-center text-[9px] font-bold text-white/35 hover:bg-white/12 hover:text-white/70 transition-all"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-5">{category}</h4>
              <ul className="space-y-3">
                {items.map(item => (
                  <li key={item}>
                    <a href="#" className="text-xs text-white/30 hover:text-white/70 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-5">Newsletter</h4>
            <p className="text-xs text-white/30 mb-4 leading-relaxed">Receba conteúdos e novidades do ecclesia .</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="min-w-0 flex-1 rounded-lg border border-white/10 bg-white/6 px-3 py-2 text-xs text-white placeholder-white/20 outline-none focus:border-ecclesia-500 transition-colors"
              />
              <button className="shrink-0 rounded-lg bg-ecclesia-500 px-3 py-2 text-white transition-colors hover:bg-ecclesia-400">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M8 4l4 3-4 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

        </div>

        <div className="border-t border-white/8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/20">© 2025 Ecclesia. Todos os direitos reservados.</p>
          <div className="flex gap-5">
            <a href="#" className="text-xs text-white/20 hover:text-white/50 transition-colors">Política de Privacidade</a>
            <a href="#" className="text-xs text-white/20 hover:text-white/50 transition-colors">Termos de Uso</a>
            <a href="#" className="text-xs text-white/20 hover:text-white/50 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
