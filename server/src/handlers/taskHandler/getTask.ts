import taskModel from '../../models/taskModel';
import { Response, Request } from 'express';
import { TaskData } from '../../types';

const getTask = async(_req:Request, res:Response)=>{
    const task:Array<TaskData> | null = await taskModel.find()

    if(!task){
        res.status(404).json({error: 'taskNotFound'})
        return
    }

    const filterTask = task.map((t:TaskData)=>{
        return {
            id: t._id,
            name: t.name,
            startDate: t.startDate,
            endDate: t.endDate
        }
    })

    res.status(200).json(filterTask)
}

export default getTask