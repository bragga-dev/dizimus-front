// src/services/api/auth.js
import { api } from './client'

/**
 * Login — retorna { access, refresh, user }
 * Endpoint Django esperado: POST /api/auth/login/
 */
export async function login({ email, password }) 
{
  const { data } = await api.post('/auth/login', { email, password })
  return data
}

/**
 * Cadastro de Igreja ou Membro
 * Endpoint Django esperado: POST /api/auth/register/
 * Payload: { email, password, role }
 *   role: "Igreja" | "Membro"
 */
export async function register({ email, password, password2, role }) 
{
  const { data } = await api.post('/auth/register', { email, password, password2, role })
  return data
}

/**
 * Busca os dados do usuário autenticado
 * Endpoint Django esperado: GET /api/auth/me/
 */
export async function getMe() 
{
  const { data } = await api.get('/auth/me')
  return data
}

/**
 * Logout — invalida o refresh token no servidor
 * Endpoint Django esperado: POST /api/auth/logout/
 */
export async function logout(refreshToken) 
{
  await api.post('/auth/logout', { refresh: refreshToken })
}