const jwt = require('jsonwebtoken')

const generateToken = (payload) => {
    return jwt.sign({ _id: payload }, process.env.JWT_SECRET, { expiresIn: '1h' })
}

const generateRefreshToken = async (payload) => {

}

const refresh = (refreshToken) => {

}

module.exports = {
    generateToken,
    generateRefreshToken,
    refresh
}