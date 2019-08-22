import React, { Component } from 'react'
import axios from 'axios'

const { token, account } = require('../../../config/env')
const triposoAPI = 'https://www.triposo.com/api/20181213/'
const endpoint = 'property'
const format = '.json'

// https://www.triposo.com/api/20181213/poi.json?annotate=trigram:eureka&trigram=%3E=0.3&count=10&fields=id,name,score,snippet,location_id,tag_labels&order_by=-score&account=ZU9GVO0H&token=2eys99ozaguzd3csvch3tekb8c2jkvuv

class ShowPOI extends Component {
  constructor(props) {
    super(props)

    this.state = { poi: null }
  }

  componentDidMount() {
    this.getPOI()
  }

  //TODO: figure out how to reuse the destiantions request across multiple pages
  getPOI() {
    axios.get(`https://www.triposo.com/api/20181213/property.json?poi_id=${this.props.match.params.placeId}&account=ZU9GVO0H&token=2eys99ozaguzd3csvch3tekb8c2jkvuv`)
    // axios.get(`${triposoAPI}poi.json?$annotate=trigram:eureka&trigram=%3E=0.3&count=10&fields=id,name,score,snippet,location_id,tag_labels&order_by=-score&account=${account}&token=${token}`)
      .then(res => this.setState({ poi: res.data } ))
      .catch(err => console.log(err))
  }

  render() {
    if (!this.state.poi) return null
    console.log('this state', this.state)
    console.log('info for render', this.state)
    return (
      <section>
        <div>
          <p>{this.state.poi.results[2].key}: {this.state.poi.results[2].value}</p> //address
          <p>{this.state.poi.results[3].key}: {this.state.poi.results[3].value}</p> //directions
          <p>{this.state.poi.results[5].key}: {this.state.poi.results[5].value}</p> //price
          <p>{this.state.poi.results[8].key}: {this.state.poi.results[8].value}</p> //train
          <p>{this.state.poi.results[7].key}: {this.state.poi.results[7].value}</p> //bus
        </div>
      </section>
    )
  }
}

export default ShowPOI
