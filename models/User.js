const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

// This is the schema that represents a user who has come along and registered.
// This is data created by us/our users and stored and retrieved from our API (as opposed to data from triposo).


const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // trips: { [tripSchema] },
  locationHome: { type: String, required: true }
  // passwordConfirmation: { type: String, required: true }
})

//check unique -theres a plugin for that!

// userSchema - make password conf virtual

// pre-validation of password - is it filled in/the same

// hash passsword before saving

// compare/synch hashed

module.exports = mongoose.model('User', userSchema)
