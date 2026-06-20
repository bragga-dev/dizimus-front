


import { useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { Lock, Eye, EyeOff, ArrowRight, CheckCircle2 } from 'lucide-react'
import Header from '@/components/layout/header/Header'
import Footer from '@/components/layout/Footer'
import capaImg from '@/assets/capaIMG.avif'
import { confirmPasswordReset } from '@/services/api/auth'
import { parseApiError } from '@/hooks/useApiError'

export default function ResetPassword() {
  const { uid, token } = useParams()
  const navigate = useNavigate()

  const [showPassword, setShowPassword] = useState(false)
  const [showPassword2, setShowPassword2] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [formData, setFormData] = useState({ new_password: '', new_password2: '' })

  const update = (field, value) => setFormData(prev => ({ ...prev, [field]: value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (formData.new_password !== formData.new_password2) {
      setError('As senhas não coincidem.')
      return
    }
    if (formData.new_password.length < 8) {
      setError('A senha deve ter no mínimo 8 caracteres.')
      return
    }

    setIsLoading(true)
    try {
      await confirmPasswordReset({
        uid,
        token,
        new_password: formData.new_password,
        new_password2: formData.new_password2,
      })
      setSuccess(true)
    } catch (err) {
      const { message } = parseApiError(err)
      setError(message)
    } finally {
      setIsLoading(false)
    }
  }

  const inputClass = "w-full rounded-xl border px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none transition-colors"
  const inputStyle = { background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.09)' }
  const onFocus = e => e.currentTarget.style.borderColor = '#315C4B'
  const onBlur = e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.09)'

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
                "Uma nova senha,{' '}
                <span style={{ background: 'linear-gradient(90deg, #6FB68A, #D7B36A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  um novo começo."
                </span>
              </blockquote>
              <p className="text-white/50 text-sm">Escolha uma senha forte para proteger sua conta.</p>
            </div>
            <div className="space-y-3">
              {[
                'Mínimo de 8 caracteres',
                'Use letras maiúsculas e minúsculas',
                'Inclua números e símbolos',
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
            {success ? (
              <div className="text-center space-y-6">
                <div className="flex justify-center">
                  <div className="w-20 h-20 rounded-3xl bg-[#315C4B]/30 border border-[#6FB68A]/20 flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10 text-[#6FB68A]" />
                  </div>
                </div>
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-[#82D39E]/10 border border-[#82D39E]/20 text-[#9BE8B5] text-[10px] font-bold uppercase tracking-[0.25em] mb-4">
                    Senha redefinida
                  </span>
                  <h1 className="text-2xl font-black text-white mb-2" style={{ fontFamily: 'var(--font-ecclesia)' }}>
                    Senha alterada com sucesso!
                  </h1>
                  <p className="text-white/45 text-sm leading-relaxed">
                    Sua senha foi redefinida. Agora você pode fazer login com a nova senha.
                  </p>
                </div>
                <button
                  onClick={() => navigate('/login')}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm text-white transition-all duration-300 hover:-translate-y-0.5"
                  style={{ background: 'linear-gradient(135deg, #315C4B, #1E6B4B)', boxShadow: '0 6px 24px rgba(49,92,75,0.40)' }}
                >
                  <ArrowRight className="w-4 h-4" />
                  Ir para o login
                </button>
              </div>

            ) : (

              /* ── Formulário ── */
              <>
                <div className="mb-8">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#82D39E]/10 border border-[#82D39E]/20 text-[#9BE8B5] text-[10px] font-bold uppercase tracking-[0.25em] mb-4">
                    Redefinir senha
                  </span>
                  <h1 className="text-3xl font-black text-white mb-2" style={{ fontFamily: 'var(--font-ecclesia)' }}>
                    Crie uma nova senha
                  </h1>
                  <p className="text-white/45 text-sm">Digite e confirme sua nova senha abaixo.</p>
                </div>

                {error && (
                  <div className="mb-4 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm whitespace-pre-line">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-white/55 text-xs font-semibold uppercase tracking-wider mb-2">Nova senha</label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/25" />
                      <input
                        type={showPassword ? 'text' : 'password'}
                        value={formData.new_password}
                        onChange={e => update('new_password', e.target.value)}
                        className={`${inputClass} pl-11 pr-11`}
                        style={inputStyle} onFocus={onFocus} onBlur={onBlur}
                        placeholder="Mínimo 8 caracteres"
                        minLength={8} required
                      />
                      <button type="button" onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/25 hover:text-white/50 transition-colors">
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/55 text-xs font-semibold uppercase tracking-wider mb-2">Confirmar nova senha</label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/25" />
                      <input
                        type={showPassword2 ? 'text' : 'password'}
                        value={formData.new_password2}
                        onChange={e => update('new_password2', e.target.value)}
                        className={`${inputClass} pl-11 pr-11`}
                        style={inputStyle} onFocus={onFocus} onBlur={onBlur}
                        placeholder="••••••••"
                        required
                      />
                      <button type="button" onClick={() => setShowPassword2(!showPassword2)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/25 hover:text-white/50 transition-colors">
                        {showPassword2 ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
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
                      : <><span>Redefinir senha</span><ArrowRight className="w-4 h-4" /></>
                    }
                  </button>
                </form>

                <p className="text-center text-white/35 text-sm mt-8">
                  Lembrou a senha?{' '}
                  <Link to="/login" className="text-[#6FB68A] hover:text-[#D7B36A] font-semibold transition-colors">Fazer login</Link>
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