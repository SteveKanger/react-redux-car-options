import React from 'react'
import { connect } from 'react-redux'
import { setEngine } from '../modules/actions'

//imported components
import Aside from './components/Aside'

const ConfigEngine = props => (
  <div className="container">
    <div className="row">
      <div className="col md-8">
        <h1>Select Your DriveTrain</h1>
        {props.engines.map(engine => (
          <div className="config-item" key={engine.id} onClick={() => props.setEngine(engine.id, engine.name, engine.price)}>
            {engine.name} <span>${engine.price.toLocaleString()}</span>
          </div>
        ))}
      </div>
      <div className="col md-4">
        <Aside/>
      </div>
    </div>
  </div>
)

const mapStateToProps = state => ({
  engines: state.vehicleChosen.engine
})

const mapDispatchToProps = {
  setEngine: setEngine
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfigEngine)