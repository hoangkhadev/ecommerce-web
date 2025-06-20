import { useState } from 'react'

import { FormikHelpers, useFormik } from 'formik'
import * as Yup from 'yup'

import eyeIcon from '@/assets/icons/svgs/eyeIcon.svg'
import eyeCloseIcon from '@/assets/icons/svgs/eye-closed.svg'

import Button from '@/components/button'
import Input from '@/components/input'
import { useNavigate } from 'react-router'

interface LoginFormValues {
  email: string
  password: string
}

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()

  const formik = useFormik<LoginFormValues>({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Email is requried'),
      password: Yup.string().min(8, 'Password must be least 8 characters').required('Password is requried'),
    }),
    onSubmit: async (values: LoginFormValues, { setSubmitting }: FormikHelpers<LoginFormValues>) => {
      try {
        setSubmitting(true)
        await new Promise((resolve) => setTimeout(resolve, 3000))
        console.log('Submit', values)
      } catch (error) {
        console.log(error)
      } finally {
        setSubmitting(false)
      }
    },
  })

  return (
    <div className='max-w-sm mx-auto py-10 wrapper'>
      {formik.isSubmitting && <div className='overlay' />}
      <h1 className='font-medium text-center mb-4 text-xl sm:text-2xl text-[#333]'>SIGN IN</h1>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor='email' className='block mb-2'>
          <p className='text-sm font-normal mb-[2px]'>
            Email <span>*</span>
          </p>
          <Input
            type='text'
            id='email'
            name='email'
            className='h-[40px]'
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.email}
            disabled={formik.isSubmitting}
          />
          {formik.errors.email && formik.touched.email && (
            <p className='text-xs mt-[1px] text-rose-500'>{formik.errors.email}</p>
          )}
        </label>

        <label htmlFor='password' className='block mb-2'>
          <p className='text-sm font-normal mb-[2px]'>
            Password <span>*</span>
          </p>
          <div className='relative'>
            <Input
              type={showPassword ? 'text' : 'password'}
              id='password'
              name='password'
              className='h-[40px]'
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.password}
              disabled={formik.isSubmitting}
            />
            <img
              onClick={() => setShowPassword((prev) => !prev)}
              src={showPassword ? eyeCloseIcon : eyeIcon}
              alt='Eye Icon'
              className='absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer'
            />
          </div>
          {formik.errors.password && formik.touched.password && (
            <p className='text-xs mt-[1px] text-rose-500'>{formik.errors.password}</p>
          )}
        </label>

        <label htmlFor='remember-me' className='flex items-center gap-1 mb-2 w-fit'>
          <input type='checkbox' id='remember-me' />
          <span className='text-sm'>Remember me</span>
        </label>

        <Button className='w-full mb-2' type='submit' disabled={formik.isSubmitting}>
          {formik.isSubmitting ? 'Loading...' : 'Login'}
        </Button>

        <Button onClick={() => navigate('/auth/register')} className='w-full' type='button' variant='outline'>
          Don't have an account?
        </Button>
      </form>
      <div className='text-center text-sm mt-4 cursor-pointer'>Lost your password?</div>
    </div>
  )
}
