import React from 'react'
import './Nav.scss'

const Nav = (props) => {
  // console.log(props)
  return (
    <div className="nav">
      <button
        onClick={props.showPeople}>
        PEOPLE
      </button>
      <button
        onClick={props.showPlanets}>
        PLANETS
      </button>
      <button
        onClick={props.showVehicles}>
        VEHICLES
      </button>
    </div>
  )
}

export default Nav;