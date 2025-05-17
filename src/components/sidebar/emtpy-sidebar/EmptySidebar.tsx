import { useNavigate } from 'react-router'

import Button from '@/components/button'
import useSidebar from '@/hooks/useSidebar'

interface EmptySidebarProps {
  title: string
}

export default function EmptySidebar({ title }: EmptySidebarProps) {
  const { setIsOpen } = useSidebar()
  const navigate = useNavigate()
  const handleNavigate = async (to: string) => {
    await navigate(to)
    setIsOpen(false)
  }

  return (
    <div className='text-[16px] flex-center flex-col'>
      <p className='mb-[20px]'>{title}</p>
      <div onClick={() => handleNavigate('/shop')}>
        <Button variant='outline' className='py-[10px] px-[30px] uppercase text-[12px]'>
          Return to shop
        </Button>
      </div>
    </div>
  )
}
