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

  return (
    <div>
        <h3>{task?.title}</h3>
        <p>{task?.startDate.toString()}</p>
        <p>{task?.endDate.toString()}</p>
    </div>
  );
};

export default TaskDetail