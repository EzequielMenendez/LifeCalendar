import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/es';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { GlobalState, MyEvent } from '../../types';
import { getAllTask } from '../../redux/actions';

const events: MyEvent[] = [
    {
      id: 1,
      title: 'Reunión de equipo',
      start: new Date(2023, 9, 5, 10, 0),
      end: new Date(2023, 9, 5, 11, 30),
    },
    {
      id: 2,
      title: 'Cita médica',
      start: new Date(2023, 9, 8, 14, 0),
      end: new Date(2023, 9, 8, 15, 0),
    },
];

const localizer = momentLocalizer(moment)

const MonthCalendar = () => {

    const dispatch = useDispatch()
    const tasks = useSelector((state:GlobalState)=>state.allTask)
    console.log(tasks)

    useEffect(()=>{
        dispatch(getAllTask() as any)
    },[])

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