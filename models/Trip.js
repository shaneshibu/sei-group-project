const mongoose = require('mongoose')

// This is the schema that represents a trip the user has made.
// There can be 0 or many on a users profile.
// This is data created by us/our users and stored and retrieved from our API (as opposed to data from triposo)
// This has 1 or many placesVisited

const tripSchema = new mongoose.Schema({
  title: { type: String, required: true },
  places: [ { type: mongoose.Schema.ObjectId, ref: 'Place' } ],
  user_id: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
})

module.exports = mongoose.model('Trip', tripSchema)
