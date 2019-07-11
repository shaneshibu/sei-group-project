const mongoose = require('mongoose')
const axios = require('axios')
const User = require('../models/user')
const Trip = require('../models/trip')
const Place = require('../models/place')
const { dbURI } = require('../config/env')

mongoose.connect(dbURI, { useNewUrlParser: true, useCreateIndex: true }, (err, db) => {
  if (err) return console.log(err)
  db.dropDatabase()
    .then(() => {



    })
    .then(() => {
      return axios.get('https://randomuser.me/api/?results=50&inc=name,email,login,nat,location,picture&noinfo')
    })
    .then(res => {
      const newUsers =  res.data.results.map(user => {
        const newUser = {
          username: user.login.username,
          name: `${user.name.first} ${user.name.last}`,
          email: user.email,
          password: 'pass',
          passwordConfirmation: 'pass',
          locationHome: `${user.location.city}, ${user.location.state}`,
          image: user.picture.large
        }
        return newUser
      })
      //console.log(newUsers)
      const users2 = [
        {
          username: 'dani',
          name: 'Daniela',
          email: 'dani@email',
          password: 'pass',
          passwordConfirmation: 'pass',
          locationHome: 'London',
          image: 'https://www.fillmurray.com/g/256/256'
        },
        {
          username: 'seba',
          name: 'Sebastian',
          email: 'seba@email',
          password: 'pass',
          passwordConfirmation: 'pass',
          locationHome: 'Paris',
          image: 'https://www.fillmurray.com/128/128'
        },
        {
          username: 'shane',
          name: 'Shane',
          email: 'shane@email',
          password: 'pass',
          passwordConfirmation: 'pass',
          locationHome: 'Berlin',
          image: 'https://www.stevensegallery.com/g/256/256'
        },
        {
          username: 'cliff',
          name: 'Cliff',
          email: 'cliff@email',
          password: 'pass',
          passwordConfirmation: 'pass',
          locationHome: 'Tokyo',
          image: 'https://www.placecage.com/gif/256/256'
        }
      ]
      console.log(users2.concat(newUsers))
      return User.create(newUsers.concat(users2))
    })
    .then(users => {
      console.log(users)
      console.log(`${users.length} users seeded`)
      return Promise.all([users, Place.create([
        {
          triposoId: 'W__3517898',
          name: 'Grand Place',
          thumbnail: 'http://api-images-www.triposo.com/20181213/gAAAAABdJieIBybZ_CCqxY2OelhZAI9jO7OH8r1XvC-_EfLGQG7uUt8kApzdBzUDMk0PHPJRRlyPtAB0SaB1HP3BB_M08nrQHd9vO4Ba28VFhboTq7B07s60yhbwY7Fi0RY13AUxrCs1uCK3XkYg7GUJSFj7_QA5BW-RRbCsB3jbB5OcA2xJiW9rcU8GEzofU9Z18NankkbO4kHYfM38fWyPzeeu3n4WJYHYp2lQtB1iXGgH-cFecwWjkvmKDBb9HirRxe6HUSVOpONp6v2LteC7To3T7DMdGg==',
          snippet: 'Surrounded by the city tower and a range of beautiful 300-year-old buildings. In the evening, lit by bright illumination, it is simply ravishing.',
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
          name: 'Belgian Comic Strip Center',
          thumbnail: 'http://api-images-www.triposo.com/20181213/gAAAAABdJihJtl5Li_wQwsHDCZReiw6AMNq8Bbt4i9bhYEMV9uXIOgcJje2ImTfMzqufq8EQ5kEz3bcWbMzS6WK-JMXkxpZ0P_FvhnOpPMe8gfyZ-vVsxx8f_5PUjaTAATWDk1cVpvSq1P315BjM_xizWgEhIrp6-ytymuTr7Fy3fFOrKqJ-IBO-Bc4jzt-pzjijMNlDC2lB2nZxUOORiDpyBtzafDvAoOYL-lrx4vAIRqIfDIasmv8g84vcaSZ6kFoklWhm3MB_NVwZjE86gwgR_yqoUttG2w==',
          snippet: 'Located in Europe\'s earliest shopping mall (a shiny Jugendstil/Art Nouveau palace).',
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
          name: 'Mini-Europe',
          thumbnail: 'http://api-images-www.triposo.com/20181213/gAAAAABdJih3rpSpUbVHk_B7LFeIV9AP1KSr1HFP2Ucg3Nk7p_FqwF4V_NiIaqWa_QFNljw_krClr8faBrXqyIsqkopQ4W95ePVhJat9qJvUPYn4y99IIrTXmdy-C3MAIU6bbxI-o6ucpNZ8XOtHYnsAqiH1SjegZDYgfsOXAJpt7IHxsbEXEHSrry7YQkNboMVVkDnRFXrsFeiltjZBWzyT-r0TPhFLliDE4UEWPBg4ZPQuBiRDQaAaphAkaLfmv8fVT2qxiZsi6VNze91R-vSQhIiZKmhKag==',
          snippet: 'A miniature park at the foot of the Atomium, Mini-Europe has reproductions of monuments of the European Union on show, at a scale of 1:25.',
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
          name: 'Louvre',
          thumbnail: 'http://api-images-www.triposo.com/20181213/gAAAAABdJiibjjFl40voCoOkKqJT4-YTCccuGTnI8JtXF7ELR04ZqlsCo9LLGDnfeNa91KzDAV7A-HqCmmuRlkJRueX6nOJsQnk0z32BfXyA3vshqHvDSPaelEWwDebffrGDIBesBbLMyD6z_3Ts-nM_AhVkycZLUCtfJQwRwmRDSiWW5phiNKj1ovJ1SwvZt-k1MyGdIg56rcwMk25wsRxULs4aXJXipc5mfcm-af-SgqEwY4V4s6cce_Ugn3TF1mtzaB1fuE2Usf13jcg_Gsaaman7nq9jSA==',
          snippet: 'Only at the start of the twentieth century did its role as an art treasury begin.The Louvre\'s collections include western art from the medieval period to 1848 and are organised into different departments. paintings, Egyptian antiquities, Greek/Roman/Etruscan antiquities, Near Eastern antiquities, sculpture, decorative arts, Islamic arts, prints & drawings, and the Pavillon de l’Horloge (once the royal palace).The departments are color coded to help you navigate what is a vast and potentially confusing space.',
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
          name: 'Champs-Élysées',
          thumbnail: 'http://api-images-www.triposo.com/20181213/gAAAAABdJijHE5-Y2bP9UIA59uy7fJXfhRN1_kR1C85PfWT32AQU4tF57mXMgPgqtKTvmGBJq0XD39SqT16BqahBZtlC2_zHIWXH6CfzwXkN9wEYUbIiVJe-nn2No1iHARsL_Ryz5lLPojdTToWARS5CMe4aDHXkxEMK4kgYsgNbFS-l-CJhdABAPqY0yMWSxqjBBrD8j9gtg-tJ8SAjiknG-2F67mMDZ-9rLYyif7aSOyGqXlCWD8Cq3K1e34VjrtLJ620kbE0d3xWyIpA7N0X4XRN01rFgHg==',
          snippet: 'Levi\'s, Zara, Zara, Arcade des Champs-Élysées, Tiffany & Co., Guerlain, MAJE, Mauboussin, Nike.',
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
          name: 'Les Deux Magots',
          thumbnail: 'http://api-images-www.triposo.com/20181213/gAAAAABdJijyv2i1V2Z1zSXBNyIlkwwySgvhN3HFrfaBUuR2CRvYvncKPKaoKtImRZ_VQ2p1VkPFivflF0Bls_6wBvKnmST2FFlsP4SvFnO9ua8VUUO0IK1GX_nGtgJbB-fg-NfLkfzWdPzZTBuD94F95TaM54bF12zhd3BhGzN44sZNWnv5TnZt9p_hdeOqVy5EknL3K7ZYithPakCjpLxvC56dQSi22pqQQGEDMAs9iAsf6aDZomdBDpwTTDJJCONihgnS35R9NRoYLRrY-9hBWmPQs76lXA==',
          snippet: 'Another famous literary café, right next door to its great rival Café de Flore.',
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
          name: 'Friedrichstraße',
          thumbnail: 'http://api-images-www.triposo.com/20181213/gAAAAABdJikXymgO0zut4s-Cn70ITmoMC3EjiowAPTDi2oNkOFC92-QcVGoZr8tzorB_UXxd_xjskFJDx5DriJjPQy5IUDsXHPbtgXHRh_rQ24NfaEeaQoNN-GG7NR57J-kUL24FiKfujJED3yd4Rs6kpoUdkVpT_8savb3jF6TDNNwT1fVYGnORVtMFISRvbALwJD6YZwUc-t3d1OSRSN_Qm8Tywlyf4nxdnTZfwNVvfco-WsUg07MqjAFqAuDI3dUWBRlLUe6jT6bV1unhv2I-zrgYGMlOzQ==',
          snippet: 'H&M, Lacoste, Hugo Boss, Zara, Kulturkaufhaus Dussmann, Wempe, Pandora, Massimo Duti, Navyboot Outlet, Napapijri Store, Pretty Ballerinas, Maurice Lacroix, & Other Stories, Morellato.',
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
          name: 'Pergamon Museum',
          thumbnail: 'http://api-images-www.triposo.com/20181213/gAAAAABdJik7HC6PW9v0ZmSZxPh1CM3kHxUDcTsrqYhIuqB8UzRuoVGAHDK12mz2iebdZ7l87bXQ30Idu2nY273RysWXDGofvCcdX1rAez5adbr3buZiTCCIrn861G-jG5CzVM4nP16-bNMJSBjen09iri-TOxirl7oFKHTfRURwoBFYu4Fw4w5WBXRKjQwN4YmLm0TojlGKVQ8wsB6m7DhzgB7MdJtkuMdJbm1jt5OtIWDB2DfepZVZ0agCrCIrui25GOURqI7js-rlxs241tsdG5peaza0ug==',
          snippet: 'There are three huge collections housed within this grand building: the Collection of Classical Antiquities, the Museum of Near Eastern Antiquities and the Museum of Islamic Art.',
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
          name: 'Tauentzienstraße',
          thumbnail: 'http://api-images-www.triposo.com/20181213/gAAAAABdJileDdsn1f1dxYhP-PE3yC5zFMKoHS8kGQMFhUrpkmsPFc88rBetdTpuR_UxMKVznnG9ajJMntyD_ucPCRgymQuXz7eqkzxJhJwOVRxWfsFEOlz20PSssLmjiPX-Tfi_bUUGlNEXSPuS7Xb7UNv7h3W24N7Y2mxuun7Km7Ki2gksO8BNt18QBUXu_rqThLrLngfQtcdxdmSVZqkBYakinDFAZZ_iqM2kbclzNATCwMeD_XqGCJwKHyBhjvEwvslyK64dTUp0QgRYITq1yD9pHjPHQg==',
          snippet: 'Uniqlo, Peek & Cloppenburg, Zara, Kaufhaus des Westens, LEGO Store Berlin, Leiser, Shoe City, Deichmann, Foot Locker.',
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
          name: 'Omotesandō',
          thumbnail: 'http://api-images-www.triposo.com/20181213/gAAAAABdJil6lS9UiGYFtu1qzsV2RIaomRqxQVaWNfhazF012yNbEP5JD7zf4qKMoggBuDee-3mP7l6A9jzvfb9cXN5YuL3BeaRm69fU1ey-KpJBxZr4Do1T-wuupqhItouSLLYJp1RBPsI5hGeFkUf_vXvCThBDNlJpqGUuCytc_-XFgt1-IHX0-QOA-zJ5Cdi0SLtWuAx3CY-Iy64XbobM3uccEQp65NQBUcPLC1-9cm3GCrcx-fjbQLvTqWlKjxV6gJYax3nNvZ-jMOZqRi4USbHtLJgklA==',
          snippet: 'Omotesandō is a zelkova tree-lined avenue located in Shibuya and Minato, Tokyo, stretching from the Meiji Shrine entrance to Aoyama-dori where Omotesandō Station can be found.',
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
          name: 'Tokyo National Museum',
          thumbnail: 'http://api-images-www.triposo.com/20181213/gAAAAABdJimaHhqDF_HblgQv5DepZxdTIWnpdCDwuKs5A6gmOOfXOdeucTeCCX2uVgOngLtO-e290EJyyLd2YIbuDC37d7heUb4YEAKDbp2XbuWqYy33EZdkt9t-1r6mH_dGpvouEPvmMynxME7JNhEptOKGLlnEUErOt4jHy8WXXyAIlLV57HZS0405n_SjFiZmuSpaUHNbQ_i7xjSeuRbB6xuFa56tJIT7PoqANjOTOVdQDQ6pZ5WN_avUg2RMKTo29hz-xtKPUoDeUMs3rugXvI7yMj_RzQ==',
          snippet: 'JR lines to Ueno, Ueno-kōen exit.',
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
          name: 'Edo-Tokyo Museum',
          thumbnail: 'http://api-images-www.triposo.com/20181213/gAAAAABdJim9jzGQRg5W5h2nUn7WRv2WEpM6pl_xJRa1_teuJTKImnKcM3r1_s_rQmFk65_iufnOS2LEW_JbcTtA1umotAksPZrMew-1YUlPUmcijcSwpMnVFvnNmQ4EaQop438yhhYIkzJH6QRe_r_OQzbPBlPuhR9enUAN1LVivQ-aGPb_0Yyy4d-sgSZ4YAQ4JEXDv4dY-fFaovhezRcf4YDoTJFUSG2vcBp3yxKI-kdMFSHjljW1Z6kHRV5HRAZ62tD2R3CDuYQAYc0wASxoWg0Kd62OUw==',
          snippet: 'One of the best museums in Tokyo, and that\'s saying something, this bizarre multi-story edifice suspended in midair and bearing not a small resemblance to a Star Wars Imperial Walker (meant to be a replica of an old raised warehouse) covers the history of the metropolis, starting from 1590 when it was selected as Japan\'s new capital Edo, all the way through the Kanto earthquake and firebombings of World War II.',
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
