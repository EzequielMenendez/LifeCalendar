import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv';

dotenv.config();

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

const PORT = process.env.PORT || 3001

server.listen(PORT, ()=>{
    console.log('Server running on post', PORT)
})