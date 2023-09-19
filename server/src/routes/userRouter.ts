import express from 'express'
import postUser from '../handlers/userHandler/postUser'
import getUser from '../handlers/userHandler/getUser'

const userRouter = express.Router()

userRouter.get('/:id', async(req, res)=>{
    const { id } = req.params
    const user = await getUser(id)
    res.status(200).json(user)
})

userRouter.post('/', async(req, res)=>{
    try {
        const newUser = await postUser(req.body)
        res.status(201).json({message: "User created susesfully", newUser})
    } catch (error) {
        res.status(404).json({message: error});
    }
})

export default userRouter