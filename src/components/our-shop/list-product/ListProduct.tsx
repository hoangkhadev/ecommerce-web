import Button from '@/components/button'
import ProductItem from '@/components/product-item'
import useOurShop from '@/hooks/useOurShop'

export default function ListProduct() {
  const { products, isShowGrid, isLoading, handleLoadMore, total, isMoreLoading } = useOurShop()
  return (
    <div>
      {isLoading ? (
        <div className='flex-center'>Loading...</div>
      ) : products.length == 0 ? (
        <div className='flex-center'>No products</div>
      ) : (
        <>
          <div
            className={` ${isShowGrid ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[40px]' : 'w-full lg:w-1/2 mx-auto'} `}
          >
            {products?.map((product) => (
              <ProductItem
                key={`our-shop-product-${product?._id}`}
                product={product}
                isDetail={true}
                isShowGrid={isShowGrid}
              />
            ))}
          </div>
          {products.length === total ? null : (
            <div className='flex-center mt-10'>
              <Button onClick={handleLoadMore} variant='outline' className='px-5 text-xs py-[10px] w-fit'>
                {isMoreLoading ? 'Loading...' : 'LOAD MORE PRODUCTS'}
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  )
}
