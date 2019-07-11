const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

// This is the schema that represents a user who has come along and registered.
// This is data created by us/our users and stored and retrieved from our API (as opposed to data from triposo).


const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  locationHome: { type: String, required: true },
  image: { type: String }
})

// Unique option on its own is not a validator. Mongoose unique validator adds pre-save validation for unique fields ^^ in a Mongoose schema
userSchema.plugin(require('mongoose-unique-validator'))

// When returning a user from a GET request, don't return the password
userSchema.set('toJSON', {
  transform(doc, json) {
    delete json.password
    return json
  }
})

// userSchema - make password conf virtual
userSchema
  .virtual('passwordConfirmation')
  .set(function setPasswordConfirmation(passwordConfirmation){
    this._passwordConfirmation = passwordConfirmation
  })

// pre-validation of password - is it filled in/the same?
userSchema
  .pre('validate', function checkPassword(next) {
    if (this.isModified('password') && this._passwordConfirmation !== this.password) {
      this.invalidate('passwordConfirmation', 'does not match')
    }
    next()
  })
// If so move on.

// hash (modified) passsword before saving
userSchema
  .pre('save', function hashPassword(next) {
    if (this.isModified('password')) {
      this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8))
    }
    next()
  })
//

// compare/synch hashed
userSchema.methods.validatePassword = function validatePassword(password) {
  return bcrypt.compareSync(password, this.password)
}

module.exports = mongoose.model('User', userSchema)
