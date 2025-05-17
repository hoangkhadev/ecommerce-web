import logo from '@/assets/images/logo.webp'
import menuIcon from '@/assets/icons/svgs/menuIcon.svg'
import cartIcon from '@/assets/icons/svgs/cartIcon.svg'
import heartIcon from '@/assets/icons/svgs/heartIcon.svg'
import reloadIcon from '@/assets/icons/svgs/reloadIcon.svg'

import BoxIcon from '@/components/header/box-icon'
import MenuItem from '@/components/header/menu-item'

import { dataBoxIcon, dataMenu } from '@/components/header/constants'
import { Link } from 'react-router'
import useScrollHandling from '@/hooks/useScrollHandling'
import { useEffect, useState } from 'react'

export default function Header() {
  const { scrollPosition } = useScrollHandling()
  const [fixedPostion, setFixedPosition] = useState(false)

  useEffect(() => {
    setFixedPosition(scrollPosition >= 60)
  }, [scrollPosition])

  return (
    <header
      className={`${fixedPostion ? 'fixed -top-[81px] transform translate-y-[81px] bg-[#FFFFFFE6] shadow-xs shadow-black/15 backdrop-blur-xs transition-transform duration-500 ease-linear' : 'absolute top-0 bg-transparent'} left-0 right-0 z-[1000]`}
    >
      <nav className='wrapper flex items-center justify-between py-[14px]'>
        {/* Header Left */}
        <div>
          <div className='block lg:hidden cursor-pointer'>
            <img src={menuIcon} alt='menuIcon' />
          </div>
          <div className='flex-center gap-[20px] hidden lg:flex'>
            <div className='flex-center gap-[10px]'>
              {dataBoxIcon.map((item, index) => (
                <BoxIcon key={`header-box-icon-${index}`} type={item.type} />
              ))}
            </div>
            <div className='flex-center gap-[20px]'>
              {dataMenu.slice(0, 3).map((item, index) => (
                <MenuItem
                  key={`header-menu-item-left-${index}`}
                  content={item.content}
                  href={item.href}
                  isLink={item.href !== undefined}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Logo */}
        <Link to='/'>
          <img src={logo} alt='Logo' height={53} width={153} className='w-full md:max-w-[153px] max-w-[125px]' />
        </Link>

        {/* Header Right */}
        <div className='flex-center gap-[20px]'>
          <div className='flex-center gap-[20px] hidden lg:flex'>
            {dataMenu.slice(3).map((item, index) => (
              <MenuItem
                key={`header-menu-item-right-${index}`}
                content={item.content}
                href={item.href}
                isLink={item.href !== undefined}
              />
            ))}
          </div>

          <div className='flex-center gap-[20px]'>
            <div className='hidden lg:block cursor-pointer'>
              <img src={reloadIcon} alt='reloadIcon' />
            </div>
            <div className='hidden lg:block cursor-pointer'>
              <img src={heartIcon} alt='heartIcon' />
            </div>
            <div className='relative cursor-pointer mr-3'>
              <img src={cartIcon} alt='cartIcon' />
              <span className='absolute -top-[3px] -right-[11px] h-[18px] w-[18px] bg-primary text-white text-[11px] flex-center rounded-full'>
                0
              </span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
