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
            Users Show Page
          </h1>
          {userInfo}
        </div>
      </section>
    )
  }
}

export default UsersShow




// import React from 'react'
// import axios from 'axios'
//
// class UsersShow extends React.Component {
//   constructor() {
//     super()
//
//     this.state = {}
//     this.getUserData = this.getUserData.bind(this)
//   }
//
//   componentDidMount() {
//     this.getUserData()
//   }
//
//   getUserData() {
//     axios.get(`/api/users/${this.props.match.params.id}`)
//       .then(res => this.setState({ user: res.data }))
//       .catch(err => console.log(err))
//
//   }
//
//   render() {
//     console.log(this.state)
//     return (
//       <section className="section">
//         <div className="container">
//           <h1 className="title">
//             Users Show Page
//           </h1>
//           <div className="columns is-mobile is-multiline">
//              (
//             <div key={user._id} className="column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
//
//               <div className="card">
//                 <div className="card-header">
//                   <h4 className="card-header-title">{trip.title}</h4>
//                 </div>
//                 <div className="card-content">
//                   {user.places && user.places((place, i) => (
//
//                     <div key={i}>
//                       <p>{user.name}</p>
//                       <p>{user.userName}</p>
//                       <p>{user.email}</p>
//                       <p>{user.image}</p>
//                       <p>{user.locationHome}</p>
//
//                       <div className="card-image">
//                         <figure className="image is-4by3">
//                           <img src={place.thumbnail} alt="Placeholder image" />
//                         </figure>
//                       </div>
//                     </div>
//
//
//                   ))}
//                 </div >
//
//                 <div className="card-image">
//                   <figure className="image">
//                     <img src={trip.image} alt={trip.name}/>
//                   </figure>
//                 </div>
//                 <div className="card-content">
//                   <h5 className="title is-6">{trip.description}</h5>
//                   <h6 className="subtitle is-6">{trip.title.places}</h6>
//                 </div>
//               </div>
//
//             </div>
//             ))}
//           </div>
//
//
//
//
//
//         </div>
//       </section>
//     )
//   }
// }
//
// export default UsersShow
//
