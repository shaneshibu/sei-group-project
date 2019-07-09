import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Link } from 'react-router-dom'
import Destinations from './components/Destinations'

import 'bulma'

const App = () => (
  <BrowserRouter>
    <main>
      <h1 className="title">Home Page</h1>
      <Destinations />
    </main>
  </BrowserRouter>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
