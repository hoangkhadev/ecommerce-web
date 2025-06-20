import { SidebarType } from '@/types/sidebar'
import { Dispatch, SetStateAction } from 'react'
import { toast } from 'react-toastify'

export type SidebarContextType = {
  isOpen: boolean
  type: SidebarType
  setIsOpen: Dispatch<SetStateAction<boolean>>
  setType: Dispatch<SetStateAction<SidebarType>>
}

export type ToastContextType = {
  toast: typeof toast
}
