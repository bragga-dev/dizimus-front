import axios from 'axios'

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Injeta o token JWT em toda requisição autenticada
api.interceptors.request.use((config) => 
{
  const token = localStorage.getItem('access_token')
  if (token) 
    {
        config.headers.Authorization = `Bearer ${token}`
    }
  return config
})

// Tenta renovar o token com refresh quando receber 401
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const original = error.config

    if (error.response?.status === 401 && !original._retry) {
      original._retry = true
      const refresh = localStorage.getItem('refresh_token')

      if (refresh) 
      {
        try 
        {
          const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/auth/refresh`, { refresh })
          localStorage.setItem('access_token', data.access)
          original.headers.Authorization = `Bearer ${data.access}`
          return api(original)
        } 
        catch 
        {
          // refresh expirado — limpa sessão
          localStorage.removeItem('access_token')
          localStorage.removeItem('refresh_token')
          window.location.href = '/login'
        }
      }
    }

    return Promise.reject(error)
  }
)