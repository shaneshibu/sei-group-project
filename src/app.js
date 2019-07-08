import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Link } from 'react-router-dom'

import 'bulma'

const App = () => (
  <BrowserRouter>
    <main>
      <h1 className="title">Home Page</h1>
    </main>
  </BrowserRouter>,
  console.log('boo')
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
