import React from 'react'
import { Link } from 'react-router-dom'
import Auth from '../../lib/Auth'

const Navbar = () => (
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
        {!Auth.isAuthenticated() && <Link className="navbar-item" to="/register">Register</Link>}
        {!Auth.isAuthenticated() && <Link className="navbar-item" to="/login">Login</Link>}
        <Link className="navbar-item" to="/trips">Browse Trips</Link>
        {Auth.isAuthenticated() && <Link className="navbar-item" to="/users/:id/trips">My Trips</Link>}
        <Link className="navbar-item" to="/users">People</Link>
        {Auth.isAuthenticated() && <Link className="navbar-item" to="/users/:id">My Profile</Link>}
      </div>
    </div>
  </nav>
)

export default Navbar
