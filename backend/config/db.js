const mongoose = require('mongoose')

const dbConnect = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGODB_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        })
        console.log('Connected :' + conn.connection.host)
    }catch(error){
        console.log(`Error: ${error.message}`)
    }
}

module.exports = dbConnect