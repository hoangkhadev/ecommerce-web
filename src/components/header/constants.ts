import BoxIconType from '@/types/box-icon'
import MenuItemType from '@/types/menu-item'

const dataBoxIcon: BoxIconType[] = [
  { type: 'fb', href: '#' },
  { type: 'ins', href: '#' },
  { type: 'ytb', href: '#' },
]

const dataMenu: MenuItemType[] = [
  { content: 'Elements' },
  { content: 'Our Shop', href: '/shop' },
  { content: 'About us', href: '/about-us' },
  { content: 'Contact', href: '/contact-us' },
  { content: 'Search' },
  { content: 'Sign In', href: '/auth/login' },
]

const dataMenuMobile: MenuItemType[] = [
  { content: 'Home', href: '/' },
  { content: 'Elements' },
  { content: 'Shop', href: '/shop' },
  { content: 'About us', href: '/about-us' },
  { content: 'Contact', href: '/contact-us' },
]

export { dataBoxIcon, dataMenu, dataMenuMobile }
