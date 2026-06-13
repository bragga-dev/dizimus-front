// src/pages/Register/RegisterMember.jsx
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Mail, Lock, Eye, EyeOff, ArrowRight, Users } from 'lucide-react'
import Header from '@/components/layout/header/Header'
import Footer from '@/components/layout/Footer'
import capaImg from '@/assets/capaIMG.avif'
import { register } from '@/services/api/auth'
import { useAuth } from '@/context/AuthContext'
import { parseApiError } from '@/hooks/useApiError'

export default function RegisterMember() {
  const navigate = useNavigate()
  const { saveSession } = useAuth()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    role: 'Membro',
  })

  const update = (field, value) => setFormData(prev => ({ ...prev, [field]: value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (formData.password !== formData.confirmPassword) {
      setError('As senhas não coincidem.')
      return
    }
    if (formData.password.length < 8) {
      setError('A senha deve ter no mínimo 8 caracteres.')
      return
    }

    setIsLoading(true)
    try {
      const data = await register({
        email: formData.email,
        password: formData.password,
        role: formData.role,
      })
      saveSession(data)
      navigate('/dashboard')
    } catch (err) {
      setError(parseApiError(err))
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

        <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
          <img src={capaImg} alt="Comunidade em adoração" className="absolute inset-0 w-full h-full object-cover object-center" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(8,18,14,0.75) 0%, rgba(13,25,21,0.55) 60%, rgba(8,18,14,0.85) 100%)' }} />
          <div className="relative z-10 flex flex-col justify-between p-12 w-full">
            <div />
            <div>
              <blockquote className="text-3xl xl:text-4xl font-black text-white leading-tight mb-4" style={{ fontFamily: 'var(--font-ecclesia)' }}>
                "Faça parte de uma comunidade.{' '}
                <span style={{ background: 'linear-gradient(90deg, #6FB68A, #D7B36A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Conecte-se com sua igreja."
                </span>
              </blockquote>
              <p className="text-white/50 text-sm">Acesse conteúdos, eventos e mantenha-se conectado.</p>
            </div>
            <div className="space-y-3">
              {['Acompanhe atividades da igreja', 'Receba notificações importantes', 'Participe de eventos e ministérios'].map(item => (
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

        <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-16">
          <div className="w-full max-w-sm">

            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Link to="/cadastro" className="text-white/40 hover:text-white/70 transition-colors text-sm">← Voltar</Link>
                <span className="text-white/20 text-xs">|</span>
                <span className="text-[#6FB68A] text-xs font-semibold uppercase tracking-wider">Cadastro de Membro</span>
              </div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#315C4B] to-[#1E6B4B] flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <h1 className="text-2xl font-black text-white" style={{ fontFamily: 'var(--font-ecclesia)' }}>Cadastre-se como Membro</h1>
              </div>
              <p className="text-white/45 text-sm">Preencha os dados abaixo para criar sua conta</p>
            </div>

            {/* Erro da API */}
            {error && (
              <div className="mb-4 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm whitespace-pre-line">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">

              <div>
                <label className="block text-white/55 text-xs font-semibold uppercase tracking-wider mb-2">E-mail</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/25" />
                  <input type="email" value={formData.email} onChange={e => update('email', e.target.value)}
                    className={`${inputClass} pl-11`} style={inputStyle} onFocus={onFocus} onBlur={onBlur}
                    placeholder="seu@email.com" required />
                </div>
              </div>

              <div>
                <label className="block text-white/55 text-xs font-semibold uppercase tracking-wider mb-2">Senha</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/25" />
                  <input type={showPassword ? 'text' : 'password'} value={formData.password}
                    onChange={e => update('password', e.target.value)}
                    className={`${inputClass} pl-11 pr-11`} style={inputStyle} onFocus={onFocus} onBlur={onBlur}
                    placeholder="Mínimo 8 caracteres" minLength={8} required />
                  <button type="button" onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white/25 hover:text-white/50 transition-colors">
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-white/55 text-xs font-semibold uppercase tracking-wider mb-2">Confirmar senha</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/25" />
                  <input type={showConfirmPassword ? 'text' : 'password'} value={formData.confirmPassword}
                    onChange={e => update('confirmPassword', e.target.value)}
                    className={`${inputClass} pl-11 pr-11`} style={inputStyle} onFocus={onFocus} onBlur={onBlur}
                    placeholder="••••••••" required />
                  <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white/25 hover:text-white/50 transition-colors">
                    {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <input type="hidden" name="role" value={formData.role} />

              <p className="text-white/25 text-xs pt-2">
                Ao criar a conta, você concorda com nossos{' '}
                <Link to="/terms" className="text-[#6FB68A]/70 hover:text-[#6FB68A]">Termos</Link>
                {' '}e{' '}
                <Link to="/privacy" className="text-[#6FB68A]/70 hover:text-[#6FB68A]">Privacidade</Link>.
              </p>

              <button type="submit" disabled={isLoading}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm text-white transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-60"
                style={{ background: 'linear-gradient(135deg, #315C4B, #1E6B4B)', boxShadow: '0 6px 24px rgba(49,92,75,0.40)' }}>
                {isLoading
                  ? <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  : <><span>Criar conta como Membro</span><ArrowRight className="w-4 h-4" /></>
                }
              </button>

            </form>

            <p className="text-center text-white/35 text-sm mt-8">
              Já tem uma conta?{' '}
              <Link to="/login" className="text-[#6FB68A] hover:text-[#D7B36A] font-semibold transition-colors">Fazer login</Link>
            </p>

          </div>
        </div>

      </main>

      <Footer />
    </div>
  )
}