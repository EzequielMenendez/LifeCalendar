import express from 'express'
import registerUser from '../handlers/userHandler/registerUser'
import loginUser from '../handlers/userHandler/loginUser'
import logoutUser from '../handlers/userHandler/logoutUser'

const userRouter = express.Router()

userRouter.post('/login', loginUser)

userRouter.post('/register', registerUser)

userRouter.post('/logout', logoutUser)

export default userRouter