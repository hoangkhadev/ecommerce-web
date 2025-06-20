import { useState } from 'react'

import { FormikHelpers, useFormik } from 'formik'
import * as Yup from 'yup'

import eyeIcon from '@/assets/icons/svgs/eyeIcon.svg'
import eyeCloseIcon from '@/assets/icons/svgs/eye-closed.svg'

import Button from '@/components/button'
import Input from '@/components/input'
import { useNavigate } from 'react-router'
import { register } from '@/api/auth.service'
import { toast } from 'react-toastify'
import { isAxiosError } from 'axios'

interface RegisterValues {
  username: string
  password: string
  confirm_password: string
}

export default function Register() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const navigate = useNavigate()

  const formik = useFormik<RegisterValues>({
    initialValues: {
      username: '',
      password: '',
      confirm_password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().min(2, 'Username must be least 2 characters').required('Username is required'),

      password: Yup.string().min(6, 'Password must be least 6 characters').required('Password is requried'),
      confirm_password: Yup.string()
        .min(6, 'Confirm password must be least 6 characters')
        .oneOf([Yup.ref('password')], 'The confirm password does not match the password.')
        .required('Confirm password is requried'),
    }),
    onSubmit: async (values: RegisterValues, { setSubmitting }: FormikHelpers<RegisterValues>) => {
      try {
        setSubmitting(true)
        const { username, password } = values
        const res = await register({ username, password })
        toast.success(res.data.message)
        navigate('/auth/login', { replace: true })
      } catch (error: unknown) {
        if (isAxiosError(error)) {
          const message = error.response?.data?.message
          toast.error(message)
        } else {
          toast.error('Something went wrong')
          console.log(error)
        }
      } finally {
        setSubmitting(false)
      }
    },
  })

  return (
    <div className='max-w-sm mx-auto py-10 wrapper'>
      {formik.isSubmitting && <div className='overlay' />}
      <h1 className='font-medium text-center mb-4 text-xl sm:text-2xl text-[#333]'>SIGN UP</h1>
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

        <label htmlFor='confirm_password' className='block mb-2'>
          <p className='text-sm font-normal mb-[2px]'>
            Confirm password <span>*</span>
          </p>
          <div className='relative'>
            <Input
              type={showConfirmPassword ? 'text' : 'password'}
              id='confirm_password'
              name='confirm_password'
              className='h-[40px]'
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.confirm_password}
              disabled={formik.isSubmitting}
            />
            <img
              onClick={() => setShowConfirmPassword((prev) => !prev)}
              src={showConfirmPassword ? eyeCloseIcon : eyeIcon}
              alt='Eye Icon'
              className='absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer'
            />
          </div>
          {formik.errors.confirm_password && formik.touched.confirm_password && (
            <p className='text-xs mt-[1px] text-rose-500'>{formik.errors.confirm_password}</p>
          )}
        </label>

        <Button className='w-full mb-2' type='submit' disabled={formik.isSubmitting}>
          {formik.isSubmitting ? 'Loading...' : 'Register'}
        </Button>

        <Button
          onClick={() => navigate('/auth/login')}
          className='w-full'
          type='button'
          variant='outline'
          disabled={formik.isSubmitting}
        >
          Already have an account?
        </Button>
      </form>
    </div>
  )
}
