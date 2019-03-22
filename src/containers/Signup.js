import React, { Component } from 'react'

class Signup extends Component {
  state = {
    firstName: '',
    lastName: '',
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
        <h1 style={{ textAlign: 'center' }}>Signup</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col md-6">
              <input
                onChange={this.handleChange}
                value={this.state.firstName}
                name="firstName"
                type="text"
                placeholder="First Name"
                required
              />
            </div>
            <div className="col md-6">
              <input
                onChange={this.handleChange}
                value={this.state.lastName}
                name="lastName"
                type="text"
                placeholder="Last Name"
                required
              />
            </div>
            <div className="col">
              <input
                onChange={this.handleChange}
                value={this.state.email}
                type="email"
                name="email"
                placeholder="Email"
                required
              />
              <input
                onChange={this.handleChange}
                value={this.state.password}
                type="password"
                name="password"
                placeholder="Password"
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Confirm Password"
              />
              <button type="submit">Login</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default Signup
