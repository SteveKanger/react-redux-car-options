import React from 'react'
import { connect } from 'react-redux'
import data from '../data'

//imported functions
import { setColor } from '../modules/actions/vehicleActions'

//imported components
import Configuration from './components/Configuration'

const ConfigColor = props => (
  <div className="container">
    <div className="row">
      <div className="col md-8">
        <h1>Select Your Color</h1>
        {data.colors.map(color => (
          <div className="config-item" key={color.hex} onClick={() => props.setColor(color.hex, color.name)}>
            <div className={props.colorChosen.hex === color.hex ? "checkbox checked" : "checkbox"}></div>
            {color.name}
            <span className="color" style={{background: color.hex}}></span>
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
  colorChosen: state.vehicle.colorChosen
})

const mapDispatchToProps = {
  setColor
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfigColor)
