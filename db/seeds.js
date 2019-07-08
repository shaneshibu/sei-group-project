const mongoose = require('mongoose')
const user = require('../models/user')
const { dbURI } = require('../config/env')

mongoose.connect(dbURI, { useNewUrlParser: true, useCreateIndex: true }, (err, db) => {
  if (err) return console.log(err)
  db.dropDatabase()
    .then(() => {
      return user.create([
        {
          username: 'dani',
          email: 'dani@email',
          password: 'pass',
          passwordConfirmation: 'pass',
          locationHome: 'string'
        }, {
          username: 'seba',
          email: 'seba@email',
          password: 'pass',
          passwordConfirmation: 'pass',
          locationHome: 'someplace'
        }
      ])
    })
    .then(users => console.log(`${users.length} users seeded`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close())
})
