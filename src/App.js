import React from 'react'
import { Router } from '@reach/router'
import { render } from 'react-dom'
import SearchParams from './SearchParams'
import Details from './Details'

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Router>
        <SearchParams path="/" />
        <Details path="/details/:id" />
      </Router>
    </div>
  )
}

render(<App />, document.getElementById('root'))
