import React from 'react'
import axios from 'axios'

class UsersShow extends React.Component {
  constructor() {
    super()

    this.state = { user: false }
    this.getUserData = this.getUserData.bind(this)
  }

  componentDidMount() {
    this.getUserData()
  }

  getUserData() {
    axios.get(`/api/users/${this.props.match.params.id}`)
      .then(res => this.setState({ user: res.data }))
      .catch(err => console.log(err))
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
