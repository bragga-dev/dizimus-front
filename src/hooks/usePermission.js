// src/hooks/usePermission.js
import { useAuth } from './useAuth'
import { SECTION_ROLES } from '@/lib/permissions'

export function usePermission() {
  const { user } = useAuth()
  const role = user?.role ?? null

  const can = (section) => {
    const allowed = SECTION_ROLES[section] ?? []
    return allowed.includes(role)
  }

  return { role, can }
}