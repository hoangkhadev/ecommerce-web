import Footer from '@/components/footer'
import Header from '@/components/header'

import { Outlet } from 'react-router'

export default function MainLayout() {
  return (
    <div className='flex flex-col justify-between min-h-screen h-auto'>
      <div className='relative'>
        <Header />
        <main className='pt-[82px]'>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  )
}
