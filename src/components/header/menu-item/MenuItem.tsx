import MenuItemType from '@/types/menu-item'

export default function MenuItem({ content, href = '' }: MenuItemType) {
  return <div className='menu-item'>{content}</div>
}
