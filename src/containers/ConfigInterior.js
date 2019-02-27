import React from 'react'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import Aside from './components/Aside'
import data from '../data'
import {setInterior, removeInterior, changePage } from '../modules/actions'

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
              <div className="config-item active" key={opt.id} onClick={() => props.removeInterior(opt.id, opt.price)}>
                {opt.name} <span>${opt.price.toLocaleString()}</span>
              </div>
            )
          }else{
            return (
              <div className="config-item" key={opt.id} onClick={() => props.setInterior(opt.id, opt.name, opt.price)}>
                {opt.name} <span>${opt.price.toLocaleString()}</span>
              </div>
            )
          }
        })}

      </div>
      <div className="col md-4">
        <Aside/>
      </div>
    </div>
  </div>
)

const mapStateToProps = state => ({
  interiorOpts: state.interiorOpts
})

const mapDispatchToProps = {
  setInterior: setInterior,
  removeInterior: removeInterior,
  changePage: changePage
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfigInterior)