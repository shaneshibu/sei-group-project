const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const placeVisitedSchema = new.mongoose.Schema({
  image: { type: String, required: true },
  description: { type: String, required: true, maxlength: 500 },
  ratings: { type: Number, required: true, min: 0, max: 10},
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  locationID: { type: Sting, required: true }
})

const tripSchema = new.mongoose.Schema({
  tripTitle: { type: String, required: true },
  placesVisited: { type: [placeVisitedSchema] },
  days: { type: Number, required: true, min: 1, max: 99 },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
})

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // passwordConfirmation: { type: String, required: true }
  locationHome: { type: String, required: true },
  trips: { [tripSchema] }
})

module.exports = mongoose.model('User', userSchema)
