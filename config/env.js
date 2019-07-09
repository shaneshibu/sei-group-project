const port = process.env.PORT || 3999

const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/wanderlust'

const secret = process.env.SECRET || 'special sauce to my salt'

const token = process.env.TRIPOSO_TOKEN

const account = process.env.TRIPOSO_ACCOUNT

module.exports = { port, dbURI, secret, token, account }
