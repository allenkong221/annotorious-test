// @ts-nocheck
import dashboard from '~icons/lucide/layout-dashboard'
import user from '~icons/ri/user-line'
import template from '~icons/fe/layer'

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
        icon: template,
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
