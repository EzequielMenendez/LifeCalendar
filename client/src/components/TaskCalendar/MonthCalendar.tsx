import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/es';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { GlobalState, MyEvent, TaskRes } from '../../types';
import { getAllTask } from '../../redux/actions';

const localizer = momentLocalizer(moment)

const MonthCalendar = () => {

    const dispatch = useDispatch()
    const tasks = useSelector((state:GlobalState)=>state.allTask)
    console.log(tasks)

    useEffect(()=>{
        dispatch(getAllTask() as any)
    },[])

    const events: MyEvent[] = tasks.map((task: TaskRes) => {
        const startDate = new Date(task.startDate)
        const endDate = new Date(task.endDate)
      
        return {
          id: task.id,
          title: task.title,
          start: startDate,
          end: endDate,
        };
    });

  return (
    <div>
      <h2>Calendario React con react-big-calendar</h2>
      <Calendar
        events={events}
        startAccessor="start"
        endAccessor="end"
        localizer={localizer}
        style={{ height: 500 }}
      />
    </div>
  );
};

export default MonthCalendar;