import express from 'express'
import morgan from 'morgan'
import dotenv from 'dotenv'
import router from './routes/index'
import connectDb from './db'
import cookieParser from 'cookie-parser'

dotenv.config()

if(process.env.DB_URL){
    connectDb(process.env.DB_URL)
}

const server = express()
server.use(express.json())
server.use(cookieParser())

server.use(morgan('dev'))

const PORT = process.env.PORT || 3001

server.use('/api', router)

server.listen(PORT, ()=>{
    console.log('Server running on post', PORT)
})