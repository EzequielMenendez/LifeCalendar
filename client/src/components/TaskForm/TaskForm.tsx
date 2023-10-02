import { useForm } from "react-hook-form"

function TaskForm(){
    const {register, handleSubmit, formState:{errors}} = useForm()

    return(
        <div className="flex h-[calc(100vh-100px)] items-center justify-center">
            <div className="bg-zinc-800 max-w-md p-10 rounded-md">
                <form>
                    <input
                    type="title"
                    id="title"
                    {...register('title', {
                     required: 'Title is required',
                    })}
                    placeholder="Title"
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    />
                    {errors.title && <p className='text-red-500'>Title is required</p>}
                    <button type='submit'>Create Task</button>
                </form>
            </div>
        </div>
    )
}

export default TaskForm