import express from 'express'
import authRequired from '../midlewere/validateToken'
import getAllTask from '../handlers/taskHandler/getAllTask'
import postTask from '../handlers/taskHandler/postTask'
import getTask from '../handlers/taskHandler/getTask'
import putTask from '../handlers/taskHandler/putTask'
import deleteTask from '../handlers/taskHandler/deleteTask'

const taskRouter = express.Router()

taskRouter.get('/', authRequired, getAllTask)

taskRouter.get('/:id', authRequired, getTask)

taskRouter.post('/', authRequired, postTask)

taskRouter.put('/:id', authRequired, putTask)

taskRouter.delete('/:id', authRequired, deleteTask)

export default taskRouter