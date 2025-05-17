import { lazy } from 'react'
import { createBrowserRouter } from 'react-router'

const AppRoutes = createBrowserRouter([
  {
    Component: lazy(() => import('@/layouts/main')),
    children: [
      {
        Component: lazy(() => import('@/routes/private-routes')),
        children: [
          { path: '/cart', Component: lazy(() => import('@/pages/cart')) },
          { path: '/my-account', Component: lazy(() => import('@/pages/profile')) },
          { path: '/wish-list', Component: lazy(() => import('@/pages/wish-list')) },
        ],
      },

      { path: '/', Component: lazy(() => import('@/pages/home')) },
      { path: '/product/:id', Component: lazy(() => import('@/pages/product-detail')) },
      { path: '/shop', Component: lazy(() => import('@/pages/our-shop')) },
      { path: '/about-us', Component: lazy(() => import('@/pages/about')) },
      { path: '/contact-us', Component: lazy(() => import('@/pages/contact')) },
      { path: '/auth/login', Component: lazy(() => import('@/pages/auth/login')) },
      { path: '/auth/register', Component: lazy(() => import('@/pages/auth/register')) },
    ],
  },
  {
    path: '*',
    Component: lazy(() => import('@/pages/not-found')),
  },
])

export default AppRoutes
