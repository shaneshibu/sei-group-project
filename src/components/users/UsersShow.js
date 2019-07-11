import React from 'react'
import axios from 'axios'

class UsersShow extends React.Component {
  constructor() {
    super()

    this.state = {}
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

  render() {
    console.log(this.state)
    return (
      <section className="section">
        <div className="container">
          <h1 className="title">
            Users Show Page
          </h1>
        </div>
      </section>
    )
  }
}

export default UsersShow
