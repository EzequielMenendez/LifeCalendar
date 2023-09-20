import express from 'express'
import mongoose from 'mongoose'
import morgan from 'morgan'
import dotenv from 'dotenv'
import router from './routes/index'

dotenv.config()

if(process.env.DB_URL){
    mongoose.connect(process.env.DB_URL)
    .then(()=>{
        console.log('Connected to Data Base')
    })
    .catch((err)=>{
        console.error(err)
    })
}

const server = express()
server.use(express.json())

server.use(morgan('dev'))

const PORT = process.env.PORT || 3001

server.use('/api', router)

server.listen(PORT, ()=>{
    console.log('Server running on post', PORT)
})