import { NavLink } from 'react-router'

import MenuItemType from '@/types/menu-item'
import useAuth from '@/hooks/useAuth'
import { useState } from 'react'
interface MenuItemProps extends MenuItemType {
  className?: string
  onClick?: () => void
}

export default function MenuItem({ content, href = undefined, className, onClick }: MenuItemProps) {
  const { user, handleLogout } = useAuth()
  const [showMenu, setShowMenu] = useState(false)

  const handleRenderContent = (content: string) => {
    if (content == 'Sign In' && user) {
      return `Hello: ${user.username}`
    }
    return content
  }

  const renderContent = handleRenderContent(content)

  return (
    <>
      {href !== undefined ? (
        <NavLink className={({ isActive }) => `menu-item ${isActive ? 'active' : ''} ${className}`} to={href}>
          {renderContent}
        </NavLink>
      ) : (
        <div
          className={`menu-item after:hidden ${className}`}
          onClick={content === 'Sign In' && user ? () => {} : onClick}
          onMouseOver={() => setShowMenu(true)}
          onMouseOut={() => setShowMenu(false)}
        >
          {renderContent}
          {user && content === 'Sign In' && showMenu && (
            <div className={`absolute top-[40px] left-0 w-full bg-white rounded-md p-2 z-10 shadow-md`}>
              <div
                className='text-rose-500 text-sm p-2 hover:bg-gray-100 rounded-md'
                onClick={() => {
                  setShowMenu(false)
                  handleLogout()
                }}
              >
                Logout
              </div>
            </div>
          )}
        </div>
      )}
    </>
  )
}
