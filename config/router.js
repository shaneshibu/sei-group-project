const router = require('express').Router()
const users = require('../controllers/auth')

// resgister route
router.route('/wanderlust/register')
  .post(users.register)

// login root
router.route('/wanderlust/login')
  .post(users.login)

router.route('/*')
  .all((req, res) => res.status(404)
    .json( { message: 'not found at Wanderlust' } ))

module.exports = router
