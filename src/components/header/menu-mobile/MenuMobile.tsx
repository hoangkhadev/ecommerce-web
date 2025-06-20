import useSidebar from '@/hooks/useSidebar'

import logo from '@/assets/images/logo.webp'
import closeIcon from '@/assets/icons/svgs/closeIcon.svg'
import searchIcon from '@/assets/icons/svgs/searchIcon.svg'
import arrowRight from '@/assets/icons/svgs/chevronRightIcon.svg'

import Input from '@/components/input'
import { dataMenuMobile } from '@/components/header/constants'
import MenuItem from '@/components/header/menu-item'
import FooterSidebar from '@/components/sidebar/footer-sidebar'
import { useNavigate } from 'react-router'

export default function MenuMobile() {
  const { isOpen, setIsOpen, type } = useSidebar()
  const navigate = useNavigate()

  const handleClose = () => setIsOpen(false)

  return (
    <aside className='relative lg:hidden'>
      <div className={isOpen && type === 'menu-mobile' ? 'overlay' : ''} onClick={handleClose} />

      <div
        className={`sidebar left-0 max-w-[300px] transform transition-all duration-300 ease-in-out ${
          isOpen && type === 'menu-mobile'
            ? 'translate-x-0 opacity-100'
            : '-translate-x-full md:-translate-x-[300px] opacity-0'
        }
      `}
      >
        {isOpen && type === 'menu-mobile' && (
          <div
            className='absolute w-[35px] h-[35px] flex-center bg-white hover:bg-[#ccc] rounded-full shadow cursor-pointer transition-colors duration-300 top-[20px] -right-[50px]'
            onClick={handleClose}
          >
            <img src={closeIcon} alt='Close' />
          </div>
        )}
        <div className='flex flex-col justify-between h-full py-[20px] px-[30px] text-thr'>
          <div className='h-full overflow-hidden hover:overflow-y-auto'>
            <div className='flex-center flex-col gap-[18px] '>
              <div className='max-w-[150px]'>
                <img src={logo} alt='Logo' />
              </div>
              <form action='' className='w-full'>
                <label
                  htmlFor='search-mobile'
                  className='flex-center border border-gray-300 focus-within:border-primary transition'
                >
                  <Input placeholder='Search for products.' id='search-mobile' className='border-none' />
                  <div className='h-[35px] min-w-[35px] max-w-[35px] max-h-[35px] flex-center'>
                    <img src={searchIcon} alt='search icon' />
                  </div>
                </label>
              </form>
              <ul className='flex flex-wrap'>
                {dataMenuMobile.map((item, index) => (
                  <li onClick={handleClose} className='w-full text-[14px] py-[9px] flex-center justify-between'>
                    <MenuItem
                      key={`meu-mobile-${index}`}
                      content={item.content}
                      href={item.href}
                      className='menu-mobile block w-full pl-2'
                    />
                    <span className='relative right-[18px]'>
                      <img src={arrowRight} alt='arrow right' />
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <FooterSidebar
            title1='Sign in'
            title2='Sign up'
            onClick1={() => {
              handleClose()
              navigate('auth/login')
            }}
            onClick2={() => {
              handleClose()
              navigate('auth/register')
            }}
          />
        </div>
      </div>
    </aside>
  )
}
