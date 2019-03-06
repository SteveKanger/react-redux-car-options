import React from 'react'
import { connect } from 'react-redux'
import data from '../data'

//imported functions
import {setInterior, removeInterior, changePage } from '../modules/actions/vehicleActions'

//imported componenets
import Configuration from './components/Configuration'

const ConfigInterior = props => (
  <div className="container">
    <div className="row">
      <div className="col md-8">
        <h1>Select Your Interior Options</h1>
        <button className="next" disabled={!props.interiorOpts.length} onClick={() => props.changePage('/config-exterior')}>Proceed To Next Step</button>
        <p style={{textAlign:'right'}}>Select As Many As Needed</p>

        {data.interior.map(opt => {
          if(props.interiorOpts.some(item => item.id === opt.id)){
            return (
              <div className="config-item" key={opt.id} onClick={() => props.removeInterior(opt.id, opt.price)}>
                <div className="checkbox checked"></div> 
                {opt.name} 
                <span>${opt.price.toLocaleString()}</span>
              </div>
            )
          }else{
            return (
              <div className="config-item" key={opt.id} onClick={() => props.setInterior(opt.id, opt.name, opt.price)}>
                <div className="checkbox"></div> 
                {opt.name} 
                <span>${opt.price.toLocaleString()}</span>
              </div>
            )
          }
        })}

      </div>
      <div className="col md-4">
        <Configuration/>
      </div>
    </div>
  </div>
)

const mapStateToProps = state => ({
  interiorOpts: state.vehicle.interiorOpts
})

const mapDispatchToProps = {
  setInterior,
  removeInterior,
  changePage
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfigInterior)