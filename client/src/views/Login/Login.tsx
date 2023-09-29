import { useForm } from "react-hook-form"
//import { useAuth } from "../../context/AuthContext"
import { GlobalState, LoginUser } from "../../types"
import { useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { singIn } from "../../redux/actions"
import { useDispatch, useSelector} from "react-redux"

function Login() {

  const {register, handleSubmit, formState:{errors}} = useForm()
  //const { singIn, isAuthenticated, errors: siginError} = useAuth()
  const isAuthenticated = useSelector((state:GlobalState)=>state.isAuth)
  const siginError = useSelector((state:GlobalState)=>state.errors)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(()=>{
    if(isAuthenticated)navigate('/home')
  }, [isAuthenticated])

  const onSubmit = ((values:LoginUser)=>{
    dispatch(singIn(values) as any)
    //singIn(values)
  })

  return (
    <div className='flex h-[calc(100vh-100px)] items-center justify-center'>
      <div className=" bg-zinc-800 max-w-md p-10 rounded-md">
        <h2 className="text-2xl font-bold">Login</h2>
        {
        siginError && (
          <div>
            <p className='bg-red-500 p-2 text-white my-2'>{siginError}</p>
          </div>
        )
        }
        <form onSubmit={handleSubmit(onSubmit as any)}>
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
          <button type='submit'>Login</button>
        </form>

        <p className="flex gap-x-2 justify-between">Don´t have an account? <Link to="/register" className="text-sky-500">Sing Up</Link></p>
      </div>
    </div>
  )
}

export default Login
