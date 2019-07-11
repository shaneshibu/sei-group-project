import React, { Component } from 'react'
import axios from 'axios'

const { token, account } = require('../../../config/env')
const triposoAPI = 'https://www.triposo.com/api/20181213/'


class Destinations extends Component {
  constructor(props) {
    super(props)

    this.state = {
      destinations: null,
      selected: null
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    this.getDestinations()
  }

  getDestinations() {
    if (this.props.searchCriteria.searchType === 'Place') {
      axios.get(`${triposoAPI}location.json?id=${this.props.searchCriteria.inputValue}&fields=all&account=${account}&token=${token}`)
        .then( res => this.setState({ destinations: res.data.results }))
        .catch(err => console.log(err))
    } else {
      axios.get(`${triposoAPI}poi.json?location_id=London$annotate=trigram:${this.props.searchCriteria.inputValue}&fields=id,name,score,snippet,location_id,tag_labels&order_by=-score&account=${account}&token=${token}`)
        .then( res => this.setState({ destinations: res.data.results }))
        .catch(err => console.log(err))
    }
  }

  handleClick( e ) {
    // e.persist() - what does this do??
    console.log( 'selected: ', e )
    this.setState( { selected: e }, () => this.props.history.push(`/places/${this.state.selected}`))
  }

  render() {
    const { destinations } = this.state
    if (!destinations) return null
    return (
      <div>
        <ul>
          {
            this.state.destinations.map(destination => (
              <li
                key={destination.id}
                onClick={() => this.handleClick(destination.id)}>
                {destination.name}{destination.id}
                {this.props.searchCriteria.inputValue}
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}
export default Destinations
