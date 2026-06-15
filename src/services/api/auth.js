// src/services/api/auth.js
import { api } from './client'

export async function login({ email, password }) {
  const { data } = await api.post('/auth/login', { email, password })
  return data
}

export async function register({ email, password, password2, role }) {
  const { data } = await api.post('/auth/register', { email, password, password2, role })
  return data
}

// Rota correta conforme a API: GET /api/users/me
export async function getMe() {
  const { data } = await api.get('/users/me')
  return data
}

export async function logout(refreshToken) {
  await api.post('/auth/logout', { refresh: refreshToken })
}

export async function resendVerification(email) {
  const { data } = await api.post(`/users/resend-verification?email=${encodeURIComponent(email)}`)
  return data
}

export async function requestPasswordReset(email) {
  const { data } = await api.post('/auth/password-reset/request', { email })
  return data
}