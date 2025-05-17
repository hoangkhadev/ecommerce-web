import { Navigate, Outlet, useLocation } from 'react-router'

export default function PrivateRoutes() {
  const isAuthenticated = true
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
