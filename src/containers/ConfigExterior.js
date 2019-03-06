import React from 'react'
import { connect } from 'react-redux'
import data from '../data'

//imported functions
import {removeExterior, setExterior, changePage } from '../modules/actions/vehicleActions'

//imported componenets
import Configuration from './components/Configuration'

const ConfigExterior = props => (
  <div className="container">
    <div className="row">
      <div className="col md-8">
        <h1>Select Your Exterior Options</h1>
        <button className="next" disabled={!props.exteriorOpts.length} onClick={() => props.changePage('/show-config')}>Proceed To Next Step</button>
        <p style={{textAlign:'right'}}>Select As Many As Needed</p>

        {data.exterior.map(opt => {
          if(props.exteriorOpts.some(item => item.id === opt.id)){
            return (
              <div className="config-item" key={opt.id} onClick={() => props.removeExterior(opt.id, opt.price)}>
                <div className="checkbox checked"></div> 
                {opt.name} 
                <span>${opt.price.toLocaleString()}</span>
              </div>
            )
          }else{
            return (
              <div className="config-item" key={opt.id} onClick={() => props.setExterior(opt.id, opt.name, opt.price)}>
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
  exteriorOpts: state.vehicle.exteriorOpts
})

const mapDispatchToProps = {
  setExterior,
  removeExterior,
  changePage
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfigExterior)