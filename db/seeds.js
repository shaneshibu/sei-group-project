const mongoose = require('mongoose')
const user = require('../models/user')
const trip = require('../models/trip')
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
        }, {
          username: 'shane',
          email: 'shane@email',
          password: 'pass',
          passwordConfirmation: 'pass',
          locationHome: 'london'
        }, {
          username: 'cliff',
          email: 'cliff@email',
          password: 'pass',
          passwordConfirmation: 'pass',
          locationHome: 'someplace 2'
        }
      ])
    })
    .then(users => {
      console.log(`${users.length} users seeded`)
      return trip.create([
        {
          title: 'brussels trip',
          places: [ 'place 1', 'place 2', 'place 3'],
          user_id: users[0]._id
        },
        {
          title: 'paris trip',
          places: [ 'place 4', 'place 5', 'place 6'],
          user_id: users[1]._id
        },
        {
          title: 'berlin trip',
          places: [ 'place 7', 'place 8', 'place 9'],
          user_id: users[2]._id
        }
      ])
    })
    .then(trips => console.log(`${trips.length} trips seeded`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close())
})
