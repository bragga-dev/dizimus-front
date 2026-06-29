// src/pages/dashboard/member/MemberHome.jsx
import { useState, useEffect, useCallback } from 'react'
import {
  User, Mail, Phone, MapPin, FileText, Calendar,
  Shield, Camera, Plus, Home, Loader2, Pencil, Trash2,
} from 'lucide-react'
import { useAuth } from '@/hooks/useAuth'
import { useProfilePhoto } from '@/hooks/useProfilePhoto'
import { getMemberProfile, getMemberAddresses, deleteMemberAddress } from '@/services/api/member'
import { Toast, SectionCard, InfoLine, ActionButton } from '@/components/ui/dashboard'
import { PhotoModal, PersonalModal, ContactModal, AddressModal } from '@/components/member/modals'

// ── Helpers de formatação ────────────────────────────────────────────────────

function formatDate(iso) {
  if (!iso) return null
  const [y, m, d] = iso.split('-')
  return `${d}/${m}/${y}`
}

function formatCPF(cpf) {
  if (!cpf) return null
  const d = cpf.replace(/\D/g, '')
  return d.length === 11 ? d.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4') : cpf
}

function formatPhone(phone) {
  if (!phone) return null
  const d = phone.replace(/\D/g, '')
  if (d.length === 11) return d.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')
  if (d.length === 10) return d.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3')
  return phone
}

// ── Sub-componente: Hero ─────────────────────────────────────────────────────

