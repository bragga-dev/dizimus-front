// src/hooks/useProfilePhoto.js
/**
 * Cache busting para foto de perfil.
 *
 * Problema original:
 *   O MinIO/S3 retorna sempre a mesma URL para uma foto atualizada.
 *   O browser cacheia a resposta pela URL, então a imagem antiga fica
 *   visível mesmo após novo upload bem-sucedido.
 *
 * Solução adotada:
 *   Acrescentamos ?t=<timestamp> à URL sempre que a foto mudar.
 *   Isso força o browser a requisitar a imagem novamente sem usar o cache.
 *   A abordagem é limpa e não interfere com o backend.
 *
 * Uso:
 *   const src = bustPhotoCache(user?.photo_url)
 *   <img src={src} />
 *
 *   Quando a foto é atualizada, chame refreshPhoto() para regenerar o timestamp.
 */

import { useState, useCallback, useMemo } from 'react'

/**
 * Adiciona (ou atualiza) o parâmetro ?t=<ts> em uma URL de imagem.
 * Retorna null se photoUrl for falsy.
 */
export function bustPhotoCache(photoUrl, ts) {
  if (!photoUrl) return null
  const base = photoUrl.split('?')[0]
  return `${base}?t=${ts ?? Date.now()}`
}

/**
 * Hook que mantém um timestamp local e expõe a URL com cache busting.
 * Chamar refreshPhoto() atualiza o timestamp e força o browser a recarregar a imagem.
 */
export function useProfilePhoto(photoUrl) {
  const [ts, setTs] = useState(() => Date.now())

  // Regenera o timestamp — deve ser chamado logo após upload/remoção bem-sucedidos
  const refreshPhoto = useCallback(() => {
    setTs(Date.now())
  }, [])

  // Memoiza para evitar re-renders desnecessários
  const cachedUrl = useMemo(() => bustPhotoCache(photoUrl, ts), [photoUrl, ts])

  return { cachedUrl, refreshPhoto }
}