import express from 'express'
import authRequired from '../midlewere/validateToken'
import getTask from '../handlers/taskHandler/getTask'
import postTask from '../handlers/taskHandler/postTask'

const taskRouter = express.Router()

taskRouter.get('/', authRequired, getTask)

taskRouter.post('/', authRequired, postTask)

export default taskRouter