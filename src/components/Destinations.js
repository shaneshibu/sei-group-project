import React, { Component } from 'react'
import axios from 'axios'

// const { token, account } = require('./config/env')

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
    // const triposoAPI = 'https://www.triposo.com/api/20181213/'
    // const path = 'location' - could be empty
    // const format '.json'
    // const querySign = '?'
    // const queryParams = 'location_id=London&annotate=trigram:here&trigram=>=0.3&count=10&fields=id,name,score,snippet,location_id,tag_labels&order_by=-score'
    // const account = `&account=${account}`
    // const token = `&token=${token}`
    axios.get('https://www.triposo.com/api/20181213/poi.json?location_id=London&annotate=trigram:here&trigram=>=0.3&count=10&fields=id,name,score,snippet,location_id,tag_labels&order_by=-score&account=ZU9GVO0H&token=gecvyh2juuwkrp5uif4yicwczfaq4ytd')
      .then( res => {
        console.log(res)
          .catch(err => console.log(err))
      })
  }

  render() {
    return (
      <h1>Boo!</h1>
    )
  }
}

export default Destinations
