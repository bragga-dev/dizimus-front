// src/components/member/modals/PersonalModal.jsx
import { useState } from 'react'
import { Modal, Field, SelectField, ActionButton } from '@/components/ui/dashboard'
import { updateMemberProfile } from '@/services/api/member'
import { Check } from 'lucide-react'

const GENDER_OPTIONS = [
  { value: 'M', label: 'Masculino' },
  { value: 'F', label: 'Feminino' },
  { value: 'O', label: 'Outro' },
]

const MARITAL_OPTIONS = [
  { value: 'single',   label: 'Solteiro(a)' },
  { value: 'married',  label: 'Casado(a)'   },
  { value: 'divorced', label: 'Divorciado(a)'},
  { value: 'widowed',  label: 'Viúvo(a)'    },
]

export function PersonalModal({ profile, onClose, onSave, onError }) {
  const [form, setForm] = useState({
    first_name:     profile?.first_name     ?? '',
    last_name:      profile?.last_name      ?? '',
    cpf:            profile?.cpf            ?? '',
    date_of_birth:  profile?.date_of_birth  ?? '',
    // Campos futuros — prontos para quando a API suportar
    gender:         profile?.gender         ?? '',
    marital_status: profile?.marital_status ?? '',
    profession:     profile?.profession     ?? '',
  })
  const [loading, setLoading] = useState(false)

  const set = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSave = async () => {
    setLoading(true)
    try {
      const payload = {
        first_name:    form.first_name,
        last_name:     form.last_name,
        cpf:           form.cpf,
        date_of_birth: form.date_of_birth || undefined,
      }
      const updated = await updateMemberProfile(payload)
      onSave(updated)
    } catch (err) {
      onError?.(err?.message || 'Erro ao atualizar dados')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Modal title="Dados pessoais" onClose={onClose} size="md">
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Field label="Nome"      name="first_name" value={form.first_name} onChange={set} placeholder="João"  />
          <Field label="Sobrenome" name="last_name"  value={form.last_name}  onChange={set} placeholder="Silva" />
        </div>
        <Field label="CPF" name="cpf" value={form.cpf} onChange={set} placeholder="000.000.000-00" hint="Apenas números" />
        <Field label="Data de nascimento" name="date_of_birth" value={form.date_of_birth} onChange={set} type="date" />

        {/* Campos futuros — desabilitados visualmente até o backend suportar */}
        <div className="pt-3 border-t border-white/5">
          <div className="flex items-center gap-2 mb-3">
            <p className="text-xs text-white/25 uppercase tracking-wider font-semibold">Em breve</p>
            <div className="flex-1 h-px bg-white/5" />
          </div>
          <div className="grid grid-cols-2 gap-3 opacity-40 pointer-events-none select-none">
            <SelectField label="Sexo"         name="gender"         value={form.gender}         onChange={set} options={GENDER_OPTIONS}  />
            <SelectField label="Estado civil" name="marital_status" value={form.marital_status} onChange={set} options={MARITAL_OPTIONS} />
          </div>
          <div className="mt-3 opacity-40 pointer-events-none select-none">
            <Field label="Profissão" name="profession" value={form.profession} onChange={set} placeholder="Ex: Engenheiro" />
          </div>
        </div>

        <ActionButton variant="save" loading={loading} onClick={handleSave} icon={!loading ? Check : undefined}>
          {loading ? 'Salvando...' : 'Salvar alterações'}
        </ActionButton>
      </div>
    </Modal>
  )
}