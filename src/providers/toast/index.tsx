import ToastContext from '@/contexts/toast'
import { Bounce, ToastContainer, toast } from 'react-toastify'

export default function ToastProvider({ children }: { children: React.ReactNode }) {
  const value = {
    toast,
  }

  return (
    <ToastContext.Provider value={value}>
      {children}
      <ToastContainer
        position='top-center'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
        transition={Bounce}
      />
    </ToastContext.Provider>
  )
}
