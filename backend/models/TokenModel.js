const mongoose = require('mongoose')

const TokenModel = mongoose.Schema({
    userID: {
        type: String,
        required: true
    },
    token: {
        type: String,
        required: true
    },
    // fingerprint: {
    //     type: String,
    //     required: true
    // }
})

const Token = mongoose.model('Token', TokenModel)

module.exports = Token