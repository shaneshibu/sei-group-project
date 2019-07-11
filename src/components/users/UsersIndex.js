import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class UsersIndex extends React.Component {
  constructor() {
    super()

    this.state = {}
    this.getUsersData = this.getUsersData.bind(this)
  }

  componentDidMount() {
    this.getUsersData()
  }

  getUsersData() {
    axios.get('/api/users')
      .then(res => this.setState({ users: res.data }))
  }

  render() {
    console.log(this.state)
    return (
      <section className="section">
        <div className="container">
          <h1 className="title">
            Meet Your Fellow Travellers
          </h1>
        </div>
        <div className="columns is-multiline">
          {this.state.users && this.state.users.map(user => (
            <div key={user._id} className="column is-half">
              <Link  to={`/users/${user._id}`}>
                <div className="box">
                  <article className="media">
                    <div className="media-left">
                      <figure className="image is-64x64">
                        <img src={user.image} alt={user.username} />
                      </figure>
                    </div>
                    <div className="media-content">
                      <div className="content">
                        <p><strong>{user.username}</strong></p>
                        <p><small>{user.email}</small></p>
                      </div>
                    </div>
                  </article>
                </div>
              </Link>
            </div>
          ))
          }
        </div>
      </section>
    )
  }
}

export default UsersIndex
