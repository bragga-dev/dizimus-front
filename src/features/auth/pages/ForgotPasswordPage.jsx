// src/pages/ForgotPassword.jsx
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, ArrowRight, ArrowLeft, MailCheck } from 'lucide-react'
import Header from '@/components/layout/header/Header'
import Footer from '@/components/layout/Footer'
import capaImg from '@/assets/capaIMG.avif'
import { requestPasswordReset } from '@/services/api/auth'
import { parseApiError } from '@/hooks/useApiError'

export default function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    try {
      await requestPasswordReset(email)
      setSubmitted(true)
    } catch (err) {
      const { message } = parseApiError(err)
      setError(message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col" style={{ background: '#0D1815' }}>
      <Header />

      <main className="flex-1 flex">

        {/* Lado esquerdo — imagem */}
        <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
          <img src={capaImg} alt="Comunidade em adoração" className="absolute inset-0 w-full h-full object-cover object-center" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(8,18,14,0.75) 0%, rgba(13,25,21,0.55) 60%, rgba(8,18,14,0.85) 100%)' }} />
          <div className="relative z-10 flex flex-col justify-between p-12 w-full">
            <div />
            <div>
              <blockquote className="text-3xl xl:text-4xl font-black text-white leading-tight mb-4" style={{ fontFamily: 'var(--font-ecclesia)' }}>
                "Sua conta está{' '}
                <span style={{ background: 'linear-gradient(90deg, #6FB68A, #D7B36A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  segura conosco."
                </span>
              </blockquote>
              <p className="text-white/50 text-sm">
                Recupere o acesso em instantes. Enviamos um link seguro para o seu e-mail.
              </p>
            </div>
            <div className="space-y-3">
              {[
                'Link de redefinição expira em 24h',
                'Processo 100% seguro e criptografado',
                'Suporte disponível caso precise de ajuda',
              ].map(item => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#315C4B]/40 border border-[#6FB68A]/30 flex items-center justify-center shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#6FB68A]" />
                  </div>
                  <span className="text-white/55 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Lado direito */}
        <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-16">
          <div className="w-full max-w-sm">

            {/* ── Tela de sucesso ── */}
            {submitted ? (
              <div className="text-center space-y-6">
                <div className="flex justify-center">
                  <div className="w-20 h-20 rounded-3xl bg-[#315C4B]/30 border border-[#6FB68A]/20 flex items-center justify-center">
                    <MailCheck className="w-10 h-10 text-[#6FB68A]" />
                  </div>
                </div>

                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-[#82D39E]/10 border border-[#82D39E]/20 text-[#9BE8B5] text-[10px] font-bold uppercase tracking-[0.25em] mb-4">
                    E-mail enviado
                  </span>
                  <h1 className="text-2xl font-black text-white mb-2" style={{ fontFamily: 'var(--font-ecclesia)' }}>
                    Verifique sua caixa de entrada
                  </h1>
                  <p className="text-white/45 text-sm leading-relaxed">
                    Enviamos as instruções de redefinição para{' '}
                    <span className="text-white/80 font-semibold">{email}</span>.
                    O link expira em 24 horas.
                  </p>
                </div>

                <div
                  className="rounded-2xl border p-4 text-left space-y-2"
                  style={{ background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.08)' }}
                >
                  <p className="text-white/40 text-xs font-semibold uppercase tracking-wider mb-3">Próximos passos</p>
                  {[
                    'Abra o e-mail do Ecclesia',
                    'Clique em "Redefinir senha"',
                    'Crie uma nova senha segura',
                    'Faça login normalmente',
                  ].map((step, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#315C4B]/50 border border-[#6FB68A]/20 flex items-center justify-center shrink-0">
                        <span className="text-[#6FB68A] text-[9px] font-black">{i + 1}</span>
                      </div>
                      <span className="text-white/50 text-xs">{step}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  <button
                    onClick={() => { setSubmitted(false); setEmail('') }}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm text-white/60 border transition-all duration-300 hover:text-white hover:bg-white/[0.04]"
                    style={{ borderColor: 'rgba(255,255,255,0.09)' }}
                  >
                    Tentar outro e-mail
                  </button>

                  <Link
                    to="/login"
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm text-white transition-all duration-300 hover:-translate-y-0.5"
                    style={{ background: 'linear-gradient(135deg, #315C4B, #1E6B4B)', boxShadow: '0 6px 24px rgba(49,92,75,0.40)' }}
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Voltar para o login
                  </Link>
                </div>

                <p className="text-white/20 text-xs">
                  Não recebeu? Verifique sua pasta de spam ou tente outro e-mail.
                </p>
              </div>

            ) : (

              /* ── Formulário ── */
              <>
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-6">
                    <Link to="/login" className="text-white/40 hover:text-white/70 transition-colors text-sm flex items-center gap-1">
                      <ArrowLeft className="w-3.5 h-3.5" /> Voltar
                    </Link>
                  </div>

                  <span className="inline-block px-3 py-1 rounded-full bg-[#82D39E]/10 border border-[#82D39E]/20 text-[#9BE8B5] text-[10px] font-bold uppercase tracking-[0.25em] mb-4">
                    Recuperar acesso
                  </span>
                  <h1 className="text-3xl font-black text-white mb-2" style={{ fontFamily: 'var(--font-ecclesia)' }}>
                    Esqueceu sua senha?
                  </h1>
                  <p className="text-white/45 text-sm leading-relaxed">
                    Sem problema. Digite seu e-mail cadastrado e enviaremos um link para você criar uma nova senha.
                  </p>
                </div>

                {error && (
                  <div className="mb-4 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-white/55 text-xs font-semibold uppercase tracking-wider mb-2">
                      E-mail cadastrado
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/25" />
                      <input
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className="w-full rounded-xl border pl-11 pr-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none transition-colors"
                        style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.09)' }}
                        onFocus={e => e.currentTarget.style.borderColor = '#315C4B'}
                        onBlur={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.09)'}
                        placeholder="seu@email.com"
                        required
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm text-white transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{ background: 'linear-gradient(135deg, #315C4B, #1E6B4B)', boxShadow: '0 6px 24px rgba(49,92,75,0.40)' }}
                  >
                    {isLoading
                      ? <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      : <><span>Enviar link de redefinição</span><ArrowRight className="w-4 h-4" /></>
                    }
                  </button>
                </form>

                <p className="text-center text-white/35 text-sm mt-8">
                  Lembrou a senha?{' '}
                  <Link to="/login" className="text-[#6FB68A] hover:text-[#D7B36A] font-semibold transition-colors">
                    Fazer login
                  </Link>
                </p>
              </>
            )}

          </div>
        </div>

      </main>

      <Footer />
    </div>
  )
}