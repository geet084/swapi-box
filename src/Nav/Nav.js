import React from 'react'
import './Nav.scss'

const Nav = (props) => {
  let { fetchInfo } = props;
  return (
    <div className="nav">
      <button
        onClick={fetchInfo}
        className="people"
        name="people">PEOPLE
      </button>
      <button
        onClick={fetchInfo}
        className="planets"
        name="planets">PLANETS
      </button>
      <button
        onClick={fetchInfo}
        className="vehicles"
        name="vehicles">VEHICLES
      </button>
    </div>
  )
}

export default Nav;