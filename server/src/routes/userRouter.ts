import express from 'express'
import registerUser from '../handlers/userHandler/registerUser'
import loginUser from '../handlers/userHandler/loginUser'

const userRouter = express.Router()

userRouter.post('/login', async(req, res)=>{
    const { id } = req.body
    const user = await loginUser(id)
    res.status(200).json(user)
})

userRouter.post('/register', async(req, res)=>{
    try {
        const token = await registerUser(req.body)
        res.status(201).json(token)
    } catch (error) {
        res.status(404).json({message: error});
    }
})

export default userRouter