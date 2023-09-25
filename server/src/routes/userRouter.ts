import express from 'express'
import registerUser from '../handlers/userHandler/registerUser'
import loginUser from '../handlers/userHandler/loginUser'
import logoutUser from '../handlers/userHandler/logoutUser'
import profileUser from '../handlers/userHandler/profileUser'
import authRequired from '../midlewere/validateToken'
import validateSchema from '../midlewere/validateUser'
import { loginSchema, registerSchema } from '../schemas/auth.schema'

const userRouter = express.Router()

userRouter.post('/login', validateSchema(loginSchema), loginUser)

userRouter.post('/register', validateSchema(registerSchema), registerUser)

userRouter.post('/logout', logoutUser)

userRouter.get('/profile', authRequired, profileUser)

export default userRouter