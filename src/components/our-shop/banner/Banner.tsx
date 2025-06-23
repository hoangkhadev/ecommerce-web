import Button from '@/components/button'
import CountdownTimer from '@/components/countdown-timer'

export default function Banner() {
  const targetDate = '2026-06-22:00:00:00'

  return (
    <section className='our-shop-banner h-[380px] sm:h-[250px] mb-6'>
      <div className='flex-center flex-col pt-[50px]'>
        <div className='mb-[20px] flex-center flex-wrap'>
          <CountdownTimer targetDate={targetDate} />
        </div>
        <h2 className='mb-[20px] text-[28px] text-four capitalize leading-[40px] font-[400] text-center'>
          The classics make a comeback
        </h2>
        <Button variant='primary' className='py-[11px] px-[50px]'>
          Buy now
        </Button>
      </div>
    </section>
  )
}
