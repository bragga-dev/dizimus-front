const links = {
  Produto: ['Recursos', 'Planos', 'Sistema', 'Atualizações'],
  Empresa: ['Sobre', 'Blog', 'Contato', 'Trabalhe conosco'],
  Suporte: ['Central de ajuda', 'Fale conosco', 'Status do sistema', 'Tutoriais'],
}

export default function Footer() {
  return (
    <footer className="bg-dizimus-950 text-white/40 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-dizimus-700 rounded-lg flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                  <path d="M10 2L6 7H3V11L10 18L17 11V7H14L10 2Z" stroke="#F5B800" strokeWidth="1.3" fill="none"/>
                  <line x1="10" y1="2" x2="10" y2="7" stroke="#F5B800" strokeWidth="1.3"/>
                </svg>
              </div>
              <span className="text-white font-extrabold text-lg">dizimus</span>
            </div>
            <p className="text-xs leading-relaxed text-white/30 mb-5">
              O sistema completo para igrejas que buscam excelência na administração e mais tempo para o que realmente importa: o Reino.
            </p>
            <div className="flex gap-3">
              {['f', 'in', 'yt', 'wa'].map(s => (
                <a key={s} href="#" className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center text-[9px] font-bold text-white/50 hover:text-white transition-colors">
                  {s}
                </a>
              ))}
            </div>
          </div>

          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {items.map(item => (
                  <li key={item}>
                    <a href="#" className="text-xs text-white/30 hover:text-white transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">Newsletter</h4>
            <p className="text-xs text-white/30 mb-3">Receba conteúdos e novidades do Dizimus.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1 bg-white/10 border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder-white/20 focus:outline-none focus:border-dizimus-500 min-w-0"
              />
              <button className="bg-dizimus-600 hover:bg-dizimus-500 text-white px-3 py-2 rounded-lg transition-colors shrink-0">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M8 4l4 3-4 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/20">© 2024 Dizimus. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="text-xs text-white/20 hover:text-white/50 transition-colors">Política de Privacidade</a>
            <a href="#" className="text-xs text-white/20 hover:text-white/50 transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
