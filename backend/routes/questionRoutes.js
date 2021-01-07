const Router = require('express').Router()
const controller = require('../controllers/questionController')
const authorize = require('../middleware/authMiddleware')

Router.route('/')
    .get(controller.index)
    .post(authorize, controller.create)
    .put(authorize, controller.edit)
    .delete(authorize, controller.destroy)

module.exports = Router