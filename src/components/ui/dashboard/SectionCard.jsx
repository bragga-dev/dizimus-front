// src/components/ui/dashboard/SectionCard.jsx
import { Pencil } from 'lucide-react'
import { ActionButton } from './ActionButton'

/**
 * Card de seção do dashboard com cabeçalho padronizado.
 * Aceita qualquer conteúdo como children.
 */
export function SectionCard({ title, icon: Icon, onEdit, editLabel = 'Editar', children, headerRight, noPadding }) {
  return (
    <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl overflow-hidden">
      {/* Cabeçalho */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-white/5">
        <div className="flex items-center gap-2.5">
          {Icon && (
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#E0B14A]/10 flex-shrink-0">
              <Icon size={15} className="text-[#E0B14A]" />
            </div>
          )}
          <h3
            className="text-sm font-semibold text-white"
            style={{ fontFamily: 'var(--font-navbar)' }}
          >
            {title}
          </h3>
        </div>

        <div className="flex items-center gap-2">
          {headerRight}
          {onEdit && (
            <ActionButton variant="ghost" size="sm" icon={Pencil} onClick={onEdit}>
              <span className="hidden sm:inline">{editLabel}</span>
            </ActionButton>
          )}
        </div>
      </div>

      {/* Conteúdo */}
      <div className={noPadding ? '' : 'px-5 py-2'}>
        {children}
      </div>
    </div>
  )
}

/**
 * Linha de informação dentro de um SectionCard.
 */
export function InfoLine({ icon: Icon, label, value, empty = 'Não informado' }) {
  const hasValue = value !== null && value !== undefined && value !== ''
  return (
    <div className="flex items-start gap-3 py-3 border-b border-white/5 last:border-0">
      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-white/5">
        <Icon size={14} className="text-[#E0B14A]" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[11px] font-semibold text-white/40 uppercase tracking-wider">
          {label}
        </p>
        <p className={`text-sm mt-0.5 truncate ${hasValue ? 'text-white' : 'text-white/25 italic'}`}>
          {hasValue ? value : empty}
        </p>
      </div>
    </div>
  )
}