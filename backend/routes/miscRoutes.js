const Router = require('express').Router()
const controller = require('../controllers/miscController')

Router.route('/refresh').post(controller.refreshToken)

module.exports = Router