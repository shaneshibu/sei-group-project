const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

// This is the schema that represents a poi the user has visited.
// There can be 1 or many on a single trip.
// This is data created by us/our users and stored and retrieved from our API (as opposed to data from triposo)
//This aligns with the POIS from triposo (placeName/country is also the unique key to identify).

const placeVisitedOnTripSchema = new.mongoose.Schema({
  placeName: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true,
    maxlength: 500
  },
  ratings: {
    type: Number,
    required: true,
    min: 0, max: 10
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true },
})

module.exports = mongoose.model('PlaceVisitedOnTrip', placeVisitedOnTripSchema)
