// src/context/AuthContext.jsx
import { createContext, useState, useEffect, useCallback } from 'react'
import { getMe, logout as logoutService } from '@/services/api/auth'

export const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('access_token')
    if (!token) {
      setLoading(false)
      return
    }
    // Busca o perfil real do usuário via /users/me usando o token salvo
    getMe()
      .then(setUser)
      .catch(() => {
        // Token inválido ou expirado — limpa sessão
        localStorage.removeItem('access_token')
        localStorage.removeItem('refresh_token')
      })
      .finally(() => setLoading(false))
  }, [])

  /**
   * Chamado após login ou registro bem-sucedido.
   * O endpoint /auth/login retorna { access, refresh } sem objeto user,
   * então buscamos o perfil completo logo em seguida via /users/me.
   */
  const saveSession = useCallback(async ({ access, refresh }) => {
    localStorage.setItem('access_token', access)
    localStorage.setItem('refresh_token', refresh)
    try {
      const userData = await getMe()
      setUser(userData)
    } catch {
      // Se /users/me falhar, pelo menos os tokens estão salvos
      // e o usuário não perde a sessão
      setUser({ email: null })
    }
  }, [])

  const logout = useCallback(async () => {
    const refresh = localStorage.getItem('refresh_token')
    try {
      if (refresh) await logoutService(refresh)
    } catch {
      // silencia erro de rede no logout
    } finally {
      localStorage.removeItem('access_token')
      localStorage.removeItem('refresh_token')
      setUser(null)
    }
  }, [])

  return (
    <AuthContext.Provider value={{ user, loading, saveSession, logout }}>
      {children}
    </AuthContext.Provider>
  )
}