import React, { Component } from 'react'
import axios from 'axios'

const { token, account } = require('/Users/daniela/Development/projects/sei-group-project/config/env.js')

class Destinations extends Component {
  constructor() {
    super()

    this.state = {
      destinations: null
    }
  }

  componentDidMount() {
    this.getDestinations()
  }

  getDestinations() {
    axios.get(`https://www.triposo.com/api/20181213/poi.json?location_id=London&annotate=trigram:general&trigram=>=0.3&count=10&fields=id,name,score,snippet,location_id,tag_labels&order_by=-score&account=${account}&token=${token}`)
      .then( res => {
        console.log(res.data.results)
        console.log(typeof data)
          .catch(err => console.log(err))
      })
  }

  render() {
    const { destinations } = this.state
    if (!destinations) return null
    return (
      <div>
        <ul>
          {
            destinations.map(destination => (
              <li
                key={`${destination.location_id}`}>
                {destination.name}
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}
export default Destinations
