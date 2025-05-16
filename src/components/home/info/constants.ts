import InfoItemType from '@/types/info-item'

import deliveryTruckIcon from '@/assets/icons/svgs/deliveryTruckIcon.svg'
import creditCardIcon from '@/assets/icons/svgs/creditCardIcon.svg'
import packageBoxIcon from '@/assets/icons/svgs/packageBoxIcon.svg'
import hoursIcon from '@/assets/icons/svgs/hoursIcon.svg'

const dataInfo: InfoItemType[] = [
  { src: deliveryTruckIcon, title: 'Fastest Shipping', description: 'Order at $39 order' },
  { src: creditCardIcon, title: '100% Safe Payments', description: '9 month installments' },
  { src: packageBoxIcon, title: '14-Days Return', description: 'Shop with confidence' },
  { src: hoursIcon, title: '24/7 Online Support', description: 'Delivered to home' },
]

export { dataInfo }
