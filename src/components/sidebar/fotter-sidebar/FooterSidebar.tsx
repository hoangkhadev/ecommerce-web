import Button from '@/components/button'

interface FooterSidebar {
  isCompare?: boolean
  isCart?: boolean
  subTotal?: number
  title1: string
  title2?: string
  onClick1: () => void
  onClick2?: () => void
}

export default function FooterSidebar({
  isCompare = false,
  isCart = false,
  subTotal,
  title1,
  title2,
  onClick1,
  onClick2,
}: FooterSidebar) {
  return (
    <div className='pt-[15px]'>
      {isCart && (
        <div className='flex-center justify-between mb-[20px] text-[16px] font-medium'>
          <span className='uppercase'>Subtotal:</span>
          <span>${subTotal}</span>
        </div>
      )}
      <div className='flex flex-col gap-[10px]'>
        <Button variant='primary' className='w-full uppercase' onClick={onClick1}>
          {title1}
        </Button>
        {!isCompare && (
          <Button variant='outline' className='w-full uppercase' onClick={onClick2}>
            {title2}
          </Button>
        )}
      </div>
    </div>
  )
}
