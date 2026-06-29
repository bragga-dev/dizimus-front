// src/components/ui/dashboard/ActionButton.jsx
import { Loader2 } from 'lucide-react'

/**
 * Botão de ação padrão do dashboard.
 * variant: 'primary' | 'ghost' | 'danger' | 'warning' | 'save'
 * size: 'sm' | 'md'
 */
export function ActionButton({
  children,
  onClick,
  disabled,
  loading,
  variant = 'ghost',
  size = 'md',
  icon: Icon,
  type = 'button',
  className = '',
  title,
}) {
  const base = 'inline-flex items-center justify-center gap-1.5 font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed'

  const sizes = {
    sm: 'h-8 px-3 text-xs rounded-lg',
    md: 'h-9 px-4 text-sm rounded-xl',
  }

  const variants = {
    // Dourado — ação principal de seção
    primary: 'bg-[#E0B14A]/10 border border-[#E0B14A]/20 text-[#E0B14A] hover:bg-[#E0B14A]/20 hover:border-[#E0B14A]/40',
    // Fantasma neutro — editar
    ghost: 'text-white/50 hover:text-white hover:bg-white/8 border border-transparent hover:border-white/10',
    // Perigo — excluir
    danger: 'bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500/20 hover:border-red-500/40',
    // Aviso
    warning: 'bg-amber-500/10 border border-amber-500/20 text-amber-400 hover:bg-amber-500/20',
    // Salvar — gradiente dourado
    save: 'w-full bg-gradient-to-r from-[#E0B14A] to-[#c8973a] text-[#0c0620] font-semibold hover:opacity-90 py-3 rounded-xl',
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      title={title}
      className={[base, sizes[size] ?? sizes.md, variants[variant] ?? variants.ghost, className].join(' ')}
    >
      {loading
        ? <Loader2 size={size === 'sm' ? 13 : 15} className="animate-spin flex-shrink-0" />
        : Icon
          ? <Icon size={size === 'sm' ? 13 : 15} className="flex-shrink-0" />
          : null
      }
      {children}
    </button>
  )
}