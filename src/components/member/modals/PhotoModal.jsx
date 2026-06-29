// src/components/member/modals/PhotoModal.jsx
import { useRef, useState } from 'react'
import { Camera, Trash2, User } from 'lucide-react'
import { Modal, ActionButton } from '@/components/ui/dashboard'
import { uploadMemberPhoto, deleteMemberPhoto } from '@/services/api/member'

/**
 * Modal para upload e remoção de foto de perfil.
 * onUpdate(updatedUser) — recebe o objeto user retornado pela API após a operação.
 */
export function PhotoModal({ photoUrl, onClose, onUpdate, onError }) {
  const [uploading, setUploading] = useState(false)
  const [removing, setRemoving] = useState(false)
  const fileRef = useRef(null)

  const handleFile = async (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    setUploading(true)
    try {
      const updated = await uploadMemberPhoto(file)
      onUpdate(updated)
    } catch (err) {
      onError?.(err?.message || 'Erro ao enviar foto')
    } finally {
      setUploading(false)
      // Limpa o input para permitir re-upload do mesmo arquivo
      if (fileRef.current) fileRef.current.value = ''
    }
  }

  const handleRemove = async () => {
    setRemoving(true)
    try {
      const updated = await deleteMemberPhoto()
      onUpdate(updated)
    } catch (err) {
      onError?.(err?.message || 'Erro ao remover foto')
    } finally {
      setRemoving(false)
    }
  }

  return (
    <Modal title="Foto de perfil" onClose={onClose} size="sm">
      {/* Preview */}
      <div className="flex justify-center mb-6">
        <div className="w-28 h-28 rounded-2xl overflow-hidden border-2 border-[#E0B14A]/20">
          {photoUrl
            ? <img src={photoUrl} alt="Foto de perfil" className="w-full h-full object-cover" />
            : (
              <div className="w-full h-full flex items-center justify-center bg-white/5 border-2 border-dashed border-white/10">
                <User size={36} className="text-white/20" />
              </div>
            )
          }
        </div>
      </div>

      <p className="text-center text-xs text-white/30 mb-5">
        JPG, JPEG, PNG ou WEBP · máx. 5 MB
      </p>

      <div className="space-y-2">
        <ActionButton
          variant="primary"
          size="md"
          icon={Camera}
          loading={uploading}
          onClick={() => fileRef.current?.click()}
          className="w-full py-3"
        >
          {uploading ? 'Enviando...' : photoUrl ? 'Alterar foto' : 'Enviar foto'}
        </ActionButton>

        <input
          ref={fileRef}
          type="file"
          accept="image/jpeg,image/jpg,image/png,image/webp"
          className="hidden"
          onChange={handleFile}
        />

        {photoUrl && (
          <ActionButton
            variant="danger"
            size="md"
            icon={Trash2}
            loading={removing}
            onClick={handleRemove}
            className="w-full py-3"
          >
            {removing ? 'Removendo...' : 'Remover foto'}
          </ActionButton>
        )}
      </div>
    </Modal>
  )
}