import CountdownBanner from '@/components/countdown-banner'
import { dataProduct } from '@/components/home/heading-list-products/constants'
import ProductItem from '@/components/product-item'

export default function HeadingListProducts() {
  return (
    <section className='wrapper'>
      <div className='flex md:flex-nowrap flex-wrap gap-[20px]'>
        <div className='w-full md:w-1/2'>
          <CountdownBanner />
        </div>
        <div className='grid grid-cols-2 w-full md:w-1/2 gap-[20px]'>
          {dataProduct.slice(0, 2).map((product, index) => (
            <ProductItem key={`product-${product._id}-${index}`} product={product} />
          ))}
        </div>
      </div>

      <div className='grid grid-cols-2 md:grid-cols-4 w-full gap-[20px] mt-[20px]'>
        {dataProduct.slice(2, 14).map((product, index) => (
          <ProductItem key={`product-${product._id}-${index}`} product={product} />
        ))}
      </div>
    </section>
  )
}
