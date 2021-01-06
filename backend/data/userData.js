const bcrypt = require('bcryptjs')

const users = [
    {
        firstName: 'Test',
        lastName: 'User',
        email: 'testuser@email.com',
        password: bcrypt.hashSync('12345', process.env.BCRYPT_SALT),
    },
    {
        firstName: 'Sample',
        lastName: 'User',
        email: 'sampleuser@email.com',
        password: bcrypt.hashSync('12345', process.env.BCRYPT_SALT)
    }
]

module.exports = users