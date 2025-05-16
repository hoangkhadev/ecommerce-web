import logo from '@/assets/images/logo.webp'
import menuIcon from '@/assets/icons/svgs/menuIcon.svg'
import cartIcon from '@/assets/icons/svgs/cartIcon.svg'
import heartIcon from '@/assets/icons/svgs/heartIcon.svg'
import reloadIcon from '@/assets/icons/svgs/reloadIcon.svg'

import BoxIcon from '@/components/header/box-icon'
import MenuItem from '@/components/header/menu-item'

import { dataBoxIcon, dataMenu } from '@/components/header/constants'

export default function Header() {
  return (
    <header>
      <nav className='wrapper flex items-center justify-between py-[10px]'>
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
                <MenuItem key={`header-menu-item-left-${index}`} content={item.content} />
              ))}
            </div>
          </div>
        </div>

        {/* Logo */}
        <div>
          <img src={logo} alt='Logo' height={53} width={153} className='w-full md:max-w-[153px] max-w-[125px]' />
        </div>

        {/* Header Right */}
        <div className='flex-center gap-[20px]'>
          <div className='flex-center gap-[20px] hidden lg:flex'>
            {dataMenu.slice(3).map((item, index) => (
              <MenuItem key={`header-menu-item-right-${index}`} content={item.content} />
            ))}
          </div>

          <div className='flex-center gap-[20px]'>
            <div className='hidden lg:block cursor-pointer'>
              <img src={reloadIcon} alt='reloadIcon' />
            </div>
            <div className='hidden lg:block cursor-pointer'>
              <img src={heartIcon} alt='heartIcon' />
            </div>
            <div className='relative cursor-pointer'>
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
