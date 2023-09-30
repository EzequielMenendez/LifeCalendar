import mongoose from "mongoose"

const taskModel = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true
    },
    startDate: {
        type: Date,
        default: Date.now
    },
    endDate: {
        type: Date,
        default: Date.now
    }
}, {timestamps: true})

export default mongoose.model('Task', taskModel)