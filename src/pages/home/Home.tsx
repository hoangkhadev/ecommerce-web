import Banner from '@/components/home/banner'
import Info from '@/components/home/info'
import AdvancedHeadline from '@/components/advanced-headline'
import HeadingListProducts from '@/components/home/heading-list-products'
import SaleHomePage from '@/components/home/sale-home-page'

export default function Home() {
  return (
    <div className='-mt-[82px]'>
      <Banner />
      <Info />
      <AdvancedHeadline title="Don't miss super offers" subTitle='Our best products' />
      <HeadingListProducts />
      <SaleHomePage />
    </div>
  )
}
