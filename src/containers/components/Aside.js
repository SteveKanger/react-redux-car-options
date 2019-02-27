import React from 'react'
import { connect } from 'react-redux';


const Aside = props => (
  <aside>

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

  </aside>
)

const mapStateToProps = state => ({
  vehicleName: state.vehicleChosen.name,
  vehicleColor: state.colorChosen,
  engine: state.engineChosen,
  interiorOpts: state.interiorOpts,
  exteriorOpts: state.exteriorOpts,
  totalPrice: state.totalPrice.toLocaleString(),
})

export default connect(mapStateToProps)(Aside)






