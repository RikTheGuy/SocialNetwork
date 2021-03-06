const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const dbConnect = require('./config/db')

dotenv.config()
const server = express()
dbConnect()

const userRoutes = require('./routes/userRoutes')
const questionRoutes = require('./routes/questionRoutes')
const miscRoutes = require('./routes/miscRoutes')

server.use(bodyParser.urlencoded({ extended: false }))
server.use(bodyParser.json())

server.use('/api/users', userRoutes)
server.use('/api/questions', questionRoutes)
server.use('/api', miscRoutes)

server.get('/', (req, res) => {
    res.status(404).json('Path Not Found')
})

server.listen(process.env.PORT || 80)