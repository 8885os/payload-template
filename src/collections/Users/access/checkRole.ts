import type { User } from '@/payload-types'

export const checkRole = (allRoles: User['roles'] = [], user: User): boolean => {
  // Non-null assertion to tell TypeScript that user.roles is not null or undefined
  if (user && Array.isArray(user.roles)) {
    return allRoles!.some((role) => user.roles!.includes(role)) // Use ! here
  }
  return false
}
