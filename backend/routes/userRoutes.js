const Router = require('express').Router()
const authorize = require('../middleware/authMiddleware')

const controller = require('../controllers/userController')

Router.post('/login', controller.login)

Router.route('/')
    .get(authorize, controller.profile)
    .put(authorize, controller.edit)
    .delete(authorize,controller.logout)
    .post(controller.register)

module.exports = Router