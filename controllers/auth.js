const User = require('../models/user')
const jwt = require('jsonwebtoken')
const { secret } = require('../config/environment')

// Registration
function register(req, res, next) {
  User
    .create(req.body)
    .then(user => res.status(201).json({
      message: `Welcome aboard ${user.username}...now your journey begins.`
    }))
    .catch(next)
}

// Login
function login(req, res, next) {
  User
    .findOne({ email: req.body.email })
    .then(user => {
      if (!user || !user.validatePassword(req.body.password)) {
        throw new Error('Unauthorized')
      }
      const token = jwt.sign({ sub: user._id }, secret, { expiresIn: '192h' })
      res.status(200).json({
        message: `Hey ${user.usernname}, welcome back.`,
        token
      })
    })
    .catch(next)
}

module.exports = {
  register,
  login
}
