import { Link } from 'react-router-dom'
import Header from '@/components/layout/header/Header'
import Footer from '@/components/layout/Footer'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-[#DC2626]">
      <Header />
      
      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="text-center space-y-10 max-w-2xl">
          {/* Número 404 estilizado */}
          <div className="relative">
            <h1 
              className="text-[180px] font-bold leading-none tracking-tight text-black/90 select-none"
              style={{ fontFamily: 'var(--font-ecclesia)' }}
            >
              404
            </h1>
            {/* Linha decorativa */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-black/30 rounded-full"></div>
          </div>

          {/* Conteúdo */}
          <div className="space-y-6">
            <div className="space-y-3">
              <p 
                className="text-3xl font-semibold text-black"
                style={{ fontFamily: 'var(--font-ecclesia)' }}
              >
                PÁGINA NÃO ENCONTRADA
              </p>
              <p className="text-lg text-black/60 max-w-md mx-auto">
                Oops! A página que você está procurando não existe ou foi movida para outro endereço.
              </p>
            </div>

            {/* Ícone decorativo */}
            <div className="flex justify-center gap-3">
              <div className="w-12 h-12 rounded-full bg-black/10 flex items-center justify-center">
                <svg 
                  className="w-6 h-6 text-black/60" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                  />
                </svg>
              </div>
              <div className="w-12 h-12 rounded-full bg-black/10 flex items-center justify-center">
                <svg 
                  className="w-6 h-6 text-black/60" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M13 10V3L4 14h7v7l9-11h-7z" 
                  />
                </svg>
              </div>
              <div className="w-12 h-12 rounded-full bg-black/10 flex items-center justify-center">
                <svg 
                  className="w-6 h-6 text-black/60" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" 
                  />
                </svg>
              </div>
            </div>

            {/* Sugestões */}
            <div className="flex flex-wrap gap-3 justify-center pt-4">
              <Link 
                to="/" 
                className="px-8 py-3 bg-black text-white rounded-full hover:bg-black/80 transition-all duration-300 font-medium text-base inline-flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                style={{ fontFamily: 'var(--font-ecclesia)' }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                VOLTAR PARA O INÍCIO
              </Link>
              
              <Link 
                to="/contato" 
                className="px-8 py-3 bg-white/20 text-black rounded-full hover:bg-white/30 transition-all duration-300 font-medium text-base inline-flex items-center gap-2 backdrop-blur-sm border border-white/30"
                style={{ fontFamily: 'var(--font-ecclesia)' }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                FALE CONOSCO
              </Link>
            </div>
          </div>

          {/* Código de erro */}
          <p className="text-sm text-black/40 mt-8 font-mono">
            Erro 404 • Página não encontrada
          </p>
        </div>
      </main>

      <Footer />
    </div>
  )
}