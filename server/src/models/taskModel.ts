import mongoose from "mongoose"

const taskModel = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true
    },
    startDate: {
        type: Date,
        default: new Date()
    },
    endDate: {
        type: Date,
        default: new Date()
    }
}, {timestamps: true})

export default mongoose.model('Task', taskModel)