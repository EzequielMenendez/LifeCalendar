import express from 'express'
import postUser from '../handlers/userHandler/postUser'

const userRouter = express.Router()

userRouter.get('/', (_req, res)=>{
    
    res.status(200).send("All Users")
})

userRouter.post('/', async(req, res)=>{
    const newUser = postUser(req.body)
    res.status(201).json({message: "User created susesfully", newUser})
})

export default userRouter