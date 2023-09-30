import Task from '../../models/taskModel';
import { Response, Request } from 'express';
import { TaskData } from '../../types';

const postTask = async(req:Request, res:Response)=>{
    try {
        const { title, startDate, endDate } = req.body

        if(!title){
            res.status(400).json({error: 'Data is missing to create an event'})
            return
        }

        const newTask = new Task({
            title,
            startDate,
            endDate
        })

        const taskCreated:TaskData = await newTask.save()

        res.status(201).json({
            id: taskCreated._id,
            title: taskCreated.title,
            startDate: taskCreated.startDate,
            endDate: taskCreated.endDate
        })
    } catch (error: any) {
        res.status(500).json({error: error.message})
    }
}

export default postTask