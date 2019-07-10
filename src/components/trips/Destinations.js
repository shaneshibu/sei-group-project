import React, { Component } from 'react'
import axios from 'axios'


//axios request variables
const { token, account } = require('../../../config/env')
const triposoAPI = 'https://www.triposo.com/api/20181213/'
const location = 'London'
const format = '.json'

// TODO figure out what we need from the query ie location id and unique id
const paramsBlock = '&annotate=trigram:general&trigram=>=0.3&count=10&fields=id,name,score,snippet,location_id,tag_labels&order_by=-score'

class Destinations extends Component {
  constructor(props) {
    super(props)

    this.state = {
      destinations: null,
      selected: null
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    this.getDestinations()
  }

  getDestinations() {
    axios.get(`${triposoAPI}poi${format}?location_id=${location}${paramsBlock}&account=${account}&token=${token}`)
      .then( res => this.setState({ destinations: res.data.results }))
      .catch(err => console.log(err))
  }

  handleClick( e ) {
    // e.persist() - what does this do??
    console.log( 'selected: ', e )
    this.setState( { selected: e })
  }

  render() {
    const { destinations } = this.state
    if (!destinations) return null
    return (
      <div>
        <ul>
          {
            this.state.destinations.map(destination => (
              // <li onClick={this.handleClick}
              //   value={`${destination.id}`}
              //   key={`${destination.id}${destination.location_id}`}>
              //   {destination.name}{destination.id}
              // </li>
              <li
                key={destination.id}
                onClick={() => this.handleClick(destination.id)}>
                {destination.name}{destination.id}
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}
export default Destinations
