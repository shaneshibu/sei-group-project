import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Auth from '../../lib/Auth'

class UsersTripsIndex extends React.Component {
  constructor() {
    super()

    this.state = {}
    this.getUsersTrips = this.getUsersTrips.bind(this)
    this.getUser = this.getUser.bind(this)
    //this.handleClick = this.handleClick.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.isOwner = this.isOwner.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount() {
    console.log(this.props)
    this.getUsersTrips()
    this.getUser()
  }
  getUsersTrips() {
    axios.get(`/api/users/${this.props.match.params.id}/trips`)
      .then(res => this.setState({ trips: res.data }))
  }
  getUser() {
    axios.get(`/api/users/${this.props.match.params.id}`)
    .then(res => this.setState({ user: res.data }))
  }

  // handleClick({ target }) {
  //   console.log(target.dataset.tripid)
  // }

  handleChange({ target }) {
    this.setState({ newTripInput: target.value })
  }

  handleSubmit(e) {
    e.preventDefault()

    //console.log(this.props)
    if (this.state.newTripInput && this.state.newTripInput.length) {
      axios.post(`/api/users/${this.props.match.params.id}/trips`, {
        title: this.state.newTripInput,
        user_id: this.props.match.params.id
      })
        .then(() => this.getUsersTrips())
        .catch(err => console.log(err))
    }
  }

  isOwner() {
    return Auth.getUser() === this.props.match.params.id
  }

  handleDelete({ target }) {
    const tripId = target.dataset.tripid
    if (window.confirm('Are you sure you want to delete this Trip?')) {
      axios.patch(`/api/users/${this.props.match.params.id}/trips`, {
        tripId: tripId
      })
        .then(() => this.getUsersTrips())
        .catch(err => console.log(err))
    }
  }

  render() {
    console.log(this.state)
    if (!this.state.trips) return null
    return (
      <section className="section">
        <div className="container">
          {this.state.user &&
            <h1 className="title">
              {this.state.user.username}'s Trips
          </h1>}
          <div>
            {this.isOwner() && <form className="field has-addons" onSubmit={this.handleSubmit}>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  placeholder="Create a New Trip"
                  value={this.state.newTripInput || ''}
                  onChange={this.handleChange}
                />
              </div>
              <div className="control">
                <button className="button">Create</button>
              </div>
            </form>}
          </div>
          {this.state.trips && this.state.trips.map(trip => (
            <div key={trip._id} data-tripid={trip._id}>
              <Link to={`/trips/${trip._id}`}>
                <p className="subtitle">{trip.title}</p>
              </Link>
              {trip.places.map(place => (
                <small key={place._id}>- {place.name} -</small>
              ))}
              {this.isOwner() &&
                <button
                  className="button"
                  data-tripid={trip._id}
                  onClick={this.handleDelete}
                >
                  Delete
                </button>
              }
            </div>
          ))
          }
        </div>
      </section>
    )
  }
}

export default UsersTripsIndex
