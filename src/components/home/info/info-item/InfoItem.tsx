import InfoItemType from '@/types/info-item'

export default function InfoItem({ src, title, description }: InfoItemType) {
  return (
    <div className='p-[15px] lg:w-1/4 md:w-1/2 w-full'>
      <div className='flex-center justify-start'>
        <div className='mr-[20px]'>
          <img src={src} alt={title} />
        </div>
        <div>
          <h2 className='text-[17px] text-white leading-[22px] font-[400] mb-[10px]'>{title}</h2>
          <p className='text-[16px] text-[#FFFFFFC7] leading-[21px]'>{description}</p>
        </div>
      </div>
    </div>
  )
}
