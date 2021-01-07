const TokenModel = require('../models/TokenModel')
const UserModel = require('../models/userModel')
const jwt = require('jsonwebtoken')

const generateToken = (payload) => {
    return jwt.sign({ _id: payload }, process.env.JWT_SECRET, { expiresIn: '1h' })
}

const generateRefreshToken = async (payload) => {
    const existTokens = await TokenModel.find({ userID: payload }, { expiresIn: '10d' })

    if (existTokens.length > 5) {
        //revoke them
    }
    const token = jwt.sign({ _id: payload }, process.env.JWT_SECRET)

    await TokenModel.create({
        userID: payload,
        token: token
    })
    return token
}

const refresh = async (refreshToken) => {
    const decodedToken = jwt.verify(refreshToken, process.env.JWT_SECRET)

    const user = await UserModel.findById(decodedToken._id)
    if (!user) {
        throw new Error('Access is Forbidden')
    }

    const tokens = await TokenModel.find({ userID: decodedToken._id })
    if (!tokens || tokens.length <= 0) {
        throw new Error('No Refresh Tokens for the User')
    }

    const currToken = await TokenModel.findOne({ token: refreshToken })

    if (!currToken) {
        throw new Error('Invalid Token')
    }

    const newRefreshToken = await generateUpdatedRefreshToken(refreshToken, decodedToken._id)

    if (newRefreshToken === refreshToken) {
        throw new Error('Internal Server Error')
    }

    return {
        token: generateToken(decodedToken.userID),
        refreshToken: newRefreshToken
    }
}

const generateUpdatedRefreshToken = async (oldToken, payload) => {
    const newRefreshToken = jwt.sign({ _id: payload }, process.env.JWT_SECRET, { expiresIn: '10d' })

    const token = await TokenModel.findOne({ token: oldToken })
    token.token = newRefreshToken
    await token.save()

    return token.token
}

const revokeToken = async (token) => {
    const existToken = await TokenModel.findOne({ token })

    if (!existToken) {
        throw Error('Invalid Token')
    }

    await TokenModel.deleteOne({ token: token })
}

module.exports = {
    generateToken,
    generateRefreshToken,
    refresh,
    revokeToken
}