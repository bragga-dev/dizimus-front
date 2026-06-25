import { Link, useSearchParams } from 'react-router-dom'
import { MailCheck, MailX } from 'lucide-react'
import Header from '../components/layout/header/Header.jsx'  // ← ADICIONA HEADER
import Footer from '../components/layout/Footer.jsx'         // ← ADICIONA FOOTER

export default function VerifyEmail() {
  const [params] = useSearchParams()
  const status  = params.get('status')   // 'success' | 'error'
  const email   = params.get('email')
  const message = params.get('message')

  const isSuccess = status === 'success'

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: '#0D1815' }}
    >
      <Header />  {/* ← HEADER AQUI */}
      
      {/* Conteúdo principal com flex-1 para ocupar o espaço */}
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="w-full max-w-md text-center space-y-6">

          {/* Ícone */}
          <div className="flex justify-center">
            <div className={`w-20 h-20 rounded-3xl flex items-center justify-center ${
              isSuccess
                ? 'bg-[#315C4B]/30 border border-[#6FB68A]/20'
                : 'bg-red-500/10 border border-red-500/20'
            }`}>
              {isSuccess
                ? <MailCheck className="w-10 h-10 text-[#6FB68A]" />
                : <MailX className="w-10 h-10 text-red-400" />
              }
            </div>
          </div>

          {/* Badge */}
          <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.25em] ${
            isSuccess
              ? 'bg-[#82D39E]/10 border border-[#82D39E]/20 text-[#9BE8B5]'
              : 'bg-red-500/10 border border-red-500/20 text-red-400'
          }`}>
            {isSuccess ? 'E-mail confirmado' : 'Link inválido'}
          </span>

          {/* Título e texto */}
          <div className="space-y-2">
            <h1
              className="text-2xl font-black text-white"
              style={{ fontFamily: 'var(--font-ecclesia)' }}
            >
              {isSuccess ? 'Conta ativada com sucesso!' : 'Não foi possível verificar'}
            </h1>
            <p className="text-white/45 text-sm leading-relaxed">
              {isSuccess
                ? <>Sua conta <span className="text-white/70 font-semibold">{email}</span> foi ativada. Agora você pode fazer login.</>
                : (message || 'O link é inválido ou já expirou. Solicite um novo e-mail de verificação.')
              }
            </p>
          </div>

          {/* Ações */}
          <div className="flex flex-col gap-3">
            {isSuccess ? (
              <Link
                to="/login"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm text-white transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg, #315C4B, #1E6B4B)', boxShadow: '0 6px 24px rgba(49,92,75,0.40)' }}
              >
                Fazer login agora
              </Link>
            ) : (
              <>
                <Link
                  to="/verificar-email"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm text-white transition-all duration-300 hover:-translate-y-0.5"
                  style={{ background: 'linear-gradient(135deg, #315C4B, #1E6B4B)', boxShadow: '0 6px 24px rgba(49,92,75,0.40)' }}
                >
                  Reenviar e-mail de verificação
                </Link>
                <Link
                  to="/login"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm text-white/60 border transition-all duration-300 hover:text-white hover:bg-white/[0.04]"
                  style={{ borderColor: 'rgba(255,255,255,0.09)' }}
                >
                  Voltar para o login
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
      
      <Footer />  {/* ← FOOTER AQUI */}
    </div>
  )
}