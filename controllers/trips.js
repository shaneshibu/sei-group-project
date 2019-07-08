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

function addPlace(req, res, next) {
  console.log('add place')
  console.log(req.params)
  Trip
    .findById(req.params.tripId)
    .then(trip => {
      if (!trip) throw new Error('Not Found')
      if (!req.body.placeId.length) throw new Error('ValidationError')
      trip.places.push(req.body.placeId)
      trip.save()
      res.status(201).json(trip)
    })
    .catch(next)
}

function removePlace(req, res, next) {
  console.log('remove place')
  console.log(req.params)
  Trip
    .findById(req.params.tripId)
    .then(trip => {
      if (!trip) throw new Error('Not Found')
      if (!req.body.placeId.length) throw new Error('ValidationError')
      trip.places = trip.places.filter(place => place !== req.body.placeId)
      trip.save()
      res.status(202).json(trip)
    })
    .catch(next)
}

module.exports = {
  create: createTrips,
  addPlace, removePlace
}
