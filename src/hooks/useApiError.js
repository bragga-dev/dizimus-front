// src/hooks/useApiError.js

/**
 * Códigos de erro especiais retornados pela API Ecclesia.
 * Usados para identificar situações que precisam de tratamento especial na UI.
 */
export const API_ERROR_CODES = {
  EMAIL_NOT_VERIFIED: 'email_not_verified',
}

/**
 * Extrai uma mensagem legível e um código opcional de erros do Django Ninja.
 * Retorna: { message: string, code: string | null }
 */
export function parseApiError(error) {
  const data = error?.response?.data

  if (!data) {
    return {
      message: 'Erro de conexão. Verifique sua internet e tente novamente.',
      code: null,
    }
  }

  // Erro simples com detail (ex: { detail: "...", code: "email_not_verified" })
  if (data.detail) {
    return {
      message: data.detail,
      code: data.code ?? null,
    }
  }

  if (data.non_field_errors) {
    return {
      message: Array.isArray(data.non_field_errors)
        ? data.non_field_errors.join(' ')
        : data.non_field_errors,
      code: null,
    }
  }

  if (typeof data === 'string') {
    return { message: data, code: null }
  }

  // Erros de campos (ex: { email: ["já existe"], password: ["muito curto"] })
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