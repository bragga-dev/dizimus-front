// src/hooks/useApiError.js
/**
 * Extrai uma mensagem legível de erros do axios/Django REST Framework.
 * DRF pode retornar:
 *   { detail: "..." }
 *   { email: ["já existe"], password: ["muito curto"] }
 *   { non_field_errors: ["..."] }
 */
export function parseApiError(error) {
  const data = error?.response?.data

  if (!data) return 'Erro de conexão. Verifique sua internet e tente novamente.'

  if (typeof data === 'string') return data

  if (data.detail) return data.detail

  if (data.non_field_errors) return data.non_field_errors.join(' ')

  // Agrega erros de campos
  const messages = Object.entries(data)
    .map(([field, msgs]) => {
      const label = field === 'email' ? 'E-mail'
        : field === 'password' ? 'Senha'
        : field === 'role' ? 'Tipo de conta'
        : field
      const text = Array.isArray(msgs) ? msgs.join(' ') : String(msgs)
      return `${label}: ${text}`
    })
    .join('\n')

  return messages || 'Ocorreu um erro inesperado.'
}