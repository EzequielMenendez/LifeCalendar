import express from 'express'
import registerUser from '../handlers/userHandler/registerUser'
import loginUser from '../handlers/userHandler/loginUser'

const userRouter = express.Router()

userRouter.post('/login', loginUser)

userRouter.post('/register', registerUser)

userRouter.post('/logout')

export default userRouter