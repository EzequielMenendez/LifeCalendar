import Task from '../../models/taskModel';
import { Response, Request } from 'express';
import { TaskData } from '../../types';

const deleteTask = async(req:Request, res:Response)=>{
    try {
        const { id } = req.params

        if(!id){
            res.status(404).json({error: 'taskNotFound'})
            return
        }
        
        const task:TaskData | null = await Task.findByIdAndDelete(id)

        if(!task){
            res.status(404).json({error: 'taskNotFound'})
            return
        }
    
        res.status(200).json({
            id: task._id,
            title: task.title,
            startDate: task.startDate,
            endDate: task.endDate
        })
    } catch (error: any) {
        res.status(500).json({error: error.message})
    }
}

export default deleteTask