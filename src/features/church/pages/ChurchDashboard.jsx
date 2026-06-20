// src/features/church/pages/ChurchDashboard.jsx
import { useAuth } from '@/features/auth/hooks/useAuth'

export default function ChurchDashboard() {
  const { user } = useAuth()
  return (
    <div>
      <h1 className="text-2xl font-bold text-[var(--white)] mb-1">
        Painel da Igreja
      </h1>
      <p className="text-[var(--text-muted)] mb-6">Gerencie sua congregação.</p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { label: 'Membros Ativos', value: '0' },
          { label: 'Pendentes', value: '0' },
          { label: 'Líderes', value: '0' },
        ].map(({ label, value }) => (
          <div key={label} className="bg-[var(--surface)] rounded-xl p-5 border border-[var(--border)]">
            <p className="text-xs text-[var(--text-muted)] mb-2">{label}</p>
            <p className="text-2xl font-bold text-[var(--white)]">{value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}