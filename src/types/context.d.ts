import ProductType from '@/types/product'
import { SidebarType } from '@/types/sidebar'
import { UserType } from '@/types/user'
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

export type AuthContextType = {
  user: UserType | null
  handleLogout: () => void
}

export type OurShopContextType = {
  products: ProductType[] | []
  showOptions: { label: string; value: string }[]
  sortOptions: { label: string; value: string }[]
  sortId: string
  showId: string
  isShowGrid: boolean
  isLoading: boolean
  isMoreLoading: boolean
  total: number
  handleLoadMore: () => Promise<void>
  setSortId: (sortId: string) => void
  setShowId: (showId: string) => void
  setIsShowGrid: (value: boolean) => void
}
