const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 3001

mongoose.connect(process.env.CONECT_DB)

app.listen(port, ()=>{
    console.log('server listening in port', port)
})