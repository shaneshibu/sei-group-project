const router = require('express').Router()
const users = require('../controllers/auth')
const trips = require('../controllers/trips')

// resgister route
router.route('/register')
  .post(users.register)

// login root
router.route('/login')
  .post(users.login)

// list of all users
router.route('/users')
  .get(users.index)

// single user
router.route('/users/:id')
  .get(users.show)
//edit user
  .put(users.edit)
  .delete(users.delete)

router.route('/users/:id/trips')
  .post(trips.create)

router.route('/users/:id/trips/:tripId')
  .patch(trips.edit)
  .post(trips.addPlace)
  .delete(trips.removePlace)
  .get(trips.showTrip)

router.route('/*')
  .all((req, res) => res.status(404)
    .json( { message: 'not found at Wanderlust' } ))

module.exports = router
