import logo from '@/assets/images/logo-footer.webp'
import payment from '@/assets/images/payment.webp'

import { dataMenuFooter } from '@/components/footer/constants'
import { Link } from 'react-router'

export default function Footer() {
  return (
    <footer className='bg-[#363636] py-[40px] mt-[80px]'>
      <section className='wrapper p-[15px] flex-center flex-col text-center'>
        <div className='mb-[20px]'>
          <img src={logo} alt='Logo' className='max-w-[160px]' />
        </div>

        <ul className='mb-[20px] flex-center flex-wrap gap-x-[22px] gap-y-[8px]'>
          {dataMenuFooter.map((item, index) => (
            <li
              key={`menu-footer-${index}`}
              className='text-white hover:text-[#cccccc] text-[15px] leading-[20px] font-[400] capitalize transition-colors duration-300  cursor-pointer'
            >
              {item.href ? <Link to={item.href}>{item.content}</Link> : <span>{item.content}</span>}
            </li>
          ))}
        </ul>

        <div className='text-[16px] text-white leading-[21px] font-[400] mb-[20px]'>Guaranteed safe ckeckout</div>

        <div className='mb-[40px]'>
          <img src={payment} alt='payment' />
        </div>

        <div className='text-[15px] text-white leading-[21px] font-[400]'>
          Copyright © {new Date().getFullYear()} <span className='underline'>hoangkhadev</span>. Created by&nbsp;
          <span className='underline'>hoangkhadev</span>
        </div>
      </section>
    </footer>
  )
}
