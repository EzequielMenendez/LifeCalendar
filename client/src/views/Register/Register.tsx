import { useForm } from 'react-hook-form'
import { UserData } from '../../types'
import { useAuth } from '../../context/AuthContext'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Register() {

  const {register, handleSubmit, formState:{errors}} = useForm()
  const { singUp, isAuthenticated, errors: registerError }:any = useAuth()
  const navigate = useNavigate()

  useEffect(()=>{
    if(isAuthenticated)navigate('/')
  }, [isAuthenticated])

  const onSubmit = async (values: UserData) => {
    singUp(values)
  };  

  return (
    <div className='bg-zinc-800 max-w-md p-10 rounded-md'>
      {
        registerError && (
          <div>
            <p className='bg-red-500 p-2 text-white'>{registerError}</p>
          </div>
        )
      }
        <form onSubmit={handleSubmit(onSubmit as any)}>
            <input type="text" {...register('name', {required: 'true'})} placeholder='name'
            className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'/>
            {errors.name && <p className='text-red-500'>Name is required</p>}
            <input
            type="email"
            id="email"
            {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
            })}
            placeholder="Email"
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            />
            {errors.email ? (
            <p className="text-red-500">
            {errors.email.type === 'required'
            ? 'Email is required'
            : errors.email.type === 'pattern'
            ? 'Invalid email address'
            : null}
            </p>
            ) : null}
            <input type="password" {...register('password', {required: 'true', minLength: 6})} placeholder='password'
            className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'/>
            {errors.password?.type === 'required' ? (
            <p className='text-red-500'>password is required</p>
            ) : errors.password?.type === 'minLength' ? (
            <p className='text-red-500'>Password must be at least 6 characters</p>
            ) : null}
            <button type='submit'>Register</button>
        </form>
    </div>
  )
}

export default Register
