import MenuItemType from '@/types/menu-item'
import { Link } from 'react-router'

export default function MenuItem({ content, href = '/', isLink = true }: MenuItemType) {
  return (
    <>
      {isLink ? (
        <Link className='menu-item' to={href}>
          {content}
        </Link>
      ) : (
        <div className='menu-item'>{content}</div>
      )}
    </>
  )
}
