import Button from '@/components/button'
import CountdownTimer from '@/components/countdown-timer'

export default function CountdownBanner() {
  const targateDate = '2025-12-15T00:00:00'

  return (
    <div className='countdown-banner'>
      <div className='flex-center h-full flex-col'>
        <div className='mb-[20px] flex-center flex-wrap'>
          <CountdownTimer targetDate={targateDate} />
        </div>
        <h2 className='mb-[20px] text-[28px] text-four capitalize leading-[40px] font-[400] text-center'>
          The classics make a comeback
        </h2>
        <Button variant='primary' className='py-[11px] px-[50px]'>
          Buy now
        </Button>
      </div>
    </div>
  )
}
