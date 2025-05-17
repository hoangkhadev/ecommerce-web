import Button from '@/components/button'

export default function Banner() {
  return (
    <section className='relative banner flex-center min-h-[600px] lg:min-h-[750px]'>
      <div className='text-center z-[10]'>
        <h1 className='text-[42px] text-four font-[400] capitalize leading-[52px] mb-[20px]'>
          XStore Marseille04 Demo
        </h1>
        <div className='text-[16px] text-thr font-[400] leading-[25px] mb-[40px]'>
          Make yours celebrations even more special this years with beautiful.
        </div>
        <Button className='px-[45px] py-[13px]' variant='primary'>
          Go to shop
        </Button>
      </div>
      <div className='absolute inset-0 bg-[#EBE6E4] lg:opacity-0 opacity-35 transition-all duration-300 overlay-banner' />
    </section>
  )
}
