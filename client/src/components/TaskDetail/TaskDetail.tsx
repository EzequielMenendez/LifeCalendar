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
                <button onClick={()=> onCloseUpdate()} className="bg-red-500 w-8 h-8 rounded-full hover:bg-red-600 shadow-md mb-2">X</button>
                <TaskUpdate id={id} task={task} onCloseUpdate={onCloseUpdate}/>
            </div>
        )
    }

  return (
<div>
  <div className="mb-4">
    <p className="text-lg font-bold">Title:</p>
    <p>{task?.title}</p>
  </div>
  <div className="mb-4">
    <p className="text-lg font-bold">Start Date:</p>
    <p>{startDate}</p>
  </div>
  <div className="mb-4">
    <p className="text-lg font-bold">End Date:</p>
    <p>{endDate}</p>
  </div>
  <div className="flex gap-4 mt-6">
    <button
      onClick={onShowUpdate}
      className="bg-blue-500 hover:bg-blue-600 w-32 h-10 rounded-md shadow-md"
      aria-label="Editar Tarea"
    >
      Update Event
    </button>
    <button
      onClick={onDelete}
      className="bg-red-500 hover:bg-red-600 w-32 h-10 rounded-md shadow-md"
      aria-label="Eliminar Tarea"
    >
      Delete Event
    </button>
  </div>
</div>
  )
}

export default TaskDetail