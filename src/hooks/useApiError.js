// src/hooks/useApiError.js

export const API_ERROR_CODES = {
  EMAIL_NOT_VERIFIED: 'email_not_verified',
}

export function parseApiError(error) {
  const status = error?.response?.status
  const data = error?.response?.data

  // 403 = email não verificado (independente da mensagem)
  if (status === 403) {
    return {
      message: data?.detail ?? 'E-mail não verificado.',
      code: API_ERROR_CODES.EMAIL_NOT_VERIFIED,
    }
  }

  if (!data) {
    return {
      message: 'Erro de conexão. Verifique sua internet e tente novamente.',
      code: null,
    }
  }

  if (data.detail) {
    return { message: data.detail, code: data.code ?? null }
  }

  if (data.non_field_errors) {
    return {
      message: Array.isArray(data.non_field_errors)
        ? data.non_field_errors.join(' ')
        : data.non_field_errors,
      code: null,
    }
  }

  if (typeof data === 'string') return { message: data, code: null }

  const messages = Object.entries(data)
    .map(([field, msgs]) => {
      const label =
        field === 'email' ? 'E-mail'
        : field === 'password' ? 'Senha'
        : field === 'password2' ? 'Confirmação de senha'
        : field === 'role' ? 'Tipo de conta'
        : field
      const text = Array.isArray(msgs) ? msgs.join(' ') : String(msgs)
      return `${label}: ${text}`
    })
    .join('\n')

  return { message: messages || 'Ocorreu um erro inesperado.', code: null }
}