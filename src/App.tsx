import { Suspense } from 'react'
import { RouterProvider } from 'react-router'

import AppRoutes from '@/routes/app-routes'
import Loading from '@/components/loading'

export default function App() {
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={AppRoutes} />
    </Suspense>
  )
}
