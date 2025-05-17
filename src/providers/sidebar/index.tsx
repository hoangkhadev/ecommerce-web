import { useEffect, useState } from 'react'
import { SidebarContextType } from '@/types/context'
import SidebarContext from '@/contexts/sidebar'
import SidebarType from '@/types/sidebar'

export default function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [type, setType] = useState<SidebarType>('')

  const value: SidebarContextType = {
    isOpen,
    type,
    setIsOpen,
    setType,
  }

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }

    return () => document.body.classList.remove('overflow-hidden')
  }, [isOpen])

  return <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
}
