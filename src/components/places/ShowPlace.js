import React, { Component, Fragment } from 'react'
import axios from 'axios'

//axios request variables
const { token, account } = require('../../../config/env')
const triposoAPI = 'https://www.triposo.com/api/20181213/'
const endpoint = 'location'
const format = '.json'


// const paramsBlock = 'id=London'

class ShowPlace extends Component {
  constructor(props) {
    super(props)

    this.state = { place: null }
  }

  componentDidMount() {
    this.getPlace()
    console.log(this.props.match.params.placeId)
    console.log('boohoo')
  }

  //TODO: figure out how to reuse the destiantions request across multiple pages
  getPlace() {
    axios.get(`${triposoAPI}${endpoint}${format}?id=${this.props.match.params.placeId}&account=${account}&token=${token}`)
      .then(res => this.setState({ place: res.data.results[0] } ))
      .catch(err => console.log(err))
  }

  render() {
    if (!this.state.place) return null
    console.log('this state', this.state)
    const { place } = this.state
    return (
      <section>
        <div>
          <p>{place.name}</p>
          <p>{place.snippet}</p>
          <img
            src={place.images[0].sizes.medium.url}
            alt={place.name}
          />
        </div>
        <a className="button is-link">Add {place.name} to my Profile</a>
      </section>
    )
  }
}

export default ShowPlace
