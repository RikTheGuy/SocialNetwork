const Router = require('express').Router()
const authorize = require('../middleware/authMiddleware')

const controller = require('../controllers/userController')

Router.post('/login', controller.login)

Router.route('/').post(controller.register)
Router.route('/').get(authorize, controller.profile)

module.exports = Router