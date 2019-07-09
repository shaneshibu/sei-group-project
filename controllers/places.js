const Place = require('../models/place')

function indexPlaces(req, res, next) {
  console.log('index places')
  Place
    .find()
    .then(places => {
      if (!places) res.sendStatus(204)
      res.status(200).json(places)
    })
    .catch(next)
}

function showPlace(req, res, next) {
  console.log('show place')
  Place
    .findById(req.params.placeId)
    .then(place => {
      if (!place) throw new Error('Not Found')
      res.status(200).json(place)
    })
    .catch(next)
}

module.exports = {
  index: indexPlaces,
  show: showPlace
}
