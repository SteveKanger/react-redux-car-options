import React from 'react'
import { connect } from 'react-redux'

//imported functions
import { setEngine } from '../modules/actions/vehicleActions'

//imported components
import Configuration from './components/Configuration'

const ConfigEngine = props => (
  <div className="container">
    <div className="row">
      <div className="col md-8">
        <h1>Select Your DriveTrain</h1>
        {props.engines.map(engine => (
          <div className="config-item" key={engine.id} onClick={() => props.setEngine(engine.id, engine.name, engine.price)}>
            <div className={props.engineChosen.id === engine.id ? "checkbox checked" : "checkbox"}></div>
            {engine.name} 
            <span>${engine.price.toLocaleString()}</span>
          </div>
        ))}
      </div>
      <div className="col md-4">
        <Configuration/>
      </div>
    </div>
  </div>
)

const mapStateToProps = state => ({
  engines: state.vehicle.vehicleChosen.engine,
  engineChosen: state.vehicle.engineChosen
})

const mapDispatchToProps = {
  setEngine
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfigEngine)