type SizeType = {
  name: string
  amount: string
}
export default interface ProductType {
  _id: string
  name: string
  price: number
  description: string
  type: string
  size: SizeType[]
  material: string
  images: string[]
}
