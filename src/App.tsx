import { Suspense } from 'react'
import { RouterProvider } from 'react-router'

import AppRoutes from '@/routes/app-routes'

import Loading from '@/components/loading'

import SidebarProvider from '@/providers/sidebar'
import ToastProvider from '@/providers/toast'

export default function App() {
  return (
    <ToastProvider>
      <SidebarProvider>
        <Suspense fallback={<Loading />}>
          <RouterProvider router={AppRoutes} />
        </Suspense>
      </SidebarProvider>
    </ToastProvider>
  )
}
