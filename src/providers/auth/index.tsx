import { useEffect, useState } from 'react'
import { AuthContextType } from '@/types/context'
import AuthContext from '@/contexts/auth'
import { UserType } from '@/types/user'
import { getInfo } from '@/api/auth.service'
import Cookies from 'js-cookie'

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserType | null>(null)
  const userId = Cookies.get('userId') ?? ''

  const handleLogout = () => {
    Cookies.remove('id')
    Cookies.remove('token')
    Cookies.remove('refreshToken')
    setUser(null)
  }

  useEffect(() => {
    const getUser = async () => {
      const res = await getInfo(userId)
      const { id, username } = res.data.data
      setUser({ id, username })
    }

    if (userId) {
      getUser()
    }
  }, [userId])

  const value: AuthContextType = {
    user,
    handleLogout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
