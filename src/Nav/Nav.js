import React from 'react'
import './Nav.scss'

const Nav = (props) => {
  let { fetchInfo } = props;
  return (
    <div className="nav">
      <button
        onClick={fetchInfo} name="people">PEOPLE
      </button>
      <button
        onClick={fetchInfo} name="planets">PLANETS
      </button>
      <button
        onClick={fetchInfo} name="vehicles">VEHICLES
      </button>
    </div>
  )
}

export default Nav;