import { useForm } from "react-hook-form"
import { Task } from "../../types"
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import { useState, useEffect } from 'react'
import { useDispatch } from "react-redux"
import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
import { updateTask } from "../../redux/actions"
import Swal from 'sweetalert2'
dayjs.extend(utc)

const TaskUpdate = (props:any) => {
    const {id, task, onCloseUpdate} = props
    const dispatch = useDispatch()
    const {register, handleSubmit, formState:{errors}, setValue} = useForm()
    const [ startDate, setStartDate ] = useState(new Date(task.startDate))
    const [ endDate, setEndDate ] = useState(new Date(task.endDate))
    const [ minDate, _setMinDate ] = useState(new Date())
    const [ dateError, setDateError ] = useState("")

    useEffect(()=> {
        setValue('title', task.title)
    }, [])

    useEffect(()=> {
        if(dateError !== ""){
            const timer = setTimeout(()=>{
                setDateError("")
            }, 10000)
            return () => clearTimeout(timer)
        }
    },[dateError])


    const onSubmit = (async(data:Task)=>{

        const formattedStartDate = dayjs(startDate).format("YYYY-MM-DDTHH:mm:ss")
        const formattedEndDate = dayjs(endDate).format("YYYY-MM-DDTHH:mm:ss")

        if (dayjs(formattedEndDate).isBefore(formattedStartDate)) {
            setDateError("The end date cannot be before the start date.")
            return
        }

        const result = await Swal.fire({
            title: "You're sure?",
            text: 'Do you want to update this event?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'yes, update it',
            cancelButtonText: 'Cancel',
        });
        const values:Task = {
            title: data.title,
            startDate: formattedStartDate,
            endDate: formattedEndDate
        }
        if (result.isConfirmed) {
            await dispatch(updateTask(id, values) as any)
            onCloseUpdate()
        }
    })

    const onChangeStart = (date:Date) => {
        setStartDate(date)
    }

    const onChangeEnd = (date:Date) => {
        setEndDate(date)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label className="text-lg font-bold">Title:</label>
                <input
                type="title"
                id="title"
                {...register('title', {
                    required: 'Title is required',
                })}
                placeholder="Title"
                className="inputs"
                />
                {errors.title && <p className='text-red-500'>Title is required</p>}
                <label className="text-lg font-bold">Start Date:</label>
                <DatePicker
                selected={startDate}
                onChange={(date:Date) => onChangeStart(date)}
                withPortal
                showTimeSelect
                minDate={minDate}
                dateFormat="MMMM d, yyyy h:mm aa"
                className="inputs"
                />
                <label className="text-lg font-bold">End Date:</label>
                <DatePicker 
                selected={endDate}
                onChange={(date:Date) => onChangeEnd(date)}
                withPortal
                showTimeSelect
                minDate={startDate}
                dateFormat="MMMM d, yyyy h:mm aa"
                className="inputs"
                />
                {dateError !== "" && <p className="text-red-500">{dateError}</p>}
                <button type='submit' className="bg-blue-500 hover:bg-blue-600 w-32 h-10 rounded-md shadow-md mt-4">Update Task</button>
            </form>
        </div>
    )
}

export default TaskUpdate