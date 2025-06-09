import { InputHTMLAttributes } from 'react'

export default function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={`outline-none px-[15px] text-[14px] min-h-[35px] w-full placeholder:font-medium ${className}`}
    />
  )
}
