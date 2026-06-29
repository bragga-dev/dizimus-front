// src/components/member/modals/AddressModal.jsx
import { useState } from 'react'
import { Check } from 'lucide-react'
import { Modal, Field, SelectField, ActionButton } from '@/components/ui/dashboard'
import { createMemberAddress, updateMemberAddress } from '@/services/api/member'

const STATES = [
  'AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS',
  'MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC',
  'SP','SE','TO',
].map((s) => ({ value: s, label: s }))

export function AddressModal({ address, onClose, onSave, onError }) {
  const isNew = !address?.id

  const [form, setForm] = useState({
    cep:        address?.cep        ?? '',
    road:       address?.road       ?? '',
    number:     address?.number     ?? '',
    district:   address?.district   ?? '',
    city:       address?.city       ?? '',
    state:      address?.state      ?? '',
    country:    address?.country    ?? 'Brasil',
    complement: address?.complement ?? '',
    principal:  address?.principal  ?? true,
  })
  const [loading, setLoading] = useState(false)
  const [cepLoading, setCepLoading] = useState(false)

  const set = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  // Auto-preenchimento via ViaCEP
  const fetchCEP = async () => {
    const digits = form.cep.replace(/\D/g, '')
    if (digits.length !== 8) return
    setCepLoading(true)
    try {
      const res = await fetch(`https://viacep.com.br/ws/${digits}/json/`)
      const d = await res.json()
      if (!d.erro) {
        setForm((f) => ({
          ...f,
          road:     d.logradouro || f.road,
          district: d.bairro     || f.district,
          city:     d.localidade || f.city,
          state:    d.uf         || f.state,
        }))
      }
    } catch { /* silencia */ }
    finally { setCepLoading(false) }
  }

  const handleSave = async () => {
    setLoading(true)
    try {
      const updated = isNew
        ? await createMemberAddress(form)
        : await updateMemberAddress(address.id, form)
      onSave(updated)
    } catch (err) {
      onError?.(err?.message || 'Erro ao salvar endereço')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Modal title={isNew ? 'Adicionar endereço' : 'Editar endereço'} onClose={onClose} size="lg">
      <div className="space-y-4">
        {/* CEP + botão */}
        <div className="grid grid-cols-3 gap-3">
          <div className="col-span-2">
            <Field label="CEP" name="cep" value={form.cep} onChange={set} placeholder="00000-000" />
          </div>
          <div className="flex items-end">
            <ActionButton
              variant="ghost"
              size="md"
              loading={cepLoading}
              onClick={fetchCEP}
              className="w-full py-2.5 border border-white/10 hover:border-white/20"
            >
              {cepLoading ? 'Buscando...' : 'Buscar CEP'}
            </ActionButton>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div className="col-span-2">
            <Field label="Logradouro" name="road"   value={form.road}   onChange={set} placeholder="Rua, Av., Praça..." />
          </div>
          <Field label="Número" name="number" value={form.number} onChange={set} placeholder="123" />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Field label="Bairro"      name="district"   value={form.district}   onChange={set} placeholder="Centro"       />
          <Field label="Complemento" name="complement"  value={form.complement}  onChange={set} placeholder="Apto, Bloco..." />
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div className="col-span-2">
            <Field label="Cidade" name="city" value={form.city} onChange={set} placeholder="São Paulo" />
          </div>
          <SelectField label="Estado" name="state" value={form.state} onChange={set} options={STATES} placeholder="UF" />
        </div>

        <ActionButton variant="save" loading={loading} onClick={handleSave} icon={!loading ? Check : undefined}>
          {loading ? 'Salvando...' : 'Salvar endereço'}
        </ActionButton>
      </div>
    </Modal>
  )
}