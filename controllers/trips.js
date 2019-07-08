const Trip = require('../models/trip')

function createTrips(req, res, next) {
  console.log('create trip')
  console.log(req.params)
  const body = {
    title: req.body.title,
    user_id: req.params.id
  }
  Trip
    .create(body)
    .then(trip => res.status(201).json(trip))
    .catch(next)
}

module.exports = {
  create: createTrips
}
