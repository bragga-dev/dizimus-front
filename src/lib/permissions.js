// src/lib/permissions.js

export const ROLES = {
  MEMBER: 'member',
  CHURCH: 'church',
  ADMIN:  'admin',
}

export const ROLE_HOME = {
  [ROLES.MEMBER]: '/dashboard/membro',
  [ROLES.CHURCH]: '/dashboard/igreja',
  [ROLES.ADMIN]:  '/dashboard/admin',
}

export const SECTION_ROLES = {
  member: [ROLES.MEMBER, ROLES.ADMIN],
  church: [ROLES.CHURCH, ROLES.ADMIN],
  admin:  [ROLES.ADMIN],
  shared: [ROLES.MEMBER, ROLES.CHURCH, ROLES.ADMIN],
}