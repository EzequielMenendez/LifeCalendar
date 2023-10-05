import Task from '../models/taskModel'
import { sendEmailEvent } from '../emailNotify/emailNotify'
import { TaskData_User } from '../types';

const cronOn = async() => {
    try {
        const now = new Date();
        const fiveMinutesFromNow = new Date(now.getTime() + 10 * 60000)
    
        const tasks:Array<TaskData_User> = await Task.find({
          startDate: {
            $gte: now,
            $lte: fiveMinutesFromNow,
          },
        }).populate('user')
    
        tasks.forEach(async(task:TaskData_User)=>{
            await sendEmailEvent(task.user.email, task.startDate, task.endDate, task.title);
        })
      } catch (error) {
        console.error('Error al enviar correos electrónicos:', error)
      }
}

export default cronOn
