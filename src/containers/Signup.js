import React, { Component } from 'react'

class Signup extends Component{
  state = {
    userName: '',
    email: '',
  }
  handleChange = (e) => {

  }
  render() {
    return (
      <div className="container">
        <h1 style={{textAlign: 'center'}}>Signup</h1>
        <form>
          <div className="row">
            <div className="col md-6">
              <input name="firstName" type="text" placeholder="First Name" />
            </div>
            <div className="col md-6">
              <input name="lastName" type="text" placeholder="Last Name" />
            </div>
            <div className="col">
              <input type="email" name="email" placeholder="Email"/>
              <input type="password" name="password" placeholder="Password" />
              <input type="password" name="password" placeholder="Confirm Password" />
              <button type="submit">Login</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default Signup