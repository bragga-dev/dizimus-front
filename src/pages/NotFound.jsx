import { Link } from 'react-router-dom'
import Header from '@/components/layout/header/Header'
import Footer from '@/components/layout/Footer'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="text-center space-y-8 max-w-md">
          {/* Ícone */}
          <div className="flex justify-center">
            <div className="w-32 h-32 rounded-full bg-brand-50 flex items-center justify-center">
              <svg 
                className="w-16 h-16 text-brand-600" 
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
          </div>

          {/* Título */}
          <div className="space-y-3">
            <h1 className="text-8xl font-bold text-zinc-900 tracking-tight" style={{ fontFamily: 'var(--font-ecclesia)' }}>
              404
            </h1>
            <p className="text-2xl font-medium text-zinc-700" style={{ fontFamily: 'var(--font-ecclesia)' }}>
              PÁGINA NÃO ENCONTRADA
            </p>
            <p className="text-zinc-500">
              Oops! A página que você está procurando não existe ou foi movida.
            </p>
          </div>

          {/* Botões - ESTILO SUPOSITÓRIO */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link 
              to="/" 
              className="px-8 py-3 bg-brand-600 text-white rounded-full hover:bg-brand-700 transition-colors font-medium text-base inline-flex items-center justify-center w-48"
              style={{ fontFamily: 'var(--font-ecclesia)' }}
            >
              VOLTAR PARA O INÍCIO
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}