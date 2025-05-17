import { useNavigate } from 'react-router'

import useSidebar from '@/hooks/useSidebar'

interface HeaderSidebarProps {
  src: string
  title: string
  href: string
}

export default function HeaderSidebar({ src, title, href }: HeaderSidebarProps) {
  const { setIsOpen } = useSidebar()
  const navigate = useNavigate()
  const handleNavigate = async (to: string) => {
    await navigate(to)
    setIsOpen(false)
  }

  return (
    <div className='mb-[15px] cursor-pointer title-sidebar' onClick={() => handleNavigate(href)}>
      <div className='mb-[10px] flex-center'>
        <img src={src} alt='Cart Icon' />
      </div>
      <h2>{title}</h2>
    </div>
  )
}
