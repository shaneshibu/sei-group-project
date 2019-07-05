const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const tripSchema = new.mongoose.Schema({
  tripTitle: { type: String, required: true },
  placesVisited: { type: [placeVisitedSchema] },
  days: { type: Number, required: true, min: 1, max: 99 },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
})

module.exports = mongoose.model('Trip', tripSchema)
