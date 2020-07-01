import React from 'react'
import { render } from 'react-dom'
import Pet from './Pet'

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Fedya" animal="Cat" breed="Sunhouser" />
      <Pet name="Batman" animal="Cat" breed="Blackman" />
    </div>
  )
}

render(<App />, document.getElementById('root'))
