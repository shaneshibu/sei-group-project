import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom'
import 'bulma'

// import Destinations from './components/Destinations'
import Navbar from './components/common/Navbar'
import Home from './components/common/Home'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import UsersIndex from './components/users/UsersIndex'
import UsersShow from './components/users/UsersShow'
import TripsCreate from './components/trips/TripsCreate'

const App = () => (
  <BrowserRouter>
    <main>
      <Navbar />
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route exact path='/users/:id' component={UsersShow} />
        <Route exact path="/users" component={UsersIndex} />
        <Route exact path="/trips/new" component={TripsCreate} />
        <Route exact path="/" component={Home} />
      </Switch>
    </main>
  </BrowserRouter>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
