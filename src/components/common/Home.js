import React from 'react'
import Destinations from '../trips/Destinations.js'

class Home extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <h1 className="title">
            Home Page
          </h1>
        </div>
        <Destinations />
      </section>

    )
  }
}

export default Home
