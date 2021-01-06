const UserModel = require('../models/userModel')
const asyncHandler = require('express-async-handler')

const { generateToken } = require('../util/tokenManager')

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
            token: generateToken(user._id)
        })
    } else {
        res.status(403).json('Unauthorized')
    }
})

const register = asyncHandler(async (req, res) => {
    res.json('NOT IMPLEMENTED YET')
})

const profile = asyncHandler(async (req, res) => {
    const user = await UserModel.findById(req.userID)

    res.json({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email
    })
})

module.exports = {
    login,
    register,
    profile
}