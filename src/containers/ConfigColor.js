import React from 'react'
import { connect } from 'react-redux'
import data from '../data'
import {setColor} from '../modules/actions'

//imported components
import Aside from './components/Aside'

const ConfigColor = props => (
  <div className="container">
    <div className="row">
      <div className="col md-8">
        <h1>Select Your Color</h1>
        {data.colors.map(color => (
          <div className="config-item" key={color.hex} onClick={() => props.setColor(color.hex, color.name)}>
            {color.name}
            <span className="color" style={{background: color.hex}}></span>
          </div>
        ))}
      </div>
      <div className="col md-4">
        <Aside/>
      </div>
    </div>
  </div>
)

const mapDispatchToProps = {
  setColor: setColor
}

export default connect(null, mapDispatchToProps)(ConfigColor)
