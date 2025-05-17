import { Dispatch, SetStateAction } from 'react'

import SidebarType from '@/types/sidebar'

export type SidebarContextType = {
  isOpen: boolean
  type: SidebarType
  setIsOpen: Dispatch<SetStateAction<boolean>>
  setType: Dispatch<SetStateAction<SidebarType>>
}
