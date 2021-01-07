const asyncHandler = require('express-async-handler')
const QuestionModel = require('../models/QuestionModel')

const index = (req, res) => {
    res.status(501).send('Unimplemented')
}

const create = asyncHandler(async (req, res) => {
    const userID = req.userID
    const { title, space, contextLink } = req.body

    if (!(title && space)) {
        res.status(400).send('Missing Parameters')
        return
    }

    try {
        const question = await QuestionModel.create({ title: title, space: space, createdBy: userID })
        if (contextLink) {
            question.contextLink = contextLink
            await question.save()
        }
        res.send(question._id)
    } catch (error) {
        const message = error.message ? error.message : error
        res.status(500).send(message)
    }

})

const edit = asyncHandler(async (req, res) => {
    const userID = req.userID
    const { id, title, space, contextLink } = req.body

    if (!(id && title && space)) {
        res.status(400).send('Missing Parameters')
        return
    }

    try {
        const question = await QuestionModel.findById(id)

        if (!question) {
            res.status(404).send('Question Not Found')
            return
        }

        if (question.createdBy != userID) {
            res.status(401).send('Unauthorized')
            return
        }

        question.title = title
        question.space = space
        if (contextLink) {
            question.contextLink = contextLink
        }
        await question.save()
        res.send(question._id)
    } catch (error) {
        const message = error.message ? error.message : error
        res.status(500).send(message)
    }

})

const destroy = asyncHandler(async (req, res) => {
    const userID = req.userID
    const { id } = req.body

    if (!(id)) {
        res.status(400).send('Missing Parameters')
        return
    }

    try {
        const question = await QuestionModel.findById(id)
        if (!question) {
            res.status(404).send('Question Not Found')
            return
        }

        if (question.createdBy != userID) {
            res.status(401).send('Unauthorized')
            return
        }
        await QuestionModel.deleteOne(question)
        res.send('Deleted')
    } catch (error) {
        const message = error.message ? error.message : error
        res.status(500).send(message)
    }

})

module.exports = {
    index,
    create,
    edit,
    destroy
}