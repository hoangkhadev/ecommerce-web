import Button from '@/components/button'
import { useNavigate } from 'react-router'

import logo from '@/assets/images/logo.webp'

export default function NotFound() {
  const navigate = useNavigate()

  return (
    <div className='max-w-md w-full mx-auto flex-center h-screen flex-col text-center'>
      <div className='mb-8 '>
        <img src={logo} alt='Logo' className='max-w-[200px]' />
      </div>

      <h1 className='text-5xl font-bold mb-4 text-primary'>404</h1>
      <h2 className='text-2xl font-semibold mb-4'>Page Not Found</h2>
      <p className='mb-8 text-thr'>Oops! The page you're looking for doesn't exist or has been moved.</p>

      <div className='flex flex-col sm:flex-row justify-center gap-4'>
        <Button
          onClick={() =>
            navigate('/', {
              replace: true,
            })
          }
        >
          Go Back Home
        </Button>
      </div>
    </div>
  )
}
