const UserModel = require('../models/userModel')
const asyncHandler = require('express-async-handler')

const login = asyncHandler(async (req, res) => {

    const { email, password } = req.body

    if (!(email && password)) {
        res.status(403).json('Unauthorized')
        return
    }

    const user = await UserModel.findOne({ email })

    if (user && await user.matchPassword(password)) {
        res.json({
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            token: null
        })
    } else {
        res.status(403).json('Unauthorized')
    }
})

const register = asyncHandler(async (req, res) => {
    res.json('NOT IMPLEMENTED YET')
})

const profile = (req, res) => {
    res.json('NOT IMPLEMENTED YET')
}

module.exports = {
    login,
    register,
    profile
}