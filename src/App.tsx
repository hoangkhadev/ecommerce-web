import Header from '@/components/header'
import Banner from '@/components/home/banner'
import Info from '@/components/home/info'

export default function App() {
  return (
    <>
      <div className='relative'>
        <Header />
        <Banner />
      </div>
      <Info />
      <div
        style={{
          height: '400px',
        }}
      ></div>
    </>
  )
}
