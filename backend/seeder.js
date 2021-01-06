const dotenv = require('dotenv')
const connectDB = require('./config/db')
//Models
const UserModel = require('./models/userModel')
//Data
const UserData = require('./data/userData')

dotenv.config()
connectDB()

const importData = async () => {
    await destroyData()

    await UserModel.insertMany(UserData)

    console.log('Data Imported')
    process.exit()
}

const destroyData = async () => {
    try {
        await UserModel.deleteMany()

        console.log('Data Destroyed')
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}

if (process.argv[2] === '-d') {
    destroyData()
} else {
    importData()
}