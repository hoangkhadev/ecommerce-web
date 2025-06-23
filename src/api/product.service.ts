import axiosClient from '@/api/axiosClient'

export type ProductQueryType = {
  sortType: string
  page: number
  limit: string
}

const getProducts = async (query: ProductQueryType) => {
  const { sortType = '0', page = 1, limit = '10' } = query
  const res = await axiosClient.get(`/product?sortType=${sortType}&page=${page}&limit=${limit}`)
  return res.data
}

export { getProducts }
