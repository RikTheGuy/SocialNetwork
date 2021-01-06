const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const dbConnect = require('./config/db')

dotenv.config()
const server = express()
dbConnect()

server.use(bodyParser.urlencoded({ extended: false }))
server.use(bodyParser.json())

server.get('/', (req, res) => {
    res.status(404).json('File Not Found')
})

server.listen(process.env.PORT || 80)