import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'bulma'

// import Destinations from './components/Destinations'
import Navbar from './components/common/Navbar'
import Home from './components/common/Home'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import UsersIndex from './components/users/UsersIndex'
import UsersShow from './components/users/UsersShow'
import UsersTripsIndex from './components/trips/UsersTripsIndex'
import TripsIndex from './components/trips/TripsIndex'
// import TripsCreate from './components/trips/TripsCreate'
import TripsShow from './components/trips/TripsShow'
import SecureRoute from './components/common/SecureRoute'
import ShowPlace from './components/places/ShowPlace'
import ShowPOI from './components/places/ShowPOI'
import './style.scss'

const App = () => (
  <BrowserRouter>
    <main>
      <Navbar />
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/place/:placeId" component={ShowPlace} />
        <Route path="/poi/:placeId" component={ShowPOI} />
        <Route exact path="/users/:id/trips" component={UsersTripsIndex} />
        <Route exact path='/users/:id' component={UsersShow} />
        <Route exact path="/users" component={UsersIndex} />
        <Route exact path="/trips" component={TripsIndex} />
        <Route exact path="/trips/:id" component={TripsShow} />
        <Route exact path="/" component={Home} />
      </Switch>
    </main>
  </BrowserRouter>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
