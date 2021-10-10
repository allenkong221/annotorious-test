// @ts-nocheck
import edit from '~icons/file-icons/closuretemplate'
import dashboard from '~icons/lucide/layout-dashboard'
import user from '~icons/ri/user-line'

export const useMenu = () => {
  return {
    menuItems: [
      {
        name: 'Dashboard',
        icon: dashboard,
        path: '/dashboard',
      },
      {
        name: 'Templates',
        icon: edit,
        path: '/templates',
      },
      {
        name: 'Profile',
        icon: user,
        path: '/profile',
      },
    ],
  }
}
