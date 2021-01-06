const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')

const authorize = asyncHandler(async (req, res, next) => {
    let token

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1]
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            req.userID = decoded._id
            next()
        } catch (err) {
            res.status(401).send('Unauthorized, Bad Token')
        }
    } else {
        res.status(401).send("Unauthorized, no token")
    }
})

module.exports = authorize