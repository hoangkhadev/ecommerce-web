import axiosClient from '@/api/axiosClient'

const getProducts = async () => {
  const res = await axiosClient.get('/product')
  return res.data
}

export { getProducts }
