import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Auth from '../../lib/Auth'

class UsersShow extends React.Component {
  constructor() {
    super()

    this.state = { user: false }
    this.getUserData = this.getUserData.bind(this)
    this.isOwner = this.isOwner.bind(this)
  }

  componentDidMount() {
    this.getUserData()
  }

  getUserData() {
    axios.get(`/api/users/${this.props.match.params.id}`)
      .then(res => this.setState({ user: res.data }))
      .catch(err => console.log(err))
  }

  isOwner() {
    return Auth.getUser() === this.props.match.params.id
  }

  getUserInfo(){
    const { user } = this.state
    if (!user) {
      return null
    }
    return (
      <div className="outer-container">
        <div className="user-container">
          <img className="user-image" src={user.image}/>
          <div className="name">{user.name}</div>
          <div className="email">{user.email}</div>
          <div className="username">{user.username}</div>
          <div className="location">{user.locationHome}</div>
          <div className="trips">
            {user.username} has {user.trips.length} trip(s)
          </div>
          {!this.isOwner() && <Link className="button" to={`/users/${this.props.match.params.id}/trips`}>View {this.state.user.name}'s Trips</Link>}

        </div>
      </div>
    )
  }

  render() {
    console.log(this.state)
    const userInfo = this.getUserInfo()
    return (
      <section className="section page-container">
        <div className="container">
          <h1 className="title">

          </h1>
          {userInfo}
        </div>
      </section>
    )
  }
}

export default UsersShow
