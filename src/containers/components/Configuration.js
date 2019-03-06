import React from 'react'
import { connect } from 'react-redux';

const Configuration = props => ( 
  <div className="configuration">
    <h2>{props.vehicleName}</h2>
    <ul>
      <li>Price As Configured:</li>
      <li className="price">${props.totalPrice}</li>
    </ul>
    <div className={props.totalPrice ? 'progress active' : 'progress'}></div>
    <p>Color</p>
    <ul>
      <li>
        {props.vehicleColor.name} 
        {props.vehicleColor.hex && <span className="color" style={{backgroundColor: props.vehicleColor.hex}}></span>}
      </li>
    </ul>
    <div className={props.vehicleColor ? 'progress active' : 'progress'}></div>
    <p>Drivetrain</p>
    <ul>
      <li>{props.engine.name}</li>
    </ul>
    <div className={props.engine ? 'progress active' : 'progress'}></div>
    <p>Interior</p>
    <ul>
      {props.interiorOpts.map((opt => (
        <li key={opt.id}>- {opt.name}</li>
      )))}
    </ul>
    <div className={props.interiorOpts.length > 0 ? 'progress active' : 'progress'}></div>
    <p>Exterior</p>
    <ul>
      {props.exteriorOpts.map((opt => (
        <li key={opt.id}>- {opt.name}</li>
      )))}
    </ul>
  </div>
)

const mapStateToProps = state => ({
  vehicleName: state.vehicle.vehicleChosen.name,
  vehicleColor: state.vehicle.colorChosen,
  engine: state.vehicle.engineChosen,
  interiorOpts: state.vehicle.interiorOpts,
  exteriorOpts: state.vehicle.exteriorOpts,
  totalPrice: state.vehicle.totalPrice.toLocaleString(),
})

export default connect(mapStateToProps)(Configuration)






