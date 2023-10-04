import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GlobalState, TaskRes } from '../../types'
import { deleteTask, getTaskDetail, updateTask } from '../../redux/actions'
import TaskUpdate from '../TaskUpdate/TaskUpdate';

const TaskDetail = (props:any) => {
    const {id} = props
    const dispatch = useDispatch()
    const task:TaskRes | null = useSelector((state:GlobalState) => state.taskDetail)
    const reset = useSelector((state: GlobalState)=>state.resetCalendar)
    const [ showUptade, setShowUpdate ] = useState(false)

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

    const onDelete = () => {
        dispatch(deleteTask(id) as any)
    }

    const onShowUpdate = () => {
        setShowUpdate(true)
    }

    const onCloseUpdate = () => {
        setShowUpdate(false)
    }

    const onUpdate = () => {
        if(task){
            dispatch(updateTask(id, task) as any)
        }
    }

    if(showUptade){
        return(
            <div>
                <TaskUpdate id={id} task={task}/>
                <button onClick={()=> onCloseUpdate()}>X</button>
            </div>
        )
    }

  return (
    <div>
        <h3>title: {task?.title}</h3>
        <p>start Date: {startDate}</p>
        <p>end Date: {endDate}</p>
        <button onClick={onShowUpdate}>Uptade Task</button><br></br>
        <button onClick={onDelete}>Delete Task</button>
    </div>
  )
}

export default TaskDetail