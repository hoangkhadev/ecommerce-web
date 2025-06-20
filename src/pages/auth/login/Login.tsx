import { useState } from 'react'
import { isAxiosError } from 'axios'
import { Navigate, useNavigate } from 'react-router'
import { toast } from 'react-toastify'

import * as Yup from 'yup'
import { FormikHelpers, useFormik } from 'formik'

import eyeIcon from '@/assets/icons/svgs/eyeIcon.svg'
import eyeCloseIcon from '@/assets/icons/svgs/eye-closed.svg'

import Button from '@/components/button'
import Input from '@/components/input'
import useAuth from '@/hooks/useAuth'
import { login } from '@/api/auth.service'
import Cookies from 'js-cookie'

interface LoginFormValues {
  username: string
  password: string
}

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()
  const { user } = useAuth()

  const formik = useFormik<LoginFormValues>({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().min(2, 'Username must be least 2 characters').required('Username is requried'),
      password: Yup.string().min(6, 'Password must be least 6 characters').required('Password is requried'),
    }),
    onSubmit: async (values: LoginFormValues, { setSubmitting }: FormikHelpers<LoginFormValues>) => {
      try {
        setSubmitting(true)
        const { username, password } = values
        const res = await login({ username, password })
        if (res && res.status === 200) {
          const { id, token, refreshToken } = res.data

          Cookies.set('userId', id)
          Cookies.set('token', token)
          Cookies.set('refreshToken', refreshToken)

          toast.success('Login successfully')
          window.location.replace('/')
        }
        console.log(res)
      } catch (error) {
        if (isAxiosError(error)) {
          const message = error?.response?.data?.message
          toast.error(message)
        }
        console.error(error)
      } finally {
        setSubmitting(false)
      }
    },
  })

  if (user) return <Navigate to={'/'} replace={true} />

  return (
    <div className='max-w-sm mx-auto py-10 wrapper'>
      {formik.isSubmitting && <div className='overlay' />}
      <h1 className='font-medium text-center mb-4 text-xl sm:text-2xl text-[#333]'>SIGN IN</h1>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor='username' className='block mb-2'>
          <p className='text-sm font-normal mb-[2px]'>
            Username <span>*</span>
          </p>
          <Input
            type='text'
            id='username'
            name='username'
            className='h-[40px]'
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.username}
            disabled={formik.isSubmitting}
          />
          {formik.errors.username && formik.touched.username && (
            <p className='text-xs mt-[1px] text-rose-500'>{formik.errors.username}</p>
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