function ProfileHero({ user, profile, photoSrc, onEditPhoto }) {
  const fullName = [profile?.first_name, profile?.last_name].filter(Boolean).join(' ')

  return (
    <div className="relative bg-gradient-to-br from-[#2E004F] via-[#1e0035] to-[#0c0620] border border-[#E0B14A]/10 rounded-2xl overflow-hidden">
      {/* Decoração de fundo */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-[#E0B14A]/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-purple-900/30 blur-2xl" />
      </div>

      <div className="relative flex flex-col sm:flex-row items-center sm:items-end gap-5 p-6 sm:p-8">
        {/* Avatar com hover de câmera */}
        <div
          className="relative group flex-shrink-0 cursor-pointer"
          onClick={onEditPhoto}
          title="Alterar foto de perfil"
        >
          <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-[#E0B14A]/25 shadow-[0_0_40px_rgba(224,177,74,0.12)]">
            {photoSrc
              ? <img src={photoSrc} alt={fullName || 'Foto de perfil'} className="w-full h-full object-cover" />
              : (
                <div className="w-full h-full flex items-center justify-center bg-[#E0B14A]/10">
                  <User size={40} className="text-[#E0B14A]/50" />
                </div>
              )
            }
          </div>
          {/* Overlay câmera */}
          <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-black/55 opacity-0 group-hover:opacity-100 transition-opacity">
            <Camera size={24} className="text-white" />
          </div>
        </div>

        {/* Informações principais */}
        <div className="flex-1 text-center sm:text-left">
          {user?.is_trusty && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#E0B14A]/10 border border-[#E0B14A]/20 text-[#E0B14A] text-[10px] font-semibold uppercase tracking-wider mb-2">
              <Shield size={10} />
              Verificado
            </span>
          )}
          <h1
            className="text-2xl sm:text-3xl font-bold text-white leading-tight"
            style={{ fontFamily: 'var(--font-navbar)' }}
          >
            {fullName || 'Membro Ecclesia'}
          </h1>
          {profile?.username && (
            <p className="text-sm text-[#E0B14A]/70 mt-1">@{profile.username}</p>
          )}
          <p className="text-xs text-white/40 mt-1">{user?.role_label ?? 'Membro'}</p>
        </div>

        {/* Botão câmera explícito — desktop */}
        <ActionButton
          variant="ghost"
          size="sm"
          icon={Camera}
          onClick={onEditPhoto}
          className="hidden sm:inline-flex border border-white/10 self-start"
        >
          Alterar foto
        </ActionButton>

        {/* Botão câmera — mobile */}
        <button
          onClick={onEditPhoto}
          className="sm:hidden absolute top-4 right-4 h-8 w-8 flex items-center justify-center rounded-xl bg-white/10 border border-white/10 text-white/60 hover:text-white transition-all"
          aria-label="Alterar foto"
        >
          <Camera size={15} />
        </button>
      </div>
    </div>
  )
}

// ── Sub-componente: Lista de endereços ───────────────────────────────────────

function AddressList({ addresses, onAdd, onEdit, onDelete }) {
  return (
    <SectionCard
      title="Endereços"
      icon={MapPin}
      noPadding
      headerRight={
        <ActionButton variant="primary" size="sm" icon={Plus} onClick={onAdd}>
          <span className="hidden sm:inline">Adicionar</span>
        </ActionButton>
      }
    >
      {addresses.length === 0 ? (
        <div className="px-5 py-10 flex flex-col items-center gap-3 text-center">
          <div className="h-14 w-14 rounded-2xl bg-white/3 flex items-center justify-center">
            <Home size={22} className="text-white/15" />
          </div>
          <p className="text-sm text-white/25">Nenhum endereço cadastrado</p>
          <button
            onClick={onAdd}
            className="text-xs text-[#E0B14A]/60 hover:text-[#E0B14A] transition-colors"
          >
            Adicionar endereço
          </button>
        </div>
      ) : (
        <div className="divide-y divide-white/5">
          {addresses.map((addr) => (
            <div key={addr.id} className="flex items-start gap-3 px-5 py-4">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-white/5 mt-0.5">
                <MapPin size={14} className="text-[#E0B14A]" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <p className="text-sm text-white font-medium truncate">
                    {[addr.road, addr.number].filter(Boolean).join(', ')}
                  </p>
                  {addr.principal && (
                    <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-[#E0B14A]/10 text-[#E0B14A] font-semibold uppercase tracking-wider flex-shrink-0">
                      Principal
                    </span>
                  )}
                </div>
                <p className="text-xs text-white/40 mt-0.5 truncate">
                  {[addr.district, addr.city, addr.state, addr.cep].filter(Boolean).join(' · ')}
                </p>
              </div>

              {/* Ações */}
              <div className="flex items-center gap-1.5 flex-shrink-0">
                <ActionButton variant="primary" size="sm" icon={Pencil} onClick={() => onEdit(addr)} title="Editar endereço">
                  <span className="hidden sm:inline">Editar</span>
                </ActionButton>
                <ActionButton variant="danger" size="sm" icon={Trash2} onClick={() => onDelete(addr.id)} title="Remover endereço">
                  <span className="hidden sm:inline">Remover</span>
                </ActionButton>
              </div>
            </div>
          ))}
        </div>
      )}
    </SectionCard>
  )
}

// ── Componente principal ─────────────────────────────────────────────────────

export default function MemberHome() {
  const { user, updateUser } = useAuth()
  const { cachedUrl, refreshPhoto } = useProfilePhoto(user?.photo_url)

  const [profile, setProfile]     = useState(null)
  const [addresses, setAddresses] = useState([])
  const [loading, setLoading]     = useState(true)
  const [toast, setToast]         = useState(null)
  const [modal, setModal]         = useState(null) // 'photo' | 'personal' | 'contact' | 'address'
  const [editAddress, setEditAddress] = useState(null)

  // ── Toast helpers ──────────────────────────────────────────────────────────
  const showSuccess = useCallback((msg) => setToast({ message: msg, type: 'success' }), [])
  const showError   = useCallback((msg) => setToast({ message: msg, type: 'error'   }), [])

  // ── Carregamento de dados ──────────────────────────────────────────────────
  const loadAddresses = useCallback(async () => {
    try {
      const a = await getMemberAddresses()
      setAddresses(Array.isArray(a) ? a : [])
    } catch { /* endereços não são críticos */ }
  }, [])

  useEffect(() => {
    const loadAll = async () => {
      try {
        const [p, a] = await Promise.all([getMemberProfile(), getMemberAddresses()])
        setProfile(p)
        setAddresses(Array.isArray(a) ? a : [])
      } catch {
        showError('Erro ao carregar informações do perfil')
      } finally {
        setLoading(false)
      }
    }
    loadAll()
  }, [showError])

  // ── Handlers ───────────────────────────────────────────────────────────────

  /**
   * Ao receber o objeto user atualizado pela API de foto:
   * 1. Atualiza o AuthContext (foto aparece no header/sidebar imediatamente)
   * 2. Faz cache busting na URL para forçar o browser a recarregar a imagem
   */
  const handlePhotoUpdate = useCallback((updatedUser) => {
    if (updatedUser?.photo_url !== undefined) {
      updateUser({ photo_url: updatedUser.photo_url })
    }
    refreshPhoto()        // invalida o cache local da imagem
    setModal(null)
    showSuccess(updatedUser?.photo_url ? 'Foto atualizada com sucesso' : 'Foto removida')
  }, [updateUser, refreshPhoto, showSuccess])

  const handleProfileSave = useCallback((updated) => {
    setProfile(updated)
    setModal(null)
    showSuccess('Dados atualizados com sucesso')
  }, [showSuccess])

  const handleAddressSave = useCallback(() => {
    setModal(null)
    setEditAddress(null)
    showSuccess('Endereço salvo com sucesso')
    loadAddresses()
  }, [showSuccess, loadAddresses])

  const handleDeleteAddress = useCallback(async (id) => {
    try {
      await deleteMemberAddress(id)
      showSuccess('Endereço removido')
      loadAddresses()
    } catch (err) {
      showError(err?.message || 'Erro ao remover endereço')
    }
  }, [showSuccess, showError, loadAddresses])

  const openEditAddress = useCallback((addr) => {
    setEditAddress(addr)
    setModal('address')
  }, [])

  const openNewAddress = useCallback(() => {
    setEditAddress(null)
    setModal('address')
  }, [])

  // ── Loading state ──────────────────────────────────────────────────────────
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-64">
        <Loader2 size={28} className="animate-spin text-[#E0B14A]" />
      </div>
    )
  }

  const fullName = [profile?.first_name, profile?.last_name].filter(Boolean).join(' ') || null

  return (
    <>
      <style>{`
        @keyframes slide-up {
          from { opacity:0; transform:translateY(14px); }
          to   { opacity:1; transform:translateY(0);    }
        }
        .animate-slide-up { animation: slide-up .2s ease-out; }
      `}</style>

      <div className="w-full max-w-4xl mx-auto space-y-5 pb-12">

        {/* Hero */}
        <ProfileHero
          user={user}
          profile={profile}
          photoSrc={cachedUrl}
          onEditPhoto={() => setModal('photo')}
        />

        {/* Grid — 2 colunas no desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

          {/* Dados pessoais */}
          <SectionCard title="Dados pessoais" icon={User} onEdit={() => setModal('personal')}>
            <InfoLine icon={User}     label="Nome completo"      value={fullName} />
            <InfoLine icon={FileText} label="CPF"                value={formatCPF(profile?.cpf)} />
            <InfoLine icon={Calendar} label="Data de nascimento" value={formatDate(profile?.date_of_birth)} />
            <InfoLine icon={User}     label="Sexo"               value={profile?.gender         ?? null} empty="A ser preenchido" />
            <InfoLine icon={FileText} label="Estado civil"       value={profile?.marital_status ?? null} empty="A ser preenchido" />
            <InfoLine icon={FileText} label="Profissão"          value={profile?.profession     ?? null} empty="A ser preenchido" />
          </SectionCard>

          {/* Contato */}
          <SectionCard title="Contato" icon={Mail} onEdit={() => setModal('contact')}>
            <InfoLine icon={Mail}  label="E-mail"   value={user?.email} />
            <InfoLine icon={Phone} label="Telefone" value={formatPhone(profile?.phone)} />
            {profile?.username && (
              <InfoLine icon={User} label="Usuário" value={`@${profile.username}`} />
            )}
          </SectionCard>
        </div>

        {/* Endereços — largura total */}
        <AddressList
          addresses={addresses}
          onAdd={openNewAddress}
          onEdit={openEditAddress}
          onDelete={handleDeleteAddress}
        />
      </div>

      {/* Modais */}
      {modal === 'photo' && (
        <PhotoModal
          photoUrl={cachedUrl}
          onClose={() => setModal(null)}
          onUpdate={handlePhotoUpdate}
          onError={showError}
        />
      )}
      {modal === 'personal' && (
        <PersonalModal
          profile={profile}
          onClose={() => setModal(null)}
          onSave={handleProfileSave}
          onError={showError}
        />
      )}
      {modal === 'contact' && (
        <ContactModal
          profile={profile}
          email={user?.email}
          onClose={() => setModal(null)}
          onSave={handleProfileSave}
          onError={showError}
        />
      )}
      {modal === 'address' && (
        <AddressModal
          address={editAddress}
          onClose={() => { setModal(null); setEditAddress(null) }}
          onSave={handleAddressSave}
          onError={showError}
        />
      )}

      {/* Toast */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </>
  )
}