// src/pages/EmailNotVerificado.jsx

import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { MailCheck, MailX, ArrowLeft, RefreshCw } from 'lucide-react'

import { resendVerification } from '@/services/api/auth'
import { parseApiError } from '@/hooks/useApiError'

import Header from '@/components/layout/header/Header'
import Footer from '@/components/layout/Footer'

export default function EmailNotVerificado() {
  const { state } = useLocation()
  const navigate = useNavigate()

  const email = state?.email ?? null

  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  if (!email) {
    navigate('/login', { replace: true })
    return null
  }

  const handleResend = async () => {
    setError('')
    setSuccess(false)
    setIsLoading(true)

    try {
      await resendVerification(email)
      setSuccess(true)
    } catch (err) {
      const { message } = parseApiError(err)
      setError(message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: '#0D1815' }}
    >
      {/* HEADER */}
      <Header />

      {/* CONTEÚDO */}
      <main className="flex-1 flex items-center justify-center px-6 py-16">

        <div className="w-full max-w-md space-y-8 text-center">

          {/* Ícone */}
          <div className="flex justify-center">
            <div className="relative">

              <div className="w-24 h-24 rounded-3xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                <MailX className="w-12 h-12 text-amber-400" />
              </div>

              <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-[#0D1815] flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center">
                  <span className="text-red-400 text-xs font-black">!</span>
                </div>
              </div>

            </div>
          </div>

          {/* Texto */}
          <div className="space-y-3">

            <span className="inline-block px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[10px] font-bold uppercase tracking-[0.25em]">
              E-mail não verificado
            </span>

            <h1
              className="text-3xl font-black text-white"
              style={{
                fontFamily: 'var(--font-ecclesia)',
              }}
            >
              Confirme seu e-mail para continuar
            </h1>

            <p className="text-white/45 text-sm leading-relaxed">
              Enviamos um link de ativação para{' '}
              <span className="text-white/80 font-semibold">
                {email}
              </span>.
              Você precisa confirmar seu e-mail antes de acessar a plataforma.
            </p>

          </div>

          {/* Card */}
          <div
            className="rounded-2xl border p-5 text-left space-y-3"
            style={{
              background: 'rgba(255,255,255,0.03)',
              borderColor: 'rgba(255,255,255,0.08)',
            }}
          >

            <p className="text-white/60 text-xs font-semibold uppercase">
              O que fazer agora?
            </p>

            {[
              'Abra sua caixa de entrada',
              'Procure um e-mail do Ecclesia',
              'Clique no link de confirmação',
              'Volte aqui e faça login',
            ].map((step, i) => (
              <div
                key={i}
                className="flex items-center gap-3"
              >
                <div className="w-6 h-6 rounded-full bg-[#315C4B]/50 flex items-center justify-center">
                  <span className="text-[#6FB68A] text-[10px] font-black">
                    {i + 1}
                  </span>
                </div>

                <span className="text-white/55 text-sm">
                  {step}
                </span>
              </div>
            ))}

          </div>

          {success && (
            <div className="px-4 py-3 rounded-xl bg-green-500/10 border border-green-500/20">
              <p className="text-green-400 text-sm">
                E-mail reenviado com sucesso!
              </p>
            </div>
          )}

          {error && (
            <div className="px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
              {error}
            </div>
          )}

          <div className="flex flex-col gap-3">

            <button
              onClick={handleResend}
              disabled={isLoading || success}
              className="w-full py-3 rounded-xl font-bold text-white"
            >
              {isLoading
                ? 'Enviando...'
                : 'Reenviar e-mail'}
            </button>

            <Link
              to="/login"
              className="w-full py-3 rounded-xl border text-white/60 flex justify-center items-center gap-2"
            >
              <ArrowLeft size={18} />
              Voltar para login
            </Link>

          </div>

          <p className="text-white/20 text-xs">
            Não recebeu o e-mail?
            Verifique spam ou clique em reenviar.
          </p>

        </div>

      </main>

      {/* FOOTER */}
      <Footer />

    </div>
  )
}