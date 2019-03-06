import React from 'react'
import { connect } from 'react-redux'

//imported functions
import { changePage } from '../modules/actions/vehicleActions'

//imported components
import Configuration from './components/Configuration'

const ShowConfig = props => {
  const disabled = props.vehicleName && props.vehicleColor && props.engine && props.interiorOpts.length > 0 && props.exteriorOpts.length > 0 ? false : true;
  let missingOption = '';
  if(disabled){
    missingOption += 'Please Go Back And Choose - ';
    if(!props.vehicleName) missingOption += 'Vehicle Name - '
    if(!props.vehicleColor) missingOption += 'Vehicle Color - '
    if(props.interiorOpts.length === 0) missingOption += 'Interior Options - '
    if(props.exteriorOpts.length === 0) missingOption += 'Exterior Options - '
    missingOption += 'To Finish'
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 style={{textAlign: 'center'}}>Your Configured Automobile</h1>
        </div>
        <div className="col">
          <div className="show-config">
            {missingOption && <p className="missing">{missingOption}</p>}
            <Configuration/>
            <button disabled={disabled} onClick={() => props.changePage('/checkout')}>Finish And Proceed To Checkout</button>
          </div>
        </div>
      </div>
    </div>
  )
}


const mapStateToProps = state => ({
  vehicleName: state.vehicle.vehicleChosen.name,
  vehicleColor: state.vehicle.colorChosen,
  engine: state.vehicle.engineChosen,
  interiorOpts: state.vehicle.interiorOpts,
  exteriorOpts: state.vehicle.exteriorOpts,
  totalPrice: state.vehicle.totalPrice.toLocaleString(),
})

const mapDispatchToProps = {
  changePage
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowConfig)
