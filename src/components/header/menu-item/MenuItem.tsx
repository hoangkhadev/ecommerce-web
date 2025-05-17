import { NavLink } from 'react-router'
import { Dispatch, SetStateAction } from 'react'

import MenuItemType from '@/types/menu-item'

interface MenuItemProps extends MenuItemType {
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export default function MenuItem({ content, href = '/', isLink = true, setIsOpen }: MenuItemProps) {
  return (
    <>
      {isLink ? (
        <NavLink className={({ isActive }) => `menu-item ${isActive ? 'active' : ''}`} to={href}>
          {content}
        </NavLink>
      ) : (
        <div className='menu-item after:hidden' onClick={() => setIsOpen(true)}>
          {content}
        </div>
      )}
    </>
  )
}
