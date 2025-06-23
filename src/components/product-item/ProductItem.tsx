import ProductType from '@/types/product'

import bagIcon from '@/assets/icons/svgs/bagIcon.svg'
import heartIcon from '@/assets/icons/svgs/heartIcon.svg'
import reloadIcon from '@/assets/icons/svgs/reloadIcon.svg'
import eyeIcon from '@/assets/icons/svgs/eyeIcon.svg'
import Button from '@/components/button'
import { useState } from 'react'

interface ProductItemProps {
  product: ProductType
  isDetail?: boolean
  isShowGrid?: boolean
}

export default function ProductItem({ product, isDetail, isShowGrid }: ProductItemProps) {
  const [sizeChoose, setSizeChoose] = useState(product?.size?.[0]?.name || '')
  const handleChooseSize = (size: string) => {
    setSizeChoose(size)
  }
  return (
    <div
      className={`cursor-pointer group/parent ${!isShowGrid && isDetail ? 'grid grid-cols-2 items-center gap-[20px]' : ''}`}
    >
      <div className='w-full relative mb-[8px] group/parent2'>
        <img className='w-full h-full object-cover transition duration-500' src={product?.images?.[0]} alt='' />
        <img
          src={product?.images?.[1]}
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
        {isDetail && (
          <div className={`flex gap-2 mb-[10px] ${isShowGrid ? 'justify-center' : ''}`}>
            {product?.size?.map((size, index) => (
              <div
                onClick={() => handleChooseSize(size.name)}
                key={`size-${product?._id}-${index}`}
                className={`border  w-[20px] h-[20px] flex-center text-[10px]  hover:border-primary hover:text-primary transition-all  ${sizeChoose === size.name ? 'border-primary text-primary' : 'text-secondary border-[#e1e1e1]'}`}
              >
                {size.name}
              </div>
            ))}
          </div>
        )}
        <div className={isDetail && isShowGrid ? 'text-center' : 'text-start'}>
          <h2 className='text-four text-[16px] mb-[5px]'>
            {product?.name?.charAt(0).toUpperCase() + product?.name?.slice(1)}
          </h2>
          {isDetail && (
            <span className='text-[15px] text-thr text-center'>Brand {product?.type?.padStart(2, '0')}</span>
          )}
          <span className='block mb-[7px] text-[15px] text-thr'>${product?.price}</span>
        </div>
        {isDetail && (
          <div className={`flex-center ${isShowGrid ? 'justify-center' : 'justify-start'}`}>
            <Button className='py-[8px] text-xs'>ADD TO CART</Button>
          </div>
        )}
      </div>
    </div>
  )
}
