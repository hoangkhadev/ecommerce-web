import BoxIconType from '@/types/box-icon'

import fbIcon from '@/assets/icons/svgs/fbIcon.svg'
import insIcon from '@/assets/icons/svgs/insIcon.svg'
import ytbIcon from '@/assets/icons/svgs/ytbIcon.svg'

export default function BoxIcon({ type, href = '' }: BoxIconType) {
  const renderIcon = (type: string) => {
    switch (type) {
      case 'fb':
        return fbIcon
      case 'ins':
        return insIcon
      case 'ytb':
        return ytbIcon
    }
  }

  return (
    <div className='w-[26px] h-[26px] rounded-full bg-primary cursor-pointer flex-center hover:brightness-80 transition duration-300'>
      <img src={renderIcon(type)} alt={type} width={15} height={15} />
    </div>
  )
}
