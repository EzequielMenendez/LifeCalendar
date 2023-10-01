import mongoose from "mongoose"

const taskModel = new mongoose.Schema({
    title: {
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
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true
    }
}, {timestamps: true})

export default mongoose.model('Task', taskModel)