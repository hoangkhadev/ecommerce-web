import { useState } from 'react'

import { FormikHelpers, useFormik } from 'formik'
import * as Yup from 'yup'

import eyeIcon from '@/assets/icons/svgs/eyeIcon.svg'
import eyeCloseIcon from '@/assets/icons/svgs/eye-closed.svg'

import Button from '@/components/button'
import Input from '@/components/input'
import { useNavigate } from 'react-router'

interface RegisterValues {
  name: string
  email: string
  password: string
  confirm_password: string
}

export default function Register() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const navigate = useNavigate()

  const formik = useFormik<RegisterValues>({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirm_password: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().min(2, 'Name must be least 2 characters').required('Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is requried'),
      password: Yup.string().min(8, 'Password must be least 8 characters').required('Password is requried'),
      confirm_password: Yup.string()
        .min(8, 'Confirm password must be least 8 characters')
        .oneOf([Yup.ref('password')], 'The confirm password does not match the password.')
        .required('Confirm password is requried'),
    }),
    onSubmit: async (values: RegisterValues, { setSubmitting }: FormikHelpers<RegisterValues>) => {
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
      <h1 className='font-medium text-center mb-4 text-xl sm:text-2xl text-[#333]'>SIGN UP</h1>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor='name' className='block mb-2'>
          <p className='text-sm font-normal mb-[2px]'>
            Name <span>*</span>
          </p>
          <Input
            type='text'
            id='name'
            name='name'
            className='h-[40px]'
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.name}
            disabled={formik.isSubmitting}
          />
          {formik.errors.name && formik.touched.name && (
            <p className='text-xs mt-[1px] text-rose-500'>{formik.errors.name}</p>
          )}
        </label>

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
