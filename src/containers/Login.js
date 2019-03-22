import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Login extends Component {
  state = {
    email: '',
    password: ''
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = e => {
    e.preventDefault()
    alert('No backend attached login signup not available')
  }
  render() {
    return (
      <div className="container">
        <h1 style={{ textAlign: 'center' }}>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col" style={{ textAlign: 'center' }}>
              <input
                onChange={this.handleChange}
                value={this.state.email}
                type="email"
                name="email"
                placeholder="Email"
              />
              <input
                onChange={this.handleChange}
                value={this.state.password}
                type="password"
                name="password"
                placeholder="Password"
              />
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
