import React from 'react'
import './Nav.scss'

const Nav = (props) => {
  let { showPeople, showPlanets, showVehicles } = props;
  return (
    <div className="nav">
      <button
        onClick={showPeople}>PEOPLE
      </button>
      <button
        onClick={showPlanets}>PLANETS
      </button>
      <button
        onClick={showVehicles}>VEHICLES
      </button>
    </div>
  )
}

export default Nav;