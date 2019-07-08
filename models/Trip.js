const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

// This is the schema that represents a trip the user has made.
// There can be 0 or many on a users profile.
// This is data created by us/our users and stored and retrieved from our API (as opposed to data from triposo)
// This has 1 or many placesVisited

// const tripSchema = new.mongoose.Schema({
//   tripTitle: {
//     type: String,
//     required: true
//   },
//   placesVisited: {
//     type: [placeVisitedSchema],
//     required: true },
//     days: {
//       type: Number,
//       required: true,
//       min: 1,
//       max: 99
//     },
//   user: {
//     type:
//     mongoose.Schema.ObjectId,
//     ref: 'User',
//     required: true
//   }
// })

const tripSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  places: [ { type: String } ],
  user_id: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
})

module.exports = mongoose.model('Trip', tripSchema)
