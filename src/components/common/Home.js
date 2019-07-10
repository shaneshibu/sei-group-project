import React from 'react'
import Destinations from '../trips/Destinations.js'

class Home extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <section className="hero is-fullheight-with-navbar">
        <div className="hero-image">
          <div className="container">
            <h1 className="title">
            Walkabout
            </h1>
          </div>
          <Destinations />
        </div>
      </section>

    )
  }
}

export default Home
