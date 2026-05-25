import { useEffect, useState } from 'react'
import {
  Church,
  LogIn,
  Menu,
  User,
  UserCircle2,
  X,
} from 'lucide-react'
import Logo from '../ui/logo/Logo'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  /**
   * Simulação de autenticação
   * depois isso virá do Context API/Auth
   */
  const isAuthenticated = false

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`
        fixed left-0 right-0 top-0 z-50
        transition-all duration-300
        ${
          scrolled
            ? 'border-b border-white/10 bg-[#140D24]/80 backdrop-blur-xl'
            : 'bg-transparent'
        }
      `}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <Logo size={24} />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-2 lg:flex">
          {['Início', 'Sobre', 'Planos', 'Contato'].map((item) => (
            <a
              key={item}
              href="#"
              className="
                rounded-xl px-4 py-2
                text-sm font-medium text-zinc-200
                transition-all
                hover:bg-white/10
                hover:text-white
              "
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Right Side */}
        <div className="hidden items-center gap-4 lg:flex">
          {/* Login */}
          <a
            href="#"
            className="
              flex items-center gap-2
              rounded-xl px-4 py-2
              text-sm font-medium text-zinc-200
              transition-all
              hover:bg-white/10
              hover:text-white
            "
          >
            <LogIn size={16} />

            Login
          </a>

          {/* User Status */}
          <button
            className="
              flex h-11 w-11 items-center justify-center
              rounded-2xl
              border border-white/10
              bg-white/5
              transition-all
              hover:bg-white/10
            "
          >
            {isAuthenticated ? (
              <UserCircle2 size={20} className="text-emerald-400" />
            ) : (
              <User size={20} className="text-zinc-300" />
            )}
          </button>

         
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-white lg:hidden"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="
            border-t border-white/10
            bg-[#140D24]/95
            px-6 py-6
            backdrop-blur-2xl
            lg:hidden
          "
        >
          <div className="flex flex-col gap-2">
            {['Início', 'Sobre', 'Planos', 'Contato'].map((item) => (
              <a
                key={item}
                href="#"
                className="
                  rounded-xl px-4 py-3
                  text-sm font-medium text-zinc-200
                  transition-all
                  hover:bg-white/5
                "
              >
                {item}
              </a>
            ))}

            <div className="mt-4 flex flex-col gap-3">
              <button
                className="
                  flex items-center justify-center gap-2
                  rounded-2xl
                  border border-white/10
                  py-3
                  text-sm font-semibold text-white
                "
              >
                <LogIn size={18} />

                Login
              </button>

              {/* User Status Mobile */}
              <div
                className="
                  mt-2 flex items-center justify-center gap-2
                  rounded-2xl
                  border border-white/10
                  bg-white/5
                  py-3
                "
              >
                {isAuthenticated ? (
                  <>
                    <UserCircle2
                      size={18}
                      className="text-emerald-400"
                    />

                    <span className="text-sm text-emerald-400">
                      Usuário logado
                    </span>
                  </>
                ) : (
                  <>
                    <User size={18} className="text-zinc-300" />

                    <span className="text-sm text-zinc-300">
                      Não autenticado
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}