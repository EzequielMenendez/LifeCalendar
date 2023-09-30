import taskModel from '../../models/taskModel';
import { Response, Request } from 'express';
import { TaskData } from '../../types';

const getTask = async(_req:Request, res:Response)=>{
    try {
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
    } catch (error: any) {
        res.status(500).json({error: error.message})
    }
}

export default getTask