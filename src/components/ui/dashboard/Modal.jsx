// src/components/ui/dashboard/Modal.jsx
import { useEffect } from 'react'
import { X } from 'lucide-react'

const SIZE_MAP = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
}

/**
 * Modal base reutilizável.
 * - Fecha com ESC ou clique no overlay
 * - Bottom sheet no mobile, centered no desktop
 * - Handle visual no mobile
 */
export function Modal({ title, onClose, children, size = 'md' }) {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Panel */}
      <div
        className={[
          'relative w-full',
          SIZE_MAP[size] ?? SIZE_MAP.md,
          'bg-gradient-to-b from-[#1e0035] to-[#0c0620]',
          'border border-[#E0B14A]/15',
          'rounded-t-3xl sm:rounded-3xl',
          'shadow-[0_25px_80px_rgba(0,0,0,0.6)]',
          'max-h-[92vh] overflow-y-auto',
        ].join(' ')}
      >
        {/* Handle — mobile only */}
        <div className="flex sm:hidden justify-center pt-3 pb-1">
          <div className="w-10 h-1 rounded-full bg-white/20" />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/5">
          <h2
            className="text-base font-semibold text-white"
            style={{ fontFamily: 'var(--font-navbar)' }}
          >
            {title}
          </h2>
          <button
            onClick={onClose}
            aria-label="Fechar modal"
            className="flex h-8 w-8 items-center justify-center rounded-xl text-white/40 hover:text-white hover:bg-white/10 transition-all"
          >
            <X size={16} />
          </button>
        </div>

        <div className="p-6">{children}</div>
      </div>
    </div>
  )
}