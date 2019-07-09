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
          title: 'Brussels trip',
          places: [ 'W__3517898', 'W__87493075', 'N__1632472487'],
          user_id: users[0]._id
        },
        {
          title: 'Paris trip',
          places: [ 'T__34e2331607b3', 'N__829526180', 'N__251699775'],
          user_id: users[1]._id
        },
        {
          title: 'Berlin trip',
          places: [ 'FriedrichstraC39Fe', 'N__1017975892', 'TauentzienstraC39Fe'],
          user_id: users[2]._id
        },
        {
          title: 'Tokyo trip',
          places: [ 'T__5a669cd14ac4', 'N__1420783223', 'W__76187056'],
          user_id: users[3]._id
        }
      ])
    })
    .then(trips => console.log(`${trips.length} trips seeded`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close())
})
