import React from 'react'
import { Route, Link } from 'react-router-dom'

//imported components
import Home from './Home'
import ConfigColor from './ConfigColor'
import ConfigEngine from './ConfigEngine'
import ConfigInterior from './ConfigInterior'
import ConfigExterior from './ConfigExterior'

const App = () => {
  return (
    <div className="App">
      <header>
        <p>Configure Your Ride</p>
        <div>
          <Link to="/">Login</Link>
          <Link to="/">SignUp</Link>
        </div>
      </header>
      <main>
        <Route exact path="/" component={Home} />
        <Route exact path="/config-color" component={ConfigColor} />
        <Route exact path="/config-engine" component={ConfigEngine} />
        <Route exact path="/config-interior" component={ConfigInterior} />
        <Route exact path="/config-exterior" component={ConfigExterior} />
      </main>
      <footer>
        <p>&copy; <span>{new Date().getFullYear()}</span> Design by Steve Kanger</p>
      </footer>
    </div>
  )
}

export default App
