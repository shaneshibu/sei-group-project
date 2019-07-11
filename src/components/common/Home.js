import React, { Component, Fragment } from 'react'
import axios from 'axios'

import Destinations from '../places/Destinations.js'

const { token, account } = require('../../../config/env')
const triposoAPI = 'https://www.triposo.com/api/20181213/'

class Home extends Component {
  constructor() {
    super()

    this.state = {
      inputValue: null,
      searchType: null
    }

    this.getInput = this.getInput.bind(this)
    this.getSearchType = this.getSearchType.bind(this)
  }

  getInput({ target: { name, value } }) {
    console.log(this.state)
    const inputValue = { ...this.state.inputValue, [name]: value }
    this.setState({ inputValue }, () => this.getDestinations())
  }

  getSearchType(e) {
    console.log(e.target.value)
    this.setState( { searchType: e.target.value })
  }

  getDestinations() {
    console.log('trying to get destinations')
    const { searchType, inputValue } = this.state
    if (!inputValue.Place) return null
    const place = inputValue.Place.charAt(0).toUpperCase() + inputValue.Place.slice(1)
    if (searchType === 'Place') {
      axios.get(`${triposoAPI}location.json?id=${place}&fields=all&account=${account}&token=${token}`)
        .then( res => this.setState({ destinations: res.data.results }))
        .catch(err => console.log(err))
    } else {
      axios.get(`${triposoAPI}poi.json?location_id=${place}&annotate=trigram:${inputValue.POI}&fields=id,name,score,snippet,location_id,tag_labels&order_by=-score&account=${account}&token=${token}`)
        .then( res => this.setState({ destinations: res.data.results }))
        .catch(err => console.log(err))
    }
  }

  render() {
    return (
      <section className="hero is-fullheight-with-navbar">
        <div className="hero-image">
          <div className="container">
            <h1 className="title">
            Walkabout
            </h1>
            <p>Are you looking for a Place or a Point of Interest at a Place?</p>
            <div onChange={this.getSearchType}>
              <input type="radio" value="Place" name="searchType"/> a Place
              <input type="radio" value="POI" name="searchType"/> a Point of Interest at a place
            </div>
            {this.state.searchType === 'POI' &&
            <input
              className="input"
              type="text"
              name="POI"
              placeholder="Point of Interest"
              onChange={this.getInput}
            />
            }
            <input
              className="input"
              type="text"
              name="Place"
              placeholder="Place"
              onChange={this.getInput}
            />
          </div>
          {this.state.destinations &&
            <Destinations destinations={this.state.destinations} />
          }
        </div>
      </section>

    )
  }
}

export default Home
