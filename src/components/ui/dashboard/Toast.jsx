// src/components/ui/dashboard/Toast.jsx
import { useEffect } from 'react'
import { Check, AlertCircle, X } from 'lucide-react'

/**
 * Toast de feedback flutuante.
 * Auto-dismiss em 3.5s. Fecha também pelo botão X.
 */
export function Toast({ message, type = 'success', onClose }) {
  useEffect(() => {
    const t = setTimeout(onClose, 3500)
    return () => clearTimeout(t)
  }, [onClose])

  const isSuccess = type === 'success'

  return (
    <div
      className={[
        'fixed bottom-6 right-6 z-[200]',
        'flex items-center gap-3 px-4 py-3',
        'rounded-2xl shadow-2xl border text-sm font-medium',
        'animate-slide-up',
        isSuccess
          ? 'bg-[#1a0030] border-[#E0B14A]/30 text-white'
          : 'bg-[#1a0030] border-red-500/30 text-red-300',
      ].join(' ')}
    >
      {isSuccess
        ? <Check size={16} className="text-[#E0B14A] flex-shrink-0" />
        : <AlertCircle size={16} className="text-red-400 flex-shrink-0" />
      }
      <span>{message}</span>
      <button
        onClick={onClose}
        className="ml-2 text-white/40 hover:text-white transition-colors"
        aria-label="Fechar"
      >
        <X size={14} />
      </button>
    </div>
  )
}