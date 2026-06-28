// src/services/api/member.js
import { api } from './client'

// ── Perfil do membro ────────────────────────────────────────────────────────
export async function getMemberProfile() {
  const { data } = await api.get('/users/me/profile')
  return data
}

export async function updateMemberProfile(payload) {
  const { data } = await api.patch('/users/me/profile/member', payload)
  return data
}

// ── Foto de perfil ──────────────────────────────────────────────────────────
export async function uploadMemberPhoto(file) {
  const form = new FormData()
  form.append('photo', file)
  const { data } = await api.post('/users/me/photo', form, {
    headers: { 'Content-Type': 'multipart/form-data' },
  })
  return data
}

export async function deleteMemberPhoto() {
  const { data } = await api.delete('/users/me/photo')
  return data
}

// ── Endereços ───────────────────────────────────────────────────────────────
export async function getMemberAddresses() {
  const { data } = await api.get('/users/me/addresses')
  return data
}

export async function createMemberAddress(payload) {
  const { data } = await api.post('/users/me/addresses', payload)
  return data
}

export async function updateMemberAddress(addressId, payload) {
  const { data } = await api.patch(`/users/me/addresses/${addressId}`, payload)
  return data
}

export async function deleteMemberAddress(addressId) {
  const { data } = await api.delete(`/users/me/addresses/${addressId}`)
  return data
}