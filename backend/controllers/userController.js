const UserModel = require('../models/userModel')
const asyncHandler = require('express-async-handler')

const { generateToken, generateRefreshToken, revokeToken } = require('../util/tokenManager')

const login = asyncHandler(async (req, res) => {

    const { email, password } = req.body

    if (!(email && password)) {
        res.status(403).json('Forbidden')
        return
    }

    const user = await UserModel.findOne({ email })

    if (user && await user.matchPassword(password)) {
        res.json({
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            token: generateToken(user._id),
            refreshToken: await generateRefreshToken(user._id)
        })
    } else {
        res.status(401).json('Unauthorized')
    }
})

const register = asyncHandler(async (req, res) => {
    const { firstName, lastName, email, password } = req.body

    if (!(firstName && lastName && email && password)) {
        res.status(403).json('Forbidden')
        return
    }

    const existUser = await UserModel.findOne({ email })

    if (existUser) {
        res.status(403).json('User Exists')
    } else {
        const user = await UserModel.create({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        })

        if (user) {
            res.json({
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                token: generateToken(user._id),
                refreshToken: await generateRefreshToken(user._id)
            })
        }
    }
})

const profile = asyncHandler(async (req, res) => {
    const user = await UserModel.findById(req.userID)

    if (!user) {
        res.status(500).send('Internal Error')
        return
    }

    res.json({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email
    })
})

const edit = asyncHandler(async (req, res) => {

    const { email, password, firstName, lastName } = req.body

    if (!(email && password && firstName && lastName)) {
        res.status(400).send('Bad Request')
        return
    }

    const id = req.userID
    const user = await UserModel.findById(id)

    if (!user) {
        res.status(500).send('Internal Error')
        return
    }

    try {
        user.firstName = firstName
        user.lastName = lastName
        user.email = email
        user.password = password
        await user.save()
        res.send('User Updated')
    } catch (error) {
        const message = error.message ? error.message : error
        res.status(500).send(message)
    }
})

const logout = asyncHandler(async (req, res) => {
    const { token } = req.body

    if (!token) {
        res.status(400).send('Bad Request')
        return
    }

    try {
        await revokeToken(token)
        res.send('Successfully Logged Out')
    } catch (error) {
        const message = error.message ? error.message : error
        res.status(500).send(message)
    }
})

module.exports = {
    login,
    register,
    profile,
    edit,
    logout
}