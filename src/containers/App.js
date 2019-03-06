import React from 'react'
import { Route, Link } from 'react-router-dom'

//imported components
import Home from './Home'
import ConfigColor from './ConfigColor'
import ConfigEngine from './ConfigEngine'
import ConfigInterior from './ConfigInterior'
import ConfigExterior from './ConfigExterior'
import ShowConfig from './ShowConfig'
import Checkout from './Checkout'
import Login from './Login'
import Signup from './Signup'

const App = () => {
  return (
    <div className="App">
      <header>
        <Link className="logo" to="/">Automobile<span className="pink">/</span><span>Config</span></Link>
        <div>
          <Link to="/login">Login</Link>
          <Link to="/signup">SignUp</Link>
        </div>
      </header>
      <main>
        <Route exact path="/" component={Home} />
        <Route exact path="/config-color" component={ConfigColor} />
        <Route exact path="/config-engine" component={ConfigEngine} />
        <Route exact path="/config-interior" component={ConfigInterior} />
        <Route exact path="/config-exterior" component={ConfigExterior} />
        <Route exact path="/show-config" component={ShowConfig} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
      </main>
      <footer>
        <p>&copy; <span>{new Date().getFullYear()}</span> Design by Steve Kanger</p>
      </footer>
    </div>
  )
}

export default App
