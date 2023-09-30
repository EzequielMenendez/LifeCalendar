import express from 'express'
import authRequired from '../midlewere/validateToken'
import getTask from '../handlers/taskHandler/getTask'

const taskRouter = express.Router()

taskRouter.get('/', authRequired, getTask)

export default taskRouter