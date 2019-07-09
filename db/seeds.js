const mongoose = require('mongoose')
const User = require('../models/user')
const Trip = require('../models/trip')
const Place = require('../models/place')
const { dbURI } = require('../config/env')

mongoose.connect(dbURI, { useNewUrlParser: true, useCreateIndex: true }, (err, db) => {
  if (err) return console.log(err)
  db.dropDatabase()
    .then(() => {
      return User.create([
        {
          username: 'dani',
          email: 'dani@email',
          password: 'pass',
          passwordConfirmation: 'pass',
          locationHome: 'string'
        },
        {
          username: 'seba',
          email: 'seba@email',
          password: 'pass',
          passwordConfirmation: 'pass',
          locationHome: 'someplace'
        },
        {
          username: 'shane',
          email: 'shane@email',
          password: 'pass',
          passwordConfirmation: 'pass',
          locationHome: 'london'
        },
        {
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
      return Promise.all([users, Place.create([
        {
          triposoId: 'W__3517898',
          comments: [
            {
              text: 'Comment 1',
              user: users[1]._id
            },
            {
              text: 'Comment 1',
              user: users[2]._id
            },
            {
              text: 'Comment 1',
              user: users[3]._id
            }
          ]
        },
        {
          triposoId: 'W__87493075',
          comments: [
            {
              text: 'Comment 1',
              user: users[1]._id
            },
            {
              text: 'Comment 1',
              user: users[2]._id
            },
            {
              text: 'Comment 1',
              user: users[3]._id
            }
          ]
        },
        {
          triposoId: 'N__1632472487',
          comments: [
            {
              text: 'Comment 1',
              user: users[1]._id
            },
            {
              text: 'Comment 1',
              user: users[2]._id
            },
            {
              text: 'Comment 1',
              user: users[3]._id
            }
          ]
        },
        {
          triposoId: 'T__34e2331607b3',
          comments: [
            {
              text: 'Comment 1',
              user: users[0]._id
            },
            {
              text: 'Comment 1',
              user: users[2]._id
            },
            {
              text: 'Comment 1',
              user: users[3]._id
            }
          ]
        },
        {
          triposoId: 'N__829526180',
          comments: [
            {
              text: 'Comment 1',
              user: users[0]._id
            },
            {
              text: 'Comment 1',
              user: users[2]._id
            },
            {
              text: 'Comment 1',
              user: users[3]._id
            }
          ]
        },
        {
          triposoId: 'N__251699775',
          comments: [
            {
              text: 'Comment 1',
              user: users[0]._id
            },
            {
              text: 'Comment 1',
              user: users[2]._id
            },
            {
              text: 'Comment 1',
              user: users[3]._id
            }
          ]
        },
        {
          triposoId: 'FriedrichstraC39Fe',
          comments: [
            {
              text: 'Comment 1',
              user: users[0]._id
            },
            {
              text: 'Comment 1',
              user: users[1]._id
            },
            {
              text: 'Comment 1',
              user: users[3]._id
            }
          ]
        },
        {
          triposoId: 'N__1017975892',
          comments: [
            {
              text: 'Comment 1',
              user: users[0]._id
            },
            {
              text: 'Comment 1',
              user: users[1]._id
            },
            {
              text: 'Comment 1',
              user: users[3]._id
            }
          ]
        },
        {
          triposoId: 'TauentzienstraC39Fe',
          comments: [
            {
              text: 'Comment 1',
              user: users[0]._id
            },
            {
              text: 'Comment 1',
              user: users[1]._id
            },
            {
              text: 'Comment 1',
              user: users[3]._id
            }
          ]
        },
        {
          triposoId: 'T__5a669cd14ac4',
          comments: [
            {
              text: 'Comment 1',
              user: users[0]._id
            },
            {
              text: 'Comment 1',
              user: users[1]._id
            },
            {
              text: 'Comment 1',
              user: users[2]._id
            }
          ]
        },
        {
          triposoId: 'N__1420783223',
          comments: [
            {
              text: 'Comment 1',
              user: users[0]._id
            },
            {
              text: 'Comment 1',
              user: users[1]._id
            },
            {
              text: 'Comment 1',
              user: users[2]._id
            }
          ]
        },
        {
          triposoId: 'W__76187056',
          comments: [
            {
              text: 'Comment 1',
              user: users[0]._id
            },
            {
              text: 'Comment 1',
              user: users[1]._id
            },
            {
              text: 'Comment 1',
              user: users[2]._id
            }
          ]
        }
      ])
      ])
    })
    .then((values) => {
      const [ users, places ] = values
      console.log(`${places.length} places seeded`)
      return Trip.create([
        {
          title: 'Brussels trip',
          places: [ places[0], places[1], places[2] ],
          user_id: users[0]._id
        },
        {
          title: 'Paris trip',
          places: [ places[3], places[4], places[5] ],
          user_id: users[1]._id
        },
        {
          title: 'Berlin trip',
          places: [ places[6], places[7], places[8] ],
          user_id: users[2]._id
        },
        {
          title: 'Tokyo trip',
          places: [ places[9], places[10], places[11] ],
          user_id: users[3]._id
        }
      ])
    })
    .then(trips => console.log(`${trips.length} trips seeded`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close())
})
