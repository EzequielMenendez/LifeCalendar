import { useForm } from 'react-hook-form'
import { registerRequest } from '../../api/auth'
import { UserData } from '../../types'

function Register() {

    const {register, handleSubmit} = useForm()

    const onSubmit = async (values: UserData) => {
        await registerRequest(values);
    };

  return (
    <div className='bg-zinc-800 max-w-md p-10 rounded-md'>
        <form onSubmit={handleSubmit(onSubmit as any)}>
            <input type="text" {...register('name', {required: 'true'})} placeholder='name'
            className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'/>
            <input type="email" {...register('email', {required: 'true'})} placeholder='email'
            className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'/>
            <input type="password" {...register('password', {required: 'true', minLength: 6})} placeholder='password'
            className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'/>
            <button type='submit'>Register</button>
        </form>
    </div>
  )
}

export default Register
