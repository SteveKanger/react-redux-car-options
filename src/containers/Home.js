import React from 'react'
import data from '../data'

//imported componenets
import VehicleBox from './components/VehicleBox'

const Home = () => (
  <div className="container">
    <div className="row">
      <div className="col">
        <h1 style={{textAlign: 'center', textTransform: 'Uppercase'}}>Choose Your Ride</h1>
      </div>
      {data.vehicles.map(vehicle => (
        <VehicleBox 
          key={vehicle.id}
          {...vehicle}
        />
      ))}
    </div>
  </div>
)

export default Home
