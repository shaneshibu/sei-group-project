import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class UsersTripsIndex extends React.Component {
  constructor() {
    super()

    this.state = {}
    this.getUsersTrips = this.getUsersTrips.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    //console.log(this.props.match.params.id)
    this.getUsersTrips()
  }
  getUsersTrips() {
    axios.get(`/api/users/${this.props.match.params.id}/trips`)
      .then(res => this.setState({ trips: res.data }))
  }

  handleClick({ target }) {
    console.log(target.dataset.tripid)
  }

  render() {
    console.log(this.state.trips)
    if (!this.state.trips) return null
    return (
      <section className="section">
        <div className="container">
          <h1 className="title">
            My Trips
          </h1>
          {this.state.trips && this.state.trips.map(trip => (
            <div key={trip._id} data-tripid={trip._id}>
              <Link to={`/trips/${trip._id}`}>
                <p className="subtitle" data-tripid={trip._id}>{trip.title}</p>
              </Link>
              {trip.places.map(place => (
                <small key={place._id}>- {place.name} -</small>
              ))}
            </div>
          ))
          }
        </div>
      </section>
    )
  }
}

export default UsersTripsIndex
