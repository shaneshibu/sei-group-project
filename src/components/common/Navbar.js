import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import Auth from '../../lib/Auth'

class Navbar extends React.Component {
  constructor() {
    super()

    this.state = {}
    this.logout = this.logout.bind(this)
  }

  logout() {
    Auth.logout()
    this.props.history.push('/')
  }

  render() {
    return (
      <nav className="navbar is-dark">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">Home</Link>
          <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div className="navbar-menu">
          <div className="navbar-end">
            {!Auth.isAuthenticated() && <Link className="navbar-item" id="register" to="/register">Register</Link>}
            {!Auth.isAuthenticated() && <Link className="navbar-item" id="login" to="/login">Login</Link>}
            <Link className="navbar-item" to="/trips">Browse Trips</Link>
            {Auth.isAuthenticated() && <Link className="navbar-item" to={`/users/${Auth.getUser()}/trips`}>My Trips</Link>}
            <Link className="navbar-item" to="/users">People</Link>
            {Auth.isAuthenticated() && <Link className="navbar-item" to={`/users/${Auth.getUser()}`}>My Profile</Link>}
            {Auth.isAuthenticated() && <a className="navbar-item" id="logout" onClick={this.logout}>Logout</a>}
          </div>
        </div>
      </nav>
    )
  }
}


export default withRouter(Navbar)
