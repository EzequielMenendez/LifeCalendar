import { useForm } from 'react-hook-form'
import { GlobalState, RegisterUser } from '../../types'
//mport { useAuth } from '../../context/AuthContext'
import { useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { singUp } from '../../redux/actions'

function Register() {

  const dispatch = useDispatch()
  const {register, handleSubmit, formState:{errors}} = useForm()
  const isAuthenticated = useSelector((state:GlobalState)=>state.isAuth)
  const registerError = useSelector((state:GlobalState)=>state.errors)
  const navigate = useNavigate()

  useEffect(()=>{
    if(isAuthenticated)navigate('/home')
  }, [isAuthenticated])

  const onSubmit = async (values: RegisterUser) => {
    dispatch(singUp(values) as any)

  };  

  return (
    <div className='flex h-[calc(100vh-100px)] items-center justify-center'>
    <div className='bg-zinc-800 max-w-md p-10 rounded-md'>
    <h2 className="text-2xl font-bold">Register</h2>
      {
        registerError && (
          <div>
            <p className='bg-red-500 p-2 text-white my-2'>{registerError}</p>
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
        <p className="flex gap-x-2 justify-between">Already have an account? <Link to="/login" className="text-sky-500">Sing In</Link></p>
    </div>
    </div>
  )
}

export default Register
