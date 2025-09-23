import mongoose from 'mongoose'

const noteSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: true
    },
    ticket: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Ticket',
        required: true
    },
    text: {
        type: String,
        required: [true, 'Enter a description']
    },
    isStaff: {
        type: Boolean,
        default: false,
    },
    staffId : {
        type: String,
    }
}, {
    timestamps: true
})

const Note  = mongoose.model('Note', noteSchema)
export default Note