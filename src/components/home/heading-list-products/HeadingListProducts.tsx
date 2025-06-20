import CountdownBanner from '@/components/countdown-banner'
import ProductItem from '@/components/product-item'
import ProductType from '@/types/product'

interface HeadingListProductsProps {
  products: ProductType[]
}
export default function HeadingListProducts({ products }: HeadingListProductsProps) {
  return (
    <section className='wrapper'>
      <div className='flex md:flex-nowrap flex-wrap gap-[20px]'>
        <div className='w-full md:w-1/2'>
          <CountdownBanner />
        </div>
        <div className='grid grid-cols-2 w-full md:w-1/2 gap-[20px]'>
          {products.slice(0, 2).map((product, index) => (
            <ProductItem key={`product-${product._id}-${index}`} product={product} />
          ))}
        </div>
      </div>

      <div className='grid grid-cols-2 md:grid-cols-4 w-full gap-[20px] mt-[20px]'>
        {products.slice(2, 14).map((product, index) => (
          <ProductItem key={`product-${product._id}-${index}`} product={product} />
        ))}
      </div>
    </section>
  )
}
