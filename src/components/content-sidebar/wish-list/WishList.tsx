import heartIcon from '@/assets/icons/svgs/heartIcon.svg'
import FooterSidebar from '@/components/sidebar/footer-sidebar'
import HeaderSidebar from '@/components/sidebar/header-sidebar'
import ProductItemSidebar from '@/components/sidebar/product-item-sidebar'

export default function WishList() {
  return (
    <div>
      <HeaderSidebar title='WishList' src={heartIcon} href='/wish-list' />
      <div className='h-full overflow-hidden hover:overflow-y-auto'>
        <div>
          <ProductItemSidebar />
          <ProductItemSidebar />
          <ProductItemSidebar />
        </div>
      </div>
      <FooterSidebar title1='View wishlist' title2='Add all to cart' onClick1={() => {}} onClick2={() => {}} />
    </div>
  )
}
