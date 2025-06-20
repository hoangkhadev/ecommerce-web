import axiosClient from '@/api/axiosClient'

type AuthType = {
  username: string
  password: string
}

const register = async (body: AuthType) => {
  return await axiosClient.post('/register', body)
}

const login = async (body: AuthType) => {
  return await axiosClient.post('/login', body)
}

const getInfo = async () => {
  const id = localStorage.getItem('id')
  return await axiosClient.get(`/user/info/${id}`)
}

export { register, login, getInfo }
