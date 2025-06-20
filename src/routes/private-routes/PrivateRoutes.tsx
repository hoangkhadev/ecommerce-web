import useAuth from '@/hooks/useAuth'
import { Navigate, Outlet, useLocation } from 'react-router'

export default function PrivateRoutes() {
  const { user } = useAuth()
  const isAuthenticated = user !== null
  const { pathname } = useLocation()

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate
      to='/auth/login'
      state={{
        from: pathname,
      }}
    />
  )
}
