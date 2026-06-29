// src/components/member/modals/PersonalModal.jsx
import { useState } from 'react'
import { Modal, Field, SelectField, ActionButton } from '@/components/ui/dashboard'
import { updateMemberProfile } from '@/services/api/member'
import { Check, User, Calendar, CreditCard, Briefcase, Heart, Users, AlertCircle } from 'lucide-react'

const GENDER_OPTIONS = [
  { value: 'M', label: 'Masculino' },
  { value: 'F', label: 'Feminino' },
  { value: 'O', label: 'Outro' },
  { value: 'N', label: 'Prefiro não informar' },
]

const MARITAL_OPTIONS = [
  { value: 'single', label: 'Solteiro(a)' },
  { value: 'married', label: 'Casado(a)' },
  { value: 'divorced', label: 'Divorciado(a)' },
  { value: 'widowed', label: 'Viúvo(a)' },
  { value: 'separated', label: 'Separado(a)' },
]

export function PersonalModal({ profile, onClose, onSave, onError }) {
  const [form, setForm] = useState({
    first_name: profile?.first_name ?? '',
    last_name: profile?.last_name ?? '',
    cpf: profile?.cpf ?? '',
    date_of_birth: profile?.date_of_birth ?? '',
    gender: profile?.gender ?? '',
    marital_status: profile?.marital_status ?? '',
    profession: profile?.profession ?? '',
  })

  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    // Limpa erro do campo ao digitar
    if (errors[name]) {
      setErrors((e) => ({ ...e, [name]: '' }))
    }
  }

  const validate = () => {
    const newErrors = {}

    if (!form.first_name?.trim()) {
      newErrors.first_name = 'Nome é obrigatório'
    }

    if (!form.last_name?.trim()) {
      newErrors.last_name = 'Sobrenome é obrigatório'
    }

    if (form.cpf && !/^\d{11}$/.test(form.cpf.replace(/\D/g, ''))) {
      newErrors.cpf = 'CPF inválido (apenas números)'
    }

    if (form.date_of_birth) {
      const birthDate = new Date(form.date_of_birth)
      const today = new Date()
      const age = today.getFullYear() - birthDate.getFullYear()
      if (age < 18) {
        newErrors.date_of_birth = 'Deve ter pelo menos 18 anos'
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSave = async () => {
    if (!validate()) return

    setLoading(true)
    try {
      const payload = {
        first_name: form.first_name.trim(),
        last_name: form.last_name.trim(),
        cpf: form.cpf?.replace(/\D/g, ''),
        date_of_birth: form.date_of_birth || undefined,
        gender: form.gender || undefined,
        marital_status: form.marital_status || undefined,
        profession: form.profession || undefined,
      }

      const updated = await updateMemberProfile(payload)
      onSave(updated)
    } catch (err) {
      onError?.(err?.message || 'Erro ao atualizar dados pessoais')
    } finally {
      setLoading(false)
    }
  }

  const formatCPF = (value) => {
    const digits = value.replace(/\D/g, '')
    if (digits.length <= 3) return digits
    if (digits.length <= 6) return `${digits.slice(0, 3)}.${digits.slice(3)}`
    if (digits.length <= 9) return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6)}`
    return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6, 9)}-${digits.slice(9, 11)}`
  }

  const handleCPFChange = (e) => {
    const formatted = formatCPF(e.target.value)
    setForm((f) => ({ ...f, cpf: formatted }))
    if (errors.cpf) {
      setErrors((e) => ({ ...e, cpf: '' }))
    }
  }

  return (
    <Modal title="Dados Pessoais" onClose={onClose} size="lg">
      <div className="space-y-6">
        {/* Cabeçalho com ícone */}
        <div className="flex items-center gap-3 pb-4 border-b border-gray-700">
          <div className="p-2 bg-blue-500/10 rounded-lg">
            <User className="w-5 h-5 text-blue-400" />
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-200">
              Informações do associado
            </h3>
            <p className="text-xs text-gray-400">
              Mantenha os dados sempre atualizados
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5">
          {/* Nome e Sobrenome */}
          <div className="grid grid-cols-2 gap-3">
            <Field
              label="Nome *"
              name="first_name"
              value={form.first_name}
              onChange={handleChange}
              placeholder="João"
              error={errors.first_name}
              icon={<User className="w-4 h-4 text-gray-400" />}
              className="text-gray-900 bg-white"
            />
            <Field
              label="Sobrenome *"
              name="last_name"
              value={form.last_name}
              onChange={handleChange}
              placeholder="Silva"
              error={errors.last_name}
              className="text-gray-900 bg-white"
            />
          </div>

          {/* CPF */}
          <Field
            label="CPF"
            name="cpf"
            value={form.cpf}
            onChange={handleCPFChange}
            placeholder="000.000.000-00"
            error={errors.cpf}
            icon={<CreditCard className="w-4 h-4 text-gray-400" />}
            hint="Digite apenas números (formatação automática)"
            maxLength={14}
            className="text-gray-900 bg-white"
          />

          {/* Data de Nascimento */}
          <Field
            label="Data de Nascimento"
            name="date_of_birth"
            value={form.date_of_birth}
            onChange={handleChange}
            type="date"
            error={errors.date_of_birth}
            icon={<Calendar className="w-4 h-4 text-gray-400" />}
            className="text-gray-900 bg-white"
          />

          {/* Separador: Campos Adicionais */}
          <div className="pt-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-2">
                <div className="p-1 bg-purple-500/10 rounded">
                  <Briefcase className="w-4 h-4 text-purple-400" />
                </div>
                <span className="text-xs font-medium text-gray-300">Informações complementares</span>
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-gray-700 to-transparent" />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <SelectField
                label="Gênero"
                name="gender"
                value={form.gender}
                onChange={handleChange}
                options={GENDER_OPTIONS}
                placeholder="Selecione..."
                icon={<Heart className="w-4 h-4 text-gray-400" />}
                className="text-gray-900 bg-white"
              />
              <SelectField
                label="Estado Civil"
                name="marital_status"
                value={form.marital_status}
                onChange={handleChange}
                options={MARITAL_OPTIONS}
                placeholder="Selecione..."
                icon={<Users className="w-4 h-4 text-gray-400" />}
                className="text-gray-900 bg-white"
              />
            </div>

            <div className="mt-3">
              <Field
                label="Profissão"
                name="profession"
                value={form.profession}
                onChange={handleChange}
                placeholder="Ex: Engenheiro, Médico, Professor..."
                icon={<Briefcase className="w-4 h-4 text-gray-400" />}
                className="text-gray-900 bg-white"
              />
            </div>
          </div>

          {/* Campos obrigatórios */}
          <div className="flex items-center gap-4 pt-1">
            <p className="text-xs text-gray-400">* Campos obrigatórios</p>
            <div className="flex items-center gap-1 text-xs text-yellow-400/70">
              <AlertCircle className="w-3 h-3" />
              <span>Dados sensíveis protegidos</span>
            </div>
          </div>

          {/* Botões de Ação */}
          <div className="flex gap-3 pt-4 border-t border-gray-700">
            <ActionButton
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Cancelar
            </ActionButton>
            <ActionButton
              variant="save"
              loading={loading}
              onClick={handleSave}
              icon={!loading ? Check : undefined}
              className="flex-[2] bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium shadow-lg shadow-blue-600/20"
            >
              {loading ? 'Salvando...' : 'Salvar Alterações'}
            </ActionButton>
          </div>
        </div>
      </div>
    </Modal>
  )
}