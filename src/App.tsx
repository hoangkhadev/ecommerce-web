import Header from '@/components/header'
import Banner from '@/components/home/banner'
import Info from '@/components/home/info'
import AdvancedHeadline from '@/components/advanced-headline'
import HeadingListProducts from '@/components/home/heading-list-products'
import SaleHomePage from '@/components/home/sale-home-page'
import Footer from '@/components/footer'

export default function App() {
  return (
    <>
      <div className='relative'>
        <Header />
        <Banner />
      </div>
      <Info />
      <AdvancedHeadline title="Don't miss super offers" subTitle='Our best products' />
      <HeadingListProducts />
      <SaleHomePage />
      <Footer />
    </>
  )
}
