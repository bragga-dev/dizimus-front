// src/features/admin/pages/AdminDashboard.jsx
export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-[var(--white)] mb-1">Painel Administrativo</h1>
      <p className="text-[var(--text-muted)] mb-6">Visão geral do sistema.</p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { label: 'Usuários', value: '0' },
          { label: 'Igrejas', value: '0' },
          { label: 'Membros', value: '0' },
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