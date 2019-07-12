import React from 'react'
import axios from 'axios'

class TripsShow extends React.Component {
  constructor() {
    super()

    this.state = {}
  }

  componentDidMount() {
    //console.log(this.props)
    axios.get(`/api/trips/${this.props.match.params.id}`)
      .then(res => this.setState({ trip: res.data }))
      .catch(err => console.log(err))
  }

  render() {
    if (this.state.trip) console.log(this.state.trip.places)
    return (
      <section className="section">
        <div className="container">
          <h1 className="title">
            Trip Show Page
          </h1>
          {this.state.trip &&
            <div className="columns">
              <div className="column is-one-fifth">
                {this.state.trip.places.map((place, i) => (
                  <div key={i} className="">
                    <p className="subtitle">{place.name}</p>
                  </div>
                ))}
              </div>
              <div className="column is-four-fifths">
                {this.state.trip.places.map((place, i) => (
                  <div key={i}>
                    <h2 className="subtitle">{place.name}</h2>
                    <figure>
                      <img src={place.thumbnail} alt={place.name} className="image"/>
                    </figure>
                    <p>{place.snippet}</p>
                    <h3>{place.comments.length} Comments:</h3>
                    <div>
                      {place.comments.length && place.comments.map(comment => (
                        <div key={comment._id}>
                          <p>{comment.text}</p>
                          <small>udated at: {comment.updatedAt}</small>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          }
        </div>
      </section>
    )
  }
}

export default TripsShow
