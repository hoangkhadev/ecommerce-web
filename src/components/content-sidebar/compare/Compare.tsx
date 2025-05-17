import reloadIcon from '@/assets/icons/svgs/reloadIcon.svg'
import HeaderSidebar from '@/components/sidebar/header-sidebar'
// import EmptySidebar from '@/components/sidebar/emtpy-sidebar'
import FooterSidebar from '@/components/sidebar/fotter-sidebar'
import ProductItemSidebar from '@/components/sidebar/product-item-sidebar'

export default function Compare() {
  return (
    <>
      <HeaderSidebar title='Compare' src={reloadIcon} href='/compare' />
      <div className='h-full overflow-hidden hover:overflow-y-auto'>
        <div>
          <ProductItemSidebar isCompare />
          <ProductItemSidebar isCompare />
          <ProductItemSidebar isCompare />
        </div>
      </div>
      <FooterSidebar isCompare title1='View compare' onClick1={() => {}} />
    </>
  )
}
