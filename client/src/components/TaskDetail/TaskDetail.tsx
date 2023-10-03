import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GlobalState, TaskRes } from '../../types';
import { getTaskDetail } from '../../redux/actions';

const TaskDetail = (props:any) => {
    const {id} = props
    const dispatch = useDispatch()
    const task:TaskRes | null = useSelector((state:GlobalState) => state.taskDetail)

    useEffect(()=>{
        if(id){
            dispatch(getTaskDetail(id) as any)
        }
    },[id])

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
  return (
    <div>
        <h3>title: {task?.title}</h3>
        <p>start Date: {startDate}</p>
        <p>end Date: {endDate}</p>
    </div>
  );
};

export default TaskDetail