import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
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

  // componentDidMount() {
  //   this.getDestinations()
  //   console.log('heya fr cDM in destionations')
  //   console.log(`${triposoAPI}location.json?id=${this.props.searchCriteria.inputValue.Place}&fields=all&account=${account}&token=${token}`)
  //
  //   // console.log(axios.get(`${triposoAPI}poi.json?location_id=London$annotate=trigram:${this.props.searchCriteria.inputValue}&fields=id,name,score,snippet,location_id,tag_labels&order_by=-score&account=${account}&token=${token}`)
  // }
  //
  // componentDidUpdate(prevProps) {
  //   console.log('prev', prevProps)
  //   console.log('props', this.props)
  //   // if (prevProps.inputValue && prevProps.inputValue.Place === this.props.inputValue.Place) {
  //   console.log('hey fr component did update')
  //   console.log(`${triposoAPI}location.json?id=${this.props.searchCriteria.inputValue.Place}&fields=all&account=${account}&token=${token}`)
  //   // this.getDestinations()
  //   // }
  // }
  //
  // getDestinations() {
  //   console.log('trying to get destinations')
  //   if (this.props.searchCriteria.searchType === 'Place') {
  //     axios.get(`${triposoAPI}location.json?id=${this.props.searchCriteria.inputValue.Place}&fields=all&account=${account}&token=${token}`)
  //       .then( res => this.setState({ destinations: res.data.results }))
  //       .catch(err => console.log(err))
  //   } else {
  //     axios.get(`${triposoAPI}poi.json?location_id=${this.props.searchCriteria.inputValue.Place}&annotate=trigram:${this.props.searchCriteria.inputValue.POI}&fields=id,name,score,snippet,location_id,tag_labels&order_by=-score&account=${account}&token=${token}`)
  //       .then( res => this.setState({ destinations: res.data.results }))
  //       .catch(err => console.log(err))
  //   }
  // }

  handleClick( e ) {
    // e.persist() - what does this do??
    console.log( 'selected: ', e )
    this.setState( { selected: e }, () => this.props.history.push(`/${this.props.searchType.toLowerCase()}/${this.state.selected}`))
  }

  render() {
    const { destinations } = this.props
    if (!destinations) return null
    return (
      <div>
        <ul>
          {
            destinations.map(destination => (
              <li
                key={destination.id}
                onClick={() => this.handleClick(destination.id)}>
                {destination.name}{destination.id}
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}
export default withRouter(Destinations)


// {this.props.searchCriteria.inputValue}
