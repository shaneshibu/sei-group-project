import React, { Component, Fragment } from 'react'
import axios from 'axios'

//axios request variables
const { token, account } = require('../../../config/env')
const triposoAPI = 'https://www.triposo.com/api/20181213/'
const endpoint = 'location'
const format = '.json'

//https://www.triposo.com/api/20181213/location.json?id=London&account=ZU9GVO0H&token=gecvyh2juuwkrp5uif4yicwczfaq4ytd

// const paramsBlock = 'id=London'

class ShowPlace extends Component {
  constructor(props) {
    super(props)

    this.state = { place: null }
  }

  componentDidMount() {
    this.getPlace()
    console.log(this.props.match.params.placeId)
  }

  //TODO: figure out how to reuse the destiantions request across multiple pages
  getPlace() {
    axios.get(`${triposoAPI}${endpoint}${format}?id=${this.props.match.params.placeId}&account=${account}&token=${token}`)
      .then(res => this.setState({ place: res.data.results[0] } ))
      .catch(err => console.log(err))
  }

  render() {
    if (!this.state.place) return null
    console.log(this.state)
    const { place } = this.state
    return (
      <section>
        <div>
          <p>{place.name}</p>
          <p>{place.snippet}</p>
        </div>
      </section>
    )
  }
}

export default ShowPlace
