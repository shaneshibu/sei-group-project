import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class TripsIndex extends React.Component {
  constructor() {
    super()

    this.state = {}
  }

  componentDidMount() {
    axios.get('/api/trips')
      .then(res => this.setState({ trips: res.data }))
      .catch(err => console.log(err))
  }

  render() {
    console.log(this.state)
    return (

      <section className="section">
        <div className="container">
          <h1 className="title">
              Browse All Trips
          </h1>
          <div className="columns is-mobile is-multiline">
            {this.state.trips && this.state.trips.map(trip => (
              <div key={trip._id} className="column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
                <Link to={`/trips/${trip._id}`}>
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-header-title">{trip.title}</h4>
                    </div>
                    <div className="card-content">
                      {trip.places && trip.places.map((place, i) => (
                        <div key={i}>
                          <p>{place.name}</p>
                          <p>{place.snippet}</p>
                          <div className="card-image">
                            <figure className="image is-4by3">
                              <img src={place.thumbnail} alt="Placeholder image" />
                            </figure>
                          </div>
                        </div>
                      ))}
                    </div >
                    <div className="card-header">
                      <h4 className="card-header-title">Traveller{trip.name}</h4>
                    </div>
                    <div className="card-image">
                      <figure className="image">
                        <img src={trip.image} alt={trip.name}/>
                      </figure>
                    </div>
                    <div className="card-content">
                      <h5 className="title is-6">{trip.description}</h5>
                      <h6 className="subtitle is-6">{trip.title.places}</h6>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>


    )
  }
}

export default TripsIndex
