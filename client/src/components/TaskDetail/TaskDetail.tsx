import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GlobalState, TaskRes } from '../../types'
import { deleteTask, getTaskDetail} from '../../redux/actions'
import TaskUpdate from '../TaskUpdate/TaskUpdate';
import Swal from 'sweetalert2'

const TaskDetail = (props:any) => {
    const {id, setShowUpdate, showUpdate, handleCloseDetail} = props
    const dispatch = useDispatch()
    const task:TaskRes | null = useSelector((state:GlobalState) => state.taskDetail)
    const reset = useSelector((state: GlobalState)=>state.resetCalendar)

    useEffect(()=>{
        if(id){
            dispatch(getTaskDetail(id) as any)
        }
    },[id, reset])

    const options:any = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: 'numeric', 
        minute: 'numeric', 
        hour12: true 
    };

    let startDate = ""
    let endDate = ""

    if(task){
        startDate = new Date(task?.startDate).toLocaleDateString('en-US', options)
        endDate = new Date(task?.endDate).toLocaleDateString('en-US', options)
    }

    const onDelete = async() => {
    const result = await Swal.fire({
        title: "You're sure?",
        text: 'This action cannot be undone',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'yes, delete it',
        cancelButtonText: 'Cancel',
    });
    if (result.isConfirmed) {
        handleCloseDetail();
        dispatch(deleteTask(id) as any);
    }
    }

    const onShowUpdate = () => {
        setShowUpdate(true)
    }

    const onCloseUpdate = () => {
        setShowUpdate(false)
    }

    if(showUpdate){
        return(
            <div>
                <button onClick={()=> onCloseUpdate()} className="bg-red-600 w-6 h-6 rounded-md hover:bg-red-700">X</button>
                <TaskUpdate id={id} task={task} onCloseUpdate={onCloseUpdate}/>
            </div>
        )
    }

  return (
    <div>
        <p>Title:</p>
        <p>{task?.title}</p>
        <p>Start Date:</p>
        <p>{startDate}</p>
        <p>End Date:</p>
        <p>{endDate}</p>
        <div className='flex gap-2 flex-wrap mt-4'>
            <button onClick={onShowUpdate} className='bg-sky-500 w-24 h-7 rounded-md'>Uptade Task</button><br></br>
            <button onClick={onDelete} className='bg-red-600 w-24 h-7 rounded-md'>Delete Task</button>
        </div>
    </div>
  )
}

export default TaskDetail