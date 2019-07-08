const router = require('express').Router()
const users = require('../controllers/auth')

// resgister route
router.route('/register')
  .post(users.register)

// login root
router.route('/login')
  .post(users.login)

router.route('/*')
  .all((req, res) => res.status(404)
    .json( { message: 'not found at Wanderlust' } ))

module.exports = router
