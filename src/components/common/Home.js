import React, { Component, Fragment } from 'react'
import Destinations from '../places/Destinations.js'

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

  getInput(e) {
    console.log( 'changed: ', e.target.value )
    this.setState( { inputValue: e.target.value } )
  }

  getSearchType(e) {
    console.log(e.target.value)
    this.setState( { searchType: e.target.value })
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
          <Destinations searchCriteria = {this.state} />
        </div>
      </section>

    )
  }
}

export default Home
