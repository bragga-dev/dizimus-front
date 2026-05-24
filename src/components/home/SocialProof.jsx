const churches = [
  'Igreja Esperança',
  'Ministério Vida',
  'Igreja Nova Aliança',
  'Comunidade Graça',
  'Igreja Recomeçar',
  'Ministério Luz do Mundo',
]

function ChurchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
      <path d="M10 2L13 6H17V10L10 18L3 10V6H7L10 2Z" stroke="currentColor" strokeWidth="1.3" fill="none"/>
      <line x1="10" y1="2" x2="10" y2="6.5" stroke="currentColor" strokeWidth="1.3"/>
    </svg>
  )
}

export default function SocialProof() {
  return (
    <section className="bg-white py-12 px-6 border-b border-gray-100">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-sm text-gray-500 font-medium mb-8">
          Mais de 2.000 igrejas em todo o Brasil já usam o Dizimus
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
          {churches.map(name => (
            <div key={name} className="flex items-center gap-2 text-gray-400 hover:text-dizimus-700 transition-colors group">
              <div className="text-current">
                <ChurchIcon />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
