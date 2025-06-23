import Banner from '@/components/our-shop/banner'
import Filter from '@/components/our-shop/filter'
import ListProduct from '@/components/our-shop/list-product'
import { Link } from 'react-router'
import OurShopProvider from '@/providers/our-shop'

export default function OurShop() {
  return (
    <OurShopProvider>
      <div className='wrapper'>
        <section className='py-2 text-base'>
          <Link to={'/'} className='text-secondary'>
            Home &gt;
          </Link>
          <span> Shop</span>
        </section>
        <Banner />
        <Filter />
        <ListProduct />
      </div>
    </OurShopProvider>
  )
}
