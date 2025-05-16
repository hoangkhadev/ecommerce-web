interface AdvancedHeadlineProps {
  title: string
  subTitle: string
}

export default function AdvancedHeadline({ title, subTitle }: AdvancedHeadlineProps) {
  return (
    <section className='mt-[65px] mb-[15px]'>
      <div className='wrapper text-center py-[15px]'>
        <span className='text-[14px] text-thr uppercase leading-[26px]'>{title}</span>
        <h2 className='advanced-headline'>{subTitle}</h2>
      </div>
    </section>
  )
}
