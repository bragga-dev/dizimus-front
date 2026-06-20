// src/pages/Register/RegisterChoice.jsx
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Building2, Users, ArrowRight, Check } from 'lucide-react'
import Header from '@/components/layout/header/Header'
import Footer from '@/components/layout/Footer'
import capaImg from '@/assets/capaIMG.avif'

export default function RegisterChoice() 
{
  const navigate = useNavigate()
  const [selected, setSelected] = useState(null)

  const handleContinue = () => 
  {
      if (selected === 'church') 
      {
        navigate('/cadastro/igreja')
      } 
      else if (selected === 'member') 
      {
        navigate('/cadastro/membro')
      }
  }

  return (
    <div className="min-h-screen flex flex-col" style={{ background: '#0D1815' }}>
      <Header />

      <main className="flex-1 flex">

        {/* Lado esquerdo — imagem */}
        <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
          <img
            src={capaImg}
            alt="Comunidade em adoração"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, rgba(8,18,14,0.75) 0%, rgba(13,25,21,0.55) 60%, rgba(8,18,14,0.85) 100%)',
            }}
          />
          <div className="relative z-10 flex flex-col justify-between p-12 w-full">
            <div />
            <div>
              <blockquote
                className="text-3xl xl:text-4xl font-black text-white leading-tight mb-4"
                style={{ fontFamily: 'var(--font-ecclesia)' }}
              >
                "Comece hoje.{' '}
                <span style={{
                  background: 'linear-gradient(90deg, #6FB68A, #D7B36A)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>
                  Transforme sua gestão."
                </span>
              </blockquote>
              <p className="text-white/50 text-sm">
                Grátis para começar. Sem cartão de crédito.
              </p>
            </div>
            <div className="space-y-3">
              {[
                'Gestão de membros completa',
                'Controle financeiro transparente',
                'Suporte dedicado incluído',
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

        {/* Lado direito — escolha de perfil */}
        <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-16">
          <div className="w-full max-w-md">

            {/* Título */}
            <div className="mb-10 text-center lg:text-left">
              <span className="inline-block px-3 py-1 rounded-full bg-[#82D39E]/10 border border-[#82D39E]/20 text-[#9BE8B5] text-[10px] font-bold uppercase tracking-[0.25em] mb-4">
                Criar conta grátis
              </span>
              <h1
                className="text-3xl font-black text-white mb-2"
                style={{ fontFamily: 'var(--font-ecclesia)' }}
              >
                Escolha como deseja entrar
              </h1>
              <p className="text-white/45 text-sm">
                Selecione o perfil que melhor representa você
              </p>
            </div>

            {/* Cards de escolha */}
            <div className="space-y-4 mb-8">
              {/* Card Igreja */}
              <button
                onClick={() => setSelected('church')}
                className={`w-full p-6 rounded-2xl border-2 text-left transition-all duration-300 group ${
                  selected === 'church'
                    ? 'border-[#6FB68A] bg-[#315C4B]/20'
                    : 'border-white/10 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/20'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    selected === 'church'
                      ? 'bg-gradient-to-br from-[#315C4B] to-[#1E6B4B]'
                      : 'bg-white/5 group-hover:bg-white/10'
                  }`}>
                    <Building2 className={`w-6 h-6 ${
                      selected === 'church' ? 'text-[#9BE8B5]' : 'text-white/40'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-lg font-bold text-white">🏛️ SOU UMA IGREJA</h3>
                      {selected === 'church' && (
                        <div className="w-5 h-5 rounded-full bg-[#6FB68A] flex items-center justify-center">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                      )}
                    </div>
                    <p className="text-white/45 text-sm">
                      Cadastre sua igreja, gerencie membros, financeiro e ministérios.
                    </p>
                  </div>
                </div>
              </button>

              {/* Card Membro */}
              <button
                onClick={() => setSelected('member')}
                className={`w-full p-6 rounded-2xl border-2 text-left transition-all duration-300 group ${
                  selected === 'member'
                    ? 'border-[#6FB68A] bg-[#315C4B]/20'
                    : 'border-white/10 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/20'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    selected === 'member'
                      ? 'bg-gradient-to-br from-[#315C4B] to-[#1E6B4B]'
                      : 'bg-white/5 group-hover:bg-white/10'
                  }`}>
                    <Users className={`w-6 h-6 ${
                      selected === 'member' ? 'text-[#9BE8B5]' : 'text-white/40'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-lg font-bold text-white">👤 SOU UM MEMBRO</h3>
                      {selected === 'member' && (
                        <div className="w-5 h-5 rounded-full bg-[#6FB68A] flex items-center justify-center">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                      )}
                    </div>
                    <p className="text-white/45 text-sm">
                      Receba convites, acompanhe atividades e acesse sua área.
                    </p>
                  </div>
                </div>
              </button>
            </div>

            {/* Botão continuar */}
            <button
              onClick={handleContinue}
              disabled={!selected}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm text-white transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              style={{
                background: 'linear-gradient(135deg, #315C4B, #1E6B4B)',
                boxShadow: '0 6px 24px rgba(49,92,75,0.40)',
              }}
            >
              Continuar
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Link login */}
            <p className="text-center text-white/35 text-sm mt-8">
              Já tem uma conta?{' '}
              <Link
                to="/login"
                className="text-[#6FB68A] hover:text-[#D7B36A] font-semibold transition-colors"
              >
                Fazer login
              </Link>
            </p>

          </div>
        </div>

      </main>

      <Footer />
    </div>
  )
}