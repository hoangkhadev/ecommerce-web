import { dataInfo } from '@/components/home/info/constants'
import InfoItem from '@/components/home/info/info-item'

export default function Info() {
  return (
    <section className='wrapper'>
      <div className='bg-primary relative -mt-[75px] py-[20px] md:px-[55px]'>
        <div className='flex-center flex-wrap'>
          {dataInfo.map((item, index) => (
            <InfoItem key={`info-${index}`} src={item.src} title={item.title} description={item.description} />
          ))}
        </div>
      </div>
    </section>
  )
}
