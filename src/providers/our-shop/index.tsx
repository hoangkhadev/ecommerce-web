import { getProducts, ProductQueryType } from '@/api/product.service'
import OurShopContext from '@/contexts/our-shop'
import { OurShopContextType } from '@/types/context'
import ProductType from '@/types/product'
import { useEffect, useState } from 'react'

export default function OurShopProvider({ children }: { children: React.ReactNode }) {
  const sortOptions = [
    { label: 'Default sorting', value: '0' },
    { label: 'Sort by popularity', value: '1' },
    { label: 'Sort by average rating', value: '2' },
    { label: 'Sort by latest', value: '3' },
    { label: 'Sort by price: low to high', value: '4' },
    { label: 'Sort by price: high to low', value: '5' },
  ]

  const showOptions = [
    { label: '8', value: '8' },
    { label: '12', value: '12' },
    { label: 'All', value: '' },
  ]

  const [sortId, setSortId] = useState('0')
  const [showId, setShowId] = useState('8')
  const [isShowGrid, setIsShowGrid] = useState(true)
  const [products, setProducts] = useState<ProductType[] | []>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isMoreLoading, setIsMoreLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(0)

  const handleLoadMore = async () => {
    const query: ProductQueryType = {
      sortType: sortId,
      page: +page + 1,
      limit: showId,
    }

    setIsMoreLoading(true)
    try {
      const res = await getProducts(query)
      setProducts((prev) => [...prev, ...res.contents])
      setPage(+res.page)
      setTotal(res.total)
    } catch (error) {
      console.log(error)
    } finally {
      setIsMoreLoading(false)
    }
  }

  const value: OurShopContextType = {
    sortOptions,
    showOptions,
    sortId,
    showId,
    isShowGrid,
    isMoreLoading,
    isLoading,
    products,
    total,
    setSortId,
    setShowId,
    setIsShowGrid,
    handleLoadMore,
  }

  useEffect(() => {
    const query: ProductQueryType = {
      sortType: sortId,
      page,
      limit: showId,
    }

    const fetchProducts = async () => {
      setIsLoading(true)
      try {
        const res = await getProducts(query)
        setProducts(res.contents)
        setTotal(res.total)
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchProducts()
  }, [sortId, showId])

  return <OurShopContext.Provider value={value}>{children}</OurShopContext.Provider>
}
