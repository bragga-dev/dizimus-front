// src/services/api/member.js
import { api } from './client'

// ── Helpers de erro ──────────────────────────────────────────────────────────

class ApiError extends Error {
  constructor(message, status, data) {
    super(message)
    this.name = 'ApiError'
    this.status = status
    this.data = data
  }
}

function handleApiError(error, defaultMessage = 'Erro ao processar requisição') {
  if (error.response) {
    // O servidor respondeu com um status de erro
    const status = error.response.status
    const data = error.response.data
    
    // Rate limiting
    if (status === 429) {
      throw new ApiError(
        'Muitas tentativas. Aguarde alguns segundos e tente novamente.',
        status,
        data
      )
    }
    
    // Erros de validação
    if (status === 400) {
      const message = data?.message || data?.detail || 'Dados inválidos'
      throw new ApiError(message, status, data)
    }
    
    // Não autorizado
    if (status === 401) {
      throw new ApiError('Sessão expirada. Faça login novamente.', status, data)
    }
    
    // Proibido
    if (status === 403) {
      throw new ApiError('Você não tem permissão para realizar esta ação.', status, data)
    }
    
    // Não encontrado
    if (status === 404) {
      throw new ApiError('Recurso não encontrado.', status, data)
    }
    
    // Erro do servidor
    if (status >= 500) {
      throw new ApiError(
        'Erro interno do servidor. Tente novamente mais tarde.',
        status,
        data
      )
    }
    
    // Outros erros
    throw new ApiError(
      data?.message || data?.detail || defaultMessage,
      status,
      data
    )
  }
  
  if (error.request) {
    // A requisição foi feita mas não houve resposta
    throw new ApiError(
      'Sem resposta do servidor. Verifique sua conexão.',
      0,
      null
    )
  }
  
  // Erro na configuração da requisição
  throw new ApiError(
    error.message || defaultMessage,
    0,
    null
  )
}

// ── Retry com delay exponencial ─────────────────────────────────────────────

async function withRetry(fn, maxRetries = 3, baseDelay = 1000) {
  let lastError
  
  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      return await fn()
    } catch (error) {
      lastError = error
      
      // Só tenta novamente em caso de rate limit (429) ou erro de servidor (500+)
      const shouldRetry = error.status === 429 || (error.status >= 500 && error.status < 600)
      
      if (shouldRetry && attempt < maxRetries - 1) {
        const delay = baseDelay * Math.pow(2, attempt) // 1s, 2s, 4s
        await new Promise(resolve => setTimeout(resolve, delay))
        continue
      }
      
      throw error
    }
  }
  
  throw lastError
}

// ── Perfil do membro ────────────────────────────────────────────────────────

export async function getMemberProfile() {
  try {
    const { data } = await api.get('/users/me/profile')
    return data
  } catch (error) {
    throw handleApiError(error, 'Erro ao carregar perfil')
  }
}

export async function updateMemberProfile(payload) {
  try {
    const { data } = await api.patch('/users/me/profile/member', payload)
    return data
  } catch (error) {
    throw handleApiError(error, 'Erro ao atualizar perfil')
  }
}

// ── Foto de perfil ──────────────────────────────────────────────────────────

export async function uploadMemberPhoto(file) {
  return withRetry(async () => {
    try {
      const form = new FormData()
      form.append('photo', file)
      
      const { data } = await api.post('/users/me/photo', form, {
        headers: { 'Content-Type': 'multipart/form-data' },
        // Timeout maior para upload
        timeout: 30000,
      })
      return data
    } catch (error) {
      throw handleApiError(error, 'Erro ao enviar foto')
    }
  })
}

export async function deleteMemberPhoto() {
  try {
    const { data } = await api.delete('/users/me/photo')
    return data
  } catch (error) {
    throw handleApiError(error, 'Erro ao remover foto')
  }
}

// ── Endereços ───────────────────────────────────────────────────────────────

export async function getMemberAddresses() {
  try {
    const { data } = await api.get('/users/me/addresses')
    return data
  } catch (error) {
    throw handleApiError(error, 'Erro ao carregar endereços')
  }
}

export async function createMemberAddress(payload) {
  try {
    const { data } = await api.post('/users/me/addresses', payload)
    return data
  } catch (error) {
    throw handleApiError(error, 'Erro ao criar endereço')
  }
}

export async function updateMemberAddress(addressId, payload) {
  try {
    const { data } = await api.patch(`/users/me/addresses/${addressId}`, payload)
    return data
  } catch (error) {
    throw handleApiError(error, 'Erro ao atualizar endereço')
  }
}

export async function deleteMemberAddress(addressId) {
  try {
    const { data } = await api.delete(`/users/me/addresses/${addressId}`)
    return data
  } catch (error) {
    throw handleApiError(error, 'Erro ao remover endereço')
  }
}