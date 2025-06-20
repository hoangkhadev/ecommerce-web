import Footer from '@/components/footer'
import Header from '@/components/header'
import MenuMobile from '@/components/header/menu-mobile'
import ScrollToTop from '@/components/scroll-to-top'
import Sidebar from '@/components/sidebar'

import { Outlet } from 'react-router'

export default function MainLayout() {
  return (
    <>
      <ScrollToTop />
      <div className='flex flex-col justify-between min-h-screen'>
        <div className='relative'>
          <Header />
          <main className='pt-[82px]'>
            <Outlet />
          </main>
        </div>
        <Footer />
      </div>
      <Sidebar />
      <MenuMobile />
    </>
  )
}
