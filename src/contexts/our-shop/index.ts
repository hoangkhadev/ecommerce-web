import { OurShopContextType } from '@/types/context'
import { createContext } from 'react'

const OurShopContext = createContext<OurShopContextType | undefined>(undefined)

export default OurShopContext
