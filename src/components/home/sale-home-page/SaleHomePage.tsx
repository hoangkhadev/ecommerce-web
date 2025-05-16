import saleBanner1 from '@/assets/images/sale-banner-1.webp'
import saleBanner2 from '@/assets/images/sale-banner-2.webp'

import Button from '@/components/button'
import useTranslateXImage from '@/hooks/useTranslateXImage'

export default function SaleHomePage() {
  const { translateXPosition } = useTranslateXImage()

  return (
    <section className='mt-[50px]'>
      <div className='flex-center w-full flex-col text-center p-[15px] lg:hidden'>
        <h2 className='text-[30px] text-four font-[400] capitalize leading-[46px] mb-[20px]'>Sale of the year</h2>
        <div className='text-[16px] text-thr leading-[26px] font-[400] mb-[20px]'>
          Libero sed faucibus facilisis fermentum. Est nibh sed massa sodales.
        </div>
        <div className='my-[15px]'>
          <Button variant='outline' className='py-[13px] px-[45px]'>
            Read more
          </Button>
        </div>
      </div>

      <div className='flex-center justify-between'>
        <div
          className='w-[48%] lg:w-[100%] flex-center'
          style={{
            transform: `translateX(${translateXPosition}px)`,
            transition: 'transform linear 1000ms',
          }}
        >
          <img src={saleBanner1} alt='saleBanner1' />
        </div>

        <div className='flex-center w-[60%] flex-col text-center px-[60px] hidden lg:flex'>
          <h2 className='text-[35px] text-four font-[400] capitalize leading-[46px] mb-[20px]'>Sale of the year</h2>
          <div className='text-[16px] text-thr leading-[26px] font-[400] mb-[20px]'>
            Libero sed faucibus facilisis fermentum. Est nibh sed massa sodales.
          </div>
          <div className='mt-[20px]'>
            <Button variant='outline' className='py-[13px] px-[45px]'>
              Read more
            </Button>
          </div>
        </div>

        <div
          className='w-[48%] lg:w-[100%] flex-center'
          style={{
            transform: `translateX(-${translateXPosition}px)`,
            transition: 'transform linear 1000ms',
          }}
        >
          <img src={saleBanner2} alt='saleBanner2' />
        </div>
      </div>
    </section>
  )
}
