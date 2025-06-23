import OurShopContext from '@/contexts/our-shop'
import { useContext } from 'react'

const useOurShop = () => {
  const context = useContext(OurShopContext)
  if (!context) throw new Error('useOurShop must be used within a OurShopProvider')
  return context
}

export default useOurShop
