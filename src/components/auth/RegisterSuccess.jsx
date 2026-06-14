// src/components/auth/RegisterSuccess.jsx
import { MailCheck, ArrowRight, RefreshCw } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Header from '@/components/layout/header/Header'
import Footer from '@/components/layout/Footer'

export default function RegisterSuccess({ email = "seu@email.com" }) {
  const [isResending, setIsResending] = useState(false)

  const handleResendEmail = async () => {
    setIsResending(true)
    // Lógica para reenviar e-mail
    setTimeout(() => setIsResending(false), 2000)
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#0D1815]">
      <Header />
      
      <main className="flex-1 flex items-center justify-center px-6 py-20">
        <div className="w-full max-w-lg">
          {/* Card */}
          <div className="bg-white/5 rounded-2xl p-12 border border-white/10">
            {/* Ícone */}
            <div className="flex justify-center mb-10">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#315C4B] to-[#1E6B4B] flex items-center justify-center">
                <MailCheck className="w-10 h-10 text-white" />
              </div>
            </div>

            {/* Título */}
            <h1 
              className="text-3xl font-bold text-white text-center mb-6"
              style={{ fontFamily: 'var(--font-ecclesia)' }}
            >
              Verifique seu e-mail
            </h1>
            
            {/* Mensagem */}
            <div className="text-center space-y-3 mb-12">
              <p className="text-white/60">
                Enviamos um link de confirmação para
              </p>
              <p className="text-white font-medium">
                {email}
              </p>
              <p className="text-white/60 text-sm pt-2">
                Clique no link para ativar sua conta.
              </p>
            </div>

            {/* Ações */}
            <div className="space-y-4">
              <Link
                to="/login"
                className="block w-full text-center px-6 py-3 rounded-lg font-semibold text-white transition-all hover:opacity-90"
                style={{ background: 'linear-gradient(135deg, #315C4B, #1E6B4B)' }}
              >
                Ir para o login
                <ArrowRight className="inline-block w-4 h-4 ml-2" />
              </Link>
              
              <button
                onClick={handleResendEmail}
                disabled={isResending}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium text-white/60 hover:text-white transition-colors bg-white/5 hover:bg-white/10"
              >
                <RefreshCw className={`w-4 h-4 ${isResending ? 'animate-spin' : ''}`} />
                <span>{isResending ? 'Enviando...' : 'Reenviar e-mail'}</span>
              </button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}