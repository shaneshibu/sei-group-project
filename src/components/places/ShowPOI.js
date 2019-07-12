import React, { Component } from 'react'
import axios from 'axios'

//axios request variables
const { token, account } = require('../../../config/env')
const triposoAPI = 'https://www.triposo.com/api/20181213/'
const endpoint = 'property'
const format = '.json'


const paramsBlock = 'poi_id=W__3107461'

class ShowPOI extends Component {
  constructor(props) {
    super(props)

    this.state = { place: null }
  }

  componentDidMount() {
    this.getPlace()
  }

  //TODO: figure out how to reuse the destiantions request across multiple pages
  getPlace() {
    axios.get(`${triposoAPI}${endpoint}${format}?${paramsBlock}&account=${account}&token=${token}`)
      .then(res => this.setState({ place: res.data } ))
      .catch(err => console.log(err))
  }

  render() {
    const { place } = this.state
    if (!place) return null
    console.log(this.state)
    return (
      <section>
        <div>
          {place.name}{place.id}
        </div>
      </section>
    )
  }
}

export default ShowPOI
