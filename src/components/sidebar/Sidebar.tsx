import useSidebar from '@/hooks/useSidebar'

import closeIcon from '@/assets/icons/svgs/closeIcon.svg'

import Cart from '@/components/content-sidebar/cart'
import Compare from '@/components/content-sidebar/compare'
import WishList from '@/components/content-sidebar/wish-list'

export default function Sidebar() {
  const { isOpen, setIsOpen, type } = useSidebar()

  const handleClose = () => setIsOpen(false)
  const handleRenderContent = () => {
    switch (type) {
      case 'cart':
        return <Cart />
      case 'compare':
        return <Compare />
      case 'wish-list':
        return <WishList />
    }
  }
  return (
    <aside className='relative'>
      <div className={isOpen ? 'overlay' : ''} onClick={handleClose} />

      <div
        className={`sidebar max-w-[calc(100%-70px)] sm:max-w-[370px] transform transition-all duration-300 ease-in-out ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full md:translate-x-[370px] opacity-0'}`}
      >
        {isOpen && (
          <div
            className='absolute w-[35px] h-[35px] flex-center bg-white hover:bg-[#ccc] rounded-full shadow cursor-pointer transition-colors duration-300 top-[20px] -left-[50px]'
            onClick={handleClose}
          >
            <img src={closeIcon} alt='Close' />
          </div>
        )}
        <div className='flex flex-col justify-between h-full py-[20px] px-[20px] text-thr'>{handleRenderContent()}</div>
      </div>
    </aside>
  )
}
