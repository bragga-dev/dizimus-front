// src/pages/Login.jsx
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Mail, Lock, Eye, EyeOff, ArrowRight, Church } from 'lucide-react'
import Logo from '@/components/ui/logo/Logo'

export default function Login() {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isRegister, setIsRegister] = useState(false) // Alterna entre login e cadastro
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    churchName: '',
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simular requisição
    setTimeout(() => {
      setIsLoading(false)
      navigate('/dashboard') // Redirecionar após login
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0F14] via-[#0D1915] to-[#0A0F14] flex items-center justify-center p-6">
      
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#2A8A61] rounded-full blur-[120px] opacity-20" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#D4AF37] rounded-full blur-[140px] opacity-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#1E6B4B] rounded-full blur-[180px] opacity-[0.03]" />
      </div>

      {/* Main Card */}
      <div className="relative z-10 w-full max-w-md">
        
        {/* Logo e voltar */}
        <div className="mb-8 text-center">
          <Link to="/" className="inline-block">
            <Logo className="h-12 mx-auto" />
          </Link>
          <button
            onClick={() => navigate(-1)}
            className="mt-4 text-white/40 text-sm hover:text-white/60 transition-colors"
          >
            ← Voltar para o início
          </button>
        </div>

        {/* Card */}
        <div className="bg-white/[0.03] backdrop-blur-xl rounded-2xl border border-white/[0.08] p-8 shadow-2xl">
          
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#2A8A61] to-[#1E6B4B] flex items-center justify-center">
              <Church className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-black text-white mb-2">
              {isRegister ? 'Criar conta' : 'Bem-vindo de volta'}
            </h1>
            <p className="text-white/40 text-sm">
              {isRegister 
                ? 'Comece sua jornada com a Ecclesia' 
                : 'Acesse sua conta para continuar'}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            
            {isRegister && (
              <>
                {/* Nome completo */}
                <div>
                  <label className="block text-white/60 text-sm font-medium mb-2">
                    Nome completo
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white/[0.05] border border-white/[0.1] rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#2A8A61] transition-colors"
                      placeholder="Pastor João Silva"
                      required={isRegister}
                    />
                  </div>
                </div>

                {/* Nome da igreja */}
                <div>
                  <label className="block text-white/60 text-sm font-medium mb-2">
                    Nome da igreja
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={formData.churchName}
                      onChange={(e) => setFormData({ ...formData, churchName: e.target.value })}
                      className="w-full bg-white/[0.05] border border-white/[0.1] rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#2A8A61] transition-colors"
                      placeholder="Igreja Nova Aliança"
                      required={isRegister}
                    />
                  </div>
                </div>
              </>
            )}

            {/* Email */}
            <div>
              <label className="block text-white/60 text-sm font-medium mb-2">
                E-mail
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white/[0.05] border border-white/[0.1] rounded-xl pl-11 pr-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#2A8A61] transition-colors"
                  placeholder="seu@email.com"
                  required
                />
              </div>
            </div>

            {/* Senha */}
            <div>
              <label className="block text-white/60 text-sm font-medium mb-2">
                Senha
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full bg-white/[0.05] border border-white/[0.1] rounded-xl pl-11 pr-11 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#2A8A61] transition-colors"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/50"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {isRegister && (
              /* Confirmar senha */
              <div>
                <label className="block text-white/60 text-sm font-medium mb-2">
                  Confirmar senha
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    className="w-full bg-white/[0.05] border border-white/[0.1] rounded-xl pl-11 pr-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#2A8A61] transition-colors"
                    placeholder="••••••••"
                    required={isRegister}
                  />
                </div>
              </div>
            )}

            {/* Esqueceu senha - apenas login */}
            {!isRegister && (
              <div className="text-right">
                <Link to="/forgot-password" className="text-sm text-[#2A8A61] hover:text-[#D4AF37] transition-colors">
                  Esqueceu sua senha?
                </Link>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-[#2A8A61] to-[#1E6B4B] text-white font-bold py-3 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-[#2A8A61]/30 hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  {isRegister ? 'Criar conta' : 'Entrar'}
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/[0.08]" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-4 bg-transparent text-white/30">ou</span>
            </div>
          </div>

          {/* Google Login */}
          <button className="w-full flex items-center justify-center gap-3 border border-white/[0.15] rounded-xl py-3 text-white/70 hover:bg-white/[0.05] hover:text-white transition-all duration-300">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Continuar com Google
          </button>

          {/* Toggle between login and register */}
          <p className="text-center mt-6 text-white/40 text-sm">
            {isRegister ? 'Já tem uma conta?' : 'Não tem uma conta?'}
            {' '}
            <button
              onClick={() => setIsRegister(!isRegister)}
              className="text-[#2A8A61] hover:text-[#D4AF37] font-medium transition-colors"
            >
              {isRegister ? 'Fazer login' : 'Criar conta grátis'}
            </button>
          </p>
        </div>

        {/* Termos */}
        <p className="text-center text-white/25 text-xs mt-6">
          Ao continuar, você concorda com nossos{' '}
          <Link to="/terms" className="hover:text-white/40">Termos de uso</Link>
          {' '}e{' '}
          <Link to="/privacy" className="hover:text-white/40">Política de privacidade</Link>
        </p>
      </div>
    </div>
  )
}