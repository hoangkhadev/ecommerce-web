import { NavLink } from 'react-router'

import MenuItemType from '@/types/menu-item'
interface MenuItemProps extends MenuItemType {
  className?: string
}

export default function MenuItem({ content, href = undefined, className }: MenuItemProps) {
  return (
    <>
      {href !== undefined ? (
        <NavLink className={({ isActive }) => `menu-item ${isActive ? 'active' : ''} ${className}`} to={href}>
          {content}
        </NavLink>
      ) : (
        <div className={`menu-item after:hidden ${className}`}>{content}</div>
      )}
    </>
  )
}
