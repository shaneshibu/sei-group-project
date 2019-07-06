const User = require('../models/user')
const jwt = require('jsonwebtoken')
const { secret } = require('../config/environment')

// Registration
function register(req, res, next) {
  User
    .create(req.body)
    .then(user => res.status(201).json({
      message: `Great, that's done...now your journey begins ${user.username}`
    }))
    .catch(next)
}

module.exports = {
  register
}
