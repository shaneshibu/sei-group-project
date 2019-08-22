import React, { Component, Fragment } from 'react'
import axios from 'axios'

import Destinations from '../places/Destinations.js'

const { token, account } = require('../../../config/env')

console.log('token in home', token)

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
    // if (!inputValue.Place || !inputValue.POI) return null

    // console.log(place)
    console.log(searchType)
    if (searchType === 'Place' && inputValue.Place) {
      const place = inputValue.Place.charAt(0).toUpperCase() + inputValue.Place.slice(1)
      // console.log(`${triposoAPI}location.json?annotate=trigram:${place}&trigram=>=0.3&count=10&fields=id,name,score,snippet&order_by=-score&account=${account}&token=${token}`)
      // https://www.triposo.com/api/20181213/location.json?annotate=trigram:york&trigram=>=0.3&count=10&fields=id,name,score,snippet&order_by=-score&
      axios.get(`${triposoAPI}location.json?annotate=trigram:${place}&trigram=>=0.3&count=10&fields=id,name,score,snippet&order_by=-score&account=${account}&token=${token}`)
        .then( res => this.setState({ destinations: res.data.results }))
        .catch(err => console.log(err))
    } else if (searchType === 'POI' && inputValue.POI) {
      // console.log(`this is the poi url ${triposoAPI}poi.json?annotate=trigram:${inputValue.POI}&trigram=%3E=0.3&count=10&fields=id,name,score,snippet,location_id,tag_labels&order_by=-score&account=${account}&token=${token}`)
      axios.get(`${triposoAPI}poi.json?annotate=trigram:${inputValue.POI}&trigram=%3E=0.3&count=10&fields=id,name,score,snippet,location_id,tag_labels&order_by=-score&account=${account}&token=${token}`)
        .then( res => this.setState({ destinations: res.data.results }))
        .catch(err => console.log(err))
    }
  }

  //TODO: decide if we should narrow down the pois by location. We'll have that now from the first req.

  // But actually, we'll need to do both requests for the poi, not else...


  render() {
    return (
      <section className="hero is-fullheight-with-navbar">
        <div className="hero-image">
          <div className="container has-text-centered">
            <h1 className="title">
            Walkabout
            </h1>
            <h2>
            Lets find where in the world you're looking for!
            </h2>
            <p>Would you like to find a Place, or a particular Point of Interest at a Place?</p>
            <div onChange={this.getSearchType}>
              <input type="radio" value="Place" name="searchType"/>Place
              <input type="radio" value="POI" name="searchType"/>Point of Interest at a place
            </div>
            <Fragment>
              <div>
                {this.state.searchType === 'Place' &&
                <div>
                  <p>What is the name of the place you are looking for?</p>
                  <input
                    className="input"
                    type="text"
                    name="Place"
                    placeholder="Place"
                    onChange={this.getInput}
                  />
                </div>
                }
              </div>

              <Fragment>
                {this.state.searchType === 'POI' &&
              <div>
                <p>What is the name of the Point of Interest you are looking for?</p>
                <input
                  className="input"
                  type="text"
                  name="POI"
                  placeholder="Point of Interest"
                  onChange={this.getInput}
                />
              </div>
                }
              </Fragment>
              {this.state.destinations &&
            <Destinations searchType={this.state.searchType} destinations={this.state.destinations} />
              }
            </Fragment>
          </div>
        </div>
      </section>

    )
  }
}

export default Home
