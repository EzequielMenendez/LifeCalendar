import mongoose from 'mongoose'

const connectDb = async(DB_URL:string) => {
    await mongoose.connect(DB_URL)
    .then(()=>{
        console.log('Connected to Data Base')
    })
    .catch((err)=>{
        console.error(err)
    })
} 

export default connectDb