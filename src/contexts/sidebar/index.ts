import { createContext } from 'react'
import { SidebarContextType } from '@/types/context'

const SidebarContext = createContext<SidebarContextType | undefined>(undefined)

export default SidebarContext
