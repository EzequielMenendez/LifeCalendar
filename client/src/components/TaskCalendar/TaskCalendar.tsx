import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/es';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { GlobalState, MyEvent, TaskRes } from '../../types';
import { getAllTask } from '../../redux/actions';

const localizer = momentLocalizer(moment)

const TaskCalendar = (props:any) => {

  const dispatch = useDispatch()
  const tasks = useSelector((state:GlobalState)=>state.allTask)
  const reset = useSelector((state: GlobalState)=>state.resetCalendar)

  useEffect(()=>{
      dispatch(getAllTask() as any)
  },[reset])

  const events: MyEvent[] = tasks.map((task: TaskRes) => {
    const startDate = task.startDate ? new Date(task.startDate) : new Date()
    const endDate = task.endDate ? new Date(task.endDate) : new Date()
      
    return {
      id: task.id,
      title: task.title,
      start: startDate,
      end: endDate,
    };
  });

  const onClick = (event: any) => {
    props.setShowDetails(event.id)
  }

  return (
    <div>
      <Calendar
        events={events}
        startAccessor="start"
        endAccessor="end"
        localizer={localizer}
        style={{ height: 600 }}
        onSelectEvent={onClick}
      />
    </div>
  );
};

export default TaskCalendar;