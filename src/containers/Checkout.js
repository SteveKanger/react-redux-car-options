import React from 'react'
import { connect } from 'react-redux'

const onSubmit = (e) => {
  e.preventDefault();
  alert("Form Will Not Be Submitted This Was Just For Demo Purposes")
}

const Checkout = props => (
  <div className="container checkout">
    <h1 style={{textAlign: 'center'}}>Checkout</h1>
    <h2>{props.vehicleChosen}</h2>
    <p className="price">${props.totalPrice.toLocaleString()}</p>
    <div className="credit-cards">
      <i className="fab fa-cc-visa"></i>
      <i className="fab fa-cc-mastercard"></i>
      <i className="fab fa-cc-discover"></i>
      <i className="fab fa-cc-amex"></i>
      <i className="fab fa-cc-paypal"></i>
    </div>
    <form onSubmit={onSubmit}>
      <div className="row">
        <div className="col">
          <p>Shipping Info</p>
          <input type="text" name="address" placeholder="Address"/>
          <input type="text" name="address2" placeholder="Address 2"/>
          <input type="text" name="city" placeholder="City" />
        </div>
        <div className="col md-6">
          <input type="text" name="state" placeholder="State" />
        </div>
        <div className="col md-6">
          <input type="text" name="zip" placeholder="Zip" />
        </div>
        <div className="col">
          <input type="text" name="phone" placeholder="Phone Number" />
          <p>Payment Info</p>
          <input type="text" name="card-name" placeholder="Name On Card" />
          <input type="text" name="cc-num" placeholder="Credit Card Number"/>
        </div>
        <div className="col md-6">
          <input type="text" name="exp-date" placeholder="Expiraton Date"/>
        </div>
        <div className="col md-6">
          <input type="text" name="cvv" placeholder="CVV"/>
        </div>
        <div className="col">
          <button type="submit">Submit</button>
        </div>
      </div>
    </form>
  </div>
)

const mapStateToProps = state => ({
  vehicleChosen: state.vehicle.vehicleChosen.name,
  totalPrice: state.vehicle.totalPrice,
  isLoggedIn: state.vehicle.isLoggedIn
})

export default connect(mapStateToProps)(Checkout)