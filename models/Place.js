const mongoose = require('mongoose')

// This is the schema that represents a poi the user has visited.
// There can be 1 or many on a single trip.
// This is data created by us/our users and stored and retrieved from our API (as opposed to data from triposo)

const commentSchema =  new mongoose.Schema({
  text: { type: String, required: true },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
} ,{
  timestamps: true
})

const ratingSchema = new mongoose.Schema({
  type: { type: Number, min: 0, max: 5 },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
})

const placeSchema = new mongoose.Schema({
  triposoId: { type: String, required: true },
  images: [ { type: String } ],
  comments: [ commentSchema ],
  ratings: [ ratingSchema ]
})

module.exports = mongoose.model('Place', placeSchema)
