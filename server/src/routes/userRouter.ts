import express from 'express'
import registerUser from '../handlers/userHandler/registerUser'
import loginUser from '../handlers/userHandler/loginUser'

const userRouter = express.Router()

userRouter.post('/login', async(req, res)=>{
    const { id } = req.body
    const user = await loginUser(id)
    res.status(200).json(user)
})

userRouter.post('/register', registerUser)

export default userRouter