import ProductType from '@/types/product'

import bagIcon from '@/assets/icons/svgs/bagIcon.svg'
import heartIcon from '@/assets/icons/svgs/heartIcon.svg'
import reloadIcon from '@/assets/icons/svgs/reloadIcon.svg'
import eyeIcon from '@/assets/icons/svgs/eyeIcon.svg'

interface ProductItemProps {
  product: ProductType
}

export default function ProductItem({ product }: ProductItemProps) {
  return (
    <div className='cursor-pointer group/parent'>
      <div className='w-full relative mb-[8px] group/parent2'>
        <img className='w-full h-full object-cover transition duration-500' src={product.images[0]} alt='' />
        <img
          src={product.images[1]}
          alt=''
          className='w-full h-full object-cover absolute inset-0 opacity-0 group-hover/parent2:opacity-100 transition duration-500'
        />

        <div className='absolute right-0 opacity-0 group-hover/parent:opacity-100 group-hover/parent:right-[20px] bottom-[20px] bg-white transition-all duration-500'>
          <div className='flex-center w-[38px] h-[38px] hover:bg-primary/20 transition duration-300'>
            <img src={bagIcon} alt='bagIcon' className='w-[18px] h-[18px] object-contain' />
          </div>
          <div className='flex-center w-[38px] h-[38px] hover:bg-primary/20 transition duration-300'>
            <img src={reloadIcon} alt='reloadIcon' className='w-[18px] h-[18px] object-contain' />
          </div>
          <div className='flex-center w-[38px] h-[38px] hover:bg-primary/20 transition duration-300'>
            <img src={heartIcon} alt='heartIcon' className='w-[18px] h-[18px] object-contain' />
          </div>
          <div className='flex-center w-[38px] h-[38px] hover:bg-primary/20 transition duration-300'>
            <img src={eyeIcon} alt='eyeIcon' className='w-[18px] h-[18px] object-contain' />
          </div>
        </div>
      </div>
      <div>
        <h2 className='text-four text-[16px] mb-[5px]'>
          {product.name.charAt(0).toUpperCase() + product.name.slice(1)}
        </h2>
        <span className='block mb-[7px] text-[15px] text-thr'>${product.price}</span>
      </div>
    </div>
  )
}
