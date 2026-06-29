// src/context/AuthContext.jsx
import { createContext, useState, useEffect, useCallback } from 'react'
import { getMe, logout as logoutService } from '@/services/api/auth'

export const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('access_token')
    if (!token) { setLoading(false); return }
    getMe()
      .then(setUser)
      .catch(() => {
        localStorage.removeItem('access_token')
        localStorage.removeItem('refresh_token')
      })
      .finally(() => setLoading(false))
  }, [])

  /**
   * Chamado após login ou registro bem-sucedido.
   * Busca o perfil completo via /users/me e salva no estado.
   */
  const saveSession = useCallback(async ({ access, refresh }) => {
    localStorage.setItem('access_token', access)
    localStorage.setItem('refresh_token', refresh)
    try {
      const userData = await getMe()
      setUser(userData)
    } catch {
      setUser({ email: null })
    }
  }, [])

  /**
   * Atualiza campos do usuário no estado sem re-buscar a API.
   * Útil para aplicar mudanças de foto, nome etc. imediatamente.
   * Ex: updateUser({ photo_url: newUrl })
   */
  const updateUser = useCallback((patch) => {
    setUser((prev) => prev ? { ...prev, ...patch } : prev)
  }, [])

  const logout = useCallback(async () => {
    const refresh = localStorage.getItem('refresh_token')
    try {
      if (refresh) await logoutService(refresh)
    } catch { /* silencia */ }
    finally {
      localStorage.removeItem('access_token')
      localStorage.removeItem('refresh_token')
      setUser(null)
    }
  }, [])

  return (
    <AuthContext.Provider value={{ user, loading, saveSession, updateUser, logout }}>
      {children}
    </AuthContext.Provider>
  )
}