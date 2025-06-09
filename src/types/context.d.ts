import { SidebarType } from '@/types/sidebar'
import { Dispatch, SetStateAction } from 'react'

export type SidebarContextType = {
  isOpen: boolean
  type: SidebarType
  setIsOpen: Dispatch<SetStateAction<boolean>>
  setType: Dispatch<SetStateAction<SidebarType>>
}
