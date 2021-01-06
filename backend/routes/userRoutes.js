const Router = require('express').Router()

const controller = require('../controllers/userController')

Router.post('/login', controller.login)

Router.route('/').post(controller.register)
Router.route('/').get(controller.profile)

module.exports = Router