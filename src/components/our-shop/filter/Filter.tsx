import useOurShop from '@/hooks/useOurShop'

import gridIcon from '@/assets/icons/svgs/gridIcon.svg'
import listIcon from '@/assets/icons/svgs/listIcon.svg'
import SelectBox from '@/components/our-shop/select-box'
import { TypeSelectBox } from '@/components/our-shop/select-box/SelectBox'

export default function Filter() {
  const { showOptions, sortOptions, sortId, showId, setSortId, setShowId, setIsShowGrid } = useOurShop()

  const getSelectVale = (value: string, type: TypeSelectBox) => {
    if (type === 'sort') {
      setSortId(value)
    } else {
      setShowId(value)
    }
  }

  return (
    <div className='flex justify-between flex-col items-start sm:flex-row sm:items-center gap-4 mb-6'>
      <div className='flex items-center gap-4 flex-wrap'>
        <SelectBox options={sortOptions} getValue={getSelectVale} type='sort' selectedValue={sortId} />
        <img
          src={gridIcon}
          alt=''
          height={22}
          width={22}
          className='cursor-pointer'
          onClick={() => setIsShowGrid(true)}
        />
        <div className='h-[22px] w-[1px] bg-[#ccc]' />
        <img
          src={listIcon}
          alt=''
          height={22}
          width={22}
          className='cursor-pointer'
          onClick={() => setIsShowGrid(false)}
        />
      </div>
      <div className='flex items-center gap-2'>
        <div className='text-thr text-xs sm:text-sm'>Show</div>
        <SelectBox options={showOptions} getValue={getSelectVale} type='show' selectedValue={showId} />
      </div>
    </div>
  )
}
