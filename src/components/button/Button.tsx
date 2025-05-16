import { ButtonHTMLAttributes } from 'react'

type VariantButtonType = 'primary' | 'outline'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: VariantButtonType
}

export default function Button({ variant = 'primary', className, ...props }: ButtonProps) {
  const renderStyleBtn = (variant: VariantButtonType) => {
    switch (variant) {
      case 'primary':
        return 'btn-primary'
      case 'outline':
        return 'btn-outline'
      default:
        return 'btn-primary'
    }
  }

  return (
    <button className={`btn ${renderStyleBtn(variant)} ${className}`} {...props}>
      {props.children}
    </button>
  )
}
