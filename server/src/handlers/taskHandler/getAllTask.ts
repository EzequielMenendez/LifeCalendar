import Task from '../../models/taskModel';
import { Response, Request } from 'express';
import { TaskData } from '../../types';

const getAllTask = async(req:Request, res:Response)=>{
    try {
        const task:Array<TaskData> | null = await Task.find({
            user: req?.user?.id
        })

        if(!task){
            res.status(404).json({error: 'taskNotFound'})
            return
        }
    
        const filterTask = task.map((t:TaskData)=>{
            return {
                id: t._id,
                title: t.title,
                startDate: t.startDate,
                endDate: t.endDate
            }
        })
    
        res.status(200).json(filterTask)
    } catch (error: any) {
        res.status(500).json({error: error.message})
    }
}

export default getAllTask