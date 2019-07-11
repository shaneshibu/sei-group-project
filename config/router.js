const router = require('express').Router()
const users = require('../controllers/auth')
const trips = require('../controllers/trips')
const places = require('../controllers/places')

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
  .get(trips.getUserTrips)
  .post(trips.create)
  .patch(trips.delete)

router.route('/trips/:tripId')
  .get(trips.show)
  .put(trips.edit)
  .delete(trips.delete)
  .post(trips.addPlace)
  .patch(trips.removePlace)

router.route('/trips')
  .get(trips.index)

router.route('/places')
  .get(places.index)

router.route('/places/:placeId')
  .get(places.show)

router.route('/*')
  .all((req, res) => res.status(404)
    .json( { message: 'not found at Wanderlust' } ))

module.exports = router
