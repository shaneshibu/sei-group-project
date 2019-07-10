import React, { Component, Fragment } from 'react'
import axios from 'axios'

//axios request variables
const { token, account } = require('../../../config/env')
const triposoAPI = 'https://www.triposo.com/api/20181213/'
const endpoint = 'property'
const format = '.json'

//https://www.triposo.com/api/20181213/property.json?poi_id=W__3107461&account=ZU9GVO0H&token=gecvyh2juuwkrp5uif4yicwczfaq4ytd

//https://www.triposo.com/api/20181213/location.json?id=London&account=ZU9GVO0H&token=gecvyh2juuwkrp5uif4yicwczfaq4ytd

const paramsBlock = 'poi_id=W__3107461'

class ShowPlace extends Component {
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
    if (!this.state.place) return null
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

export default ShowPlace
