import closeIcon from '@/assets/icons/svgs/closeIcon.svg'
interface ProductItemSidebarProps {
  isCompare?: boolean
}

export default function ProductItemSidebar({ isCompare = false }: ProductItemSidebarProps) {
  return (
    <div className='relative flex items-start justify-start px-[12px] py-[20px] hover:bg-[#f7f7f7] transition duration-300 group'>
      <div className='mr-[20px] cursor-pointer'>
        <img
          src='https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.1-min.jpg'
          alt=''
          style={{
            width: '70px',
          }}
        />
      </div>

      <div className='text-[14px]'>
        <div className='text-primary cursor-pointer line-clamp-1'>10K Yellow Gold {!isCompare && <span>- M</span>}</div>
        <div className='text-[13x] my-[6px]'>
          {!isCompare && <span>1 × </span>}
          <span>$99.99</span>
        </div>
        <div className='text-[14px]'>
          SKU: <span>12345</span>
        </div>
      </div>

      <div className='absolute top-[15px] right-0 opacity-0 cursor-pointer hover:scale-105 group-hover:right-[15px] group-hover:opacity-100 transition-all duration-300'>
        <img src={closeIcon} alt='Close' />
      </div>
    </div>
  )
}
