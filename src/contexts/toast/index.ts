import { createContext } from 'react'
import { ToastContextType } from '@/types/context'

const ToastContext = createContext<ToastContextType | undefined>(undefined)

export default ToastContext
