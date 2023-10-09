import express from 'express'
import morgan from 'morgan'
import dotenv from 'dotenv'
import router from './routes/index'
import connectDb from './db'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import cronOn from './cron-on/cron-on'
import cron from 'node-cron'

dotenv.config()

if(process.env.DB_URL){
    connectDb(process.env.DB_URL)
}

const server = express()
server.use(cors({
    origin: '*',
    credentials: true
}))
server.use(express.json())
server.use(cookieParser())

server.use(morgan('dev'))

const PORT = process.env.PORT || 3001

server.use('/api', router)

server.listen(PORT, ()=>{
    console.log('Server running on post', PORT)
})

cron.schedule('*/10 * * * *', async () => {
    cronOn()
});