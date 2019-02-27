import React from 'react'
import {connect} from 'react-redux'
import { setVehicle } from '../../modules/actions'

const VehicleBox = props => (
  <div className="col md-4 sm-6" style={{display:'flex', flexDirection:'column'}}>
    <div className="vehicle-box" onClick={() => props.setVehicle(props.id, props.name, props.price, props.engine)}>
      <div className="img-wrapper">
        <img src={"/img/" + props.id + ".png"} alt={props.name}/>
      </div>
      <p>
        <span>{props.name}</span>
        <span className="price">MSRP ${props.price.toLocaleString()}</span>
      </p>
    </div>
  </div>
)

const mapDispatchToProps = {
  setVehicle: setVehicle
}

export default connect(null, mapDispatchToProps)(VehicleBox)