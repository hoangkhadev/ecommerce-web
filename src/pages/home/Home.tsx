import Banner from '@/components/home/banner'
import Info from '@/components/home/info'
import AdvancedHeadline from '@/components/advanced-headline'
import HeadingListProducts from '@/components/home/heading-list-products'
import SaleHomePage from '@/components/home/sale-home-page'
import { useEffect, useState } from 'react'
import { getProducts, ProductQueryType } from '@/api/product.service'

export default function Home() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const getProduct = async () => {
      const query: ProductQueryType = {
        sortType: '0',
        page: 1,
        limit: '10',
      }
      const res = await getProducts(query)

      if (res && res.contents) {
        setProducts(res.contents)
      }
    }
    getProduct()
  }, [])
  return (
    <div className='-mt-[82px]'>
      <Banner />
      <Info />
      <AdvancedHeadline title="Don't miss super offers" subTitle='Our best products' />
      <HeadingListProducts products={products} />
      <SaleHomePage />
    </div>
  )
}
