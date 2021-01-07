const asyncHandler = require('express-async-handler')
const { refresh } = require('../util/tokenManager')

const refreshToken = asyncHandler(async (req, res) => {
    const { token } = req.body

    if (!token) {
        res.status(403).json("Forbidden, No Token")
    } else {
        try {
            const newTokens = await refresh(token)
            res.json(newTokens)
        } catch (error) {
            const message = (error && error.message)? error.message: error
            res.status(403).send(message)
        }
    }
})

module.exports = {
    refreshToken
}