import cartIcon from '@/assets/icons/svgs/cartIcon.svg'
import HeaderSidebar from '@/components/sidebar/header-sidebar'
import ProductItemSidebar from '@/components/sidebar/product-item-sidebar'
import FooterSidebar from '@/components/sidebar/fotter-sidebar'

export default function Cart() {
  return (
    <>
      <HeaderSidebar src={cartIcon} title='Cart' href='/cart' />

      <div className='h-full overflow-hidden hover:overflow-y-auto'>
        <div>
          <ProductItemSidebar />
          <ProductItemSidebar />
          <ProductItemSidebar />
        </div>
      </div>

      <FooterSidebar
        isCart
        subTotal={99.99}
        title1='View cart'
        title2='Checkout'
        onClick1={() => {}}
        onClick2={() => {}}
      />
    </>
  )
}
