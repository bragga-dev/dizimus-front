// src/components/member/modals/ContactModal.jsx
import { useState } from 'react'
import { Mail, Check } from 'lucide-react'
import { Modal, Field, ActionButton } from '@/components/ui/dashboard'
import { updateMemberProfile } from '@/services/api/member'

export function ContactModal({ profile, email, onClose, onSave, onError }) {
  const [form, setForm] = useState({
    phone:    profile?.phone    ?? '',
    username: profile?.username ?? '',
  })
  const [loading, setLoading] = useState(false)

  const set = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSave = async () => {
    setLoading(true)
    try {
      const updated = await updateMemberProfile({ phone: form.phone, username: form.username })
      onSave(updated)
    } catch (err) {
      onError?.(err?.message || 'Erro ao atualizar contato')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Modal title="Informações de contato" onClose={onClose} size="sm">
      <div className="space-y-4">
        {/* E-mail — somente leitura */}
        <div>
          <label className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-1.5">
            E-mail
          </label>
          <div className="flex items-center gap-2 w-full bg-white/3 border border-white/8 rounded-xl px-4 py-2.5">
            <Mail size={14} className="text-white/25 flex-shrink-0" />
            <span className="text-sm text-white/40 truncate">{email}</span>
          </div>
          <p className="mt-1 text-xs text-white/25">Alterado em Configurações de conta</p>
        </div>

        <Field label="Telefone"       name="phone"    value={form.phone}    onChange={set} placeholder="(00) 00000-0000" type="tel" />
        <Field label="Nome de usuário" name="username" value={form.username} onChange={set} placeholder="@seuusuario" hint="Usado na URL pública do seu perfil" />

        <ActionButton variant="save" loading={loading} onClick={handleSave} icon={!loading ? Check : undefined}>
          {loading ? 'Salvando...' : 'Salvar alterações'}
        </ActionButton>
      </div>
    </Modal>
  )
}