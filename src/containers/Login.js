import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Login extends Component{
  state = {
    userName: '',
    email: '',
  }
  handleChange = (e) => {

  }
  render() {
    return (
      <div className="container">
        <h1 style={{textAlign: 'center'}}>Login</h1>
        <form>
          <div className="row">
            <div className="col" style={{textAlign: 'center'}}>
              <input type="email" name="email" placeholder="Email"/>
              <input type="password" name="password" placeholder="Password" />
              <button type="submit">Login</button>
              <Link to="/reset-password">Forgot Password?</Link>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default Login