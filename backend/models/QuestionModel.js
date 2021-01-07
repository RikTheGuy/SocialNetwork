const mongoose = require('mongoose')

const QuestionSchema = ({
    title: {
        type: String,
        required: true
    },
    space: {
        type: String,   //To be changed with Schema
        required: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    contextLink: {
        type: String,
        required: false
    }
})

const Question = mongoose.model('Question', QuestionSchema)

module.exports = Question