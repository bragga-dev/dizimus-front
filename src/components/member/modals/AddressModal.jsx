// src/components/member/modals/AddressModal.jsx
import { useState, useEffect } from 'react'
import { Check, MapPin, Home, Building, Map, Search, Loader2 } from 'lucide-react'
import { Modal, Field, SelectField, ActionButton } from '@/components/ui/dashboard'
import { createMemberAddress, updateMemberAddress } from '@/services/api/member'

const STATES = [
  'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS',
  'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC',
  'SP', 'SE', 'TO',
].map((s) => ({ value: s, label: s }))

export function AddressModal({ address, onClose, onSave, onError }) {
  const isNew = !address?.id

  const [form, setForm] = useState({
    cep: address?.cep ?? '',
    road: address?.road ?? '',
    number: address?.number ?? '',
    district: address?.district ?? '',
    city: address?.city ?? '',
    state: address?.state ?? '',
    country: address?.country ?? 'Brasil',
    complement: address?.complement ?? '',
    principal: address?.principal ?? false,
  })

  const [loading, setLoading] = useState(false)
  const [cepLoading, setCepLoading] = useState(false)
  const [cepError, setCepError] = useState('')

  // Auto-busca CEP com debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      const digits = form.cep.replace(/\D/g, '')
      if (digits.length === 8) {
        fetchCEP(digits)
      }
    }, 500)

    return () => clearTimeout(timer)
  }, [form.cep])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm((f) => ({
      ...f,
      [name]: type === 'checkbox' ? checked : value,
    }))
    if (name === 'cep') setCepError('')
  }

  const fetchCEP = async (digits) => {
    setCepLoading(true)
    setCepError('')
    
    try {
      const res = await fetch(`https://viacep.com.br/ws/${digits}/json/`)
      const data = await res.json()
      
      if (data.erro) {
        setCepError('CEP não encontrado')
        return
      }

      setForm((f) => ({
        ...f,
        road: data.logradouro || f.road,
        district: data.bairro || f.district,
        city: data.localidade || f.city,
        state: data.uf || f.state,
      }))
    } catch (error) {
      setCepError('Erro ao buscar CEP')
    } finally {
      setCepLoading(false)
    }
  }

  const handleSave = async () => {
    // Validação básica
    if (!form.road || !form.number || !form.city || !form.state) {
      onError?.('Preencha todos os campos obrigatórios')
      return
    }

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
    <Modal title={isNew ? 'Novo Endereço' : 'Editar Endereço'} onClose={onClose} size="lg">
      <div className="space-y-6">
        {/* Cabeçalho com ícone */}
        <div className="flex items-center gap-3 pb-4 border-b border-gray-700">
          <div className="p-2 bg-blue-500/10 rounded-lg">
            <MapPin className="w-5 h-5 text-blue-400" />
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-200">
              {isNew ? 'Adicionar novo endereço' : 'Atualizar endereço'}
            </h3>
            <p className="text-xs text-gray-400">
              Preencha os dados do endereço do associado
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {/* CEP com busca automática */}
          <div className="relative">
            <Field
              label="CEP"
              name="cep"
              value={form.cep}
              onChange={handleChange}
              placeholder="00000-000"
              error={cepError}
              icon={<Search className="w-4 h-4 text-gray-400" />}
              rightIcon={cepLoading && <Loader2 className="w-4 h-4 animate-spin text-blue-400" />}
              className="text-gray-900 bg-white"
            />
            {form.cep && form.cep.replace(/\D/g, '').length === 8 && !cepError && (
              <p className="mt-1 text-xs text-green-400 flex items-center gap-1">
                <Check className="w-3 h-3" />
                CEP válido
              </p>
            )}
          </div>

          {/* Logradouro e Número */}
          <div className="grid grid-cols-3 gap-3">
            <div className="col-span-2">
              <Field
                label="Logradouro *"
                name="road"
                value={form.road}
                onChange={handleChange}
                placeholder="Rua, Av., Praça..."
                icon={<Home className="w-4 h-4 text-gray-400" />}
                className="text-gray-900 bg-white"
              />
            </div>
            <Field
              label="Número *"
              name="number"
              value={form.number}
              onChange={handleChange}
              placeholder="123"
              className="text-gray-900 bg-white"
            />
          </div>

          {/* Bairro e Complemento */}
          <div className="grid grid-cols-2 gap-3">
            <Field
              label="Bairro"
              name="district"
              value={form.district}
              onChange={handleChange}
              placeholder="Centro"
              className="text-gray-900 bg-white"
            />
            <Field
              label="Complemento"
              name="complement"
              value={form.complement}
              onChange={handleChange}
              placeholder="Apto, Bloco..."
              className="text-gray-900 bg-white"
            />
          </div>

          {/* Cidade e Estado */}
          <div className="grid grid-cols-3 gap-3">
            <div className="col-span-2">
              <Field
                label="Cidade *"
                name="city"
                value={form.city}
                onChange={handleChange}
                placeholder="São Paulo"
                icon={<Building className="w-4 h-4 text-gray-400" />}
                className="text-gray-900 bg-white"
              />
            </div>
            <SelectField
              label="Estado *"
              name="state"
              value={form.state}
              onChange={handleChange}
              options={STATES}
              placeholder="UF"
              className="text-gray-900 bg-white"
            />
          </div>

          {/* País (campo oculto) */}
          <input type="hidden" name="country" value={form.country} />

          {/* Checkbox Endereço Principal */}
          <div className="flex items-center gap-3 p-3 bg-blue-500/5 rounded-lg border border-blue-500/10 hover:bg-blue-500/10 transition-colors">
            <input
              type="checkbox"
              id="principal"
              name="principal"
              checked={form.principal}
              onChange={handleChange}
              className="w-5 h-5 rounded border-gray-600 bg-gray-700 text-blue-500 focus:ring-blue-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 transition-colors"
            />
            <label htmlFor="principal" className="text-sm text-gray-200 font-medium cursor-pointer select-none">
              Definir como endereço principal
            </label>
            {form.principal && (
              <span className="ml-auto text-xs text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-full">
                Principal
              </span>
            )}
          </div>

          {/* Campos obrigatórios */}
          <p className="text-xs text-gray-400">* Campos obrigatórios</p>

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
              className="flex-[2] bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-medium shadow-lg shadow-green-600/20"
            >
              {loading ? 'Salvando...' : isNew ? 'Adicionar Endereço' : 'Atualizar Endereço'}
            </ActionButton>
          </div>
        </div>
      </div>
    </Modal>
  )
}