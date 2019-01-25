import React from 'react'
import './Nav.scss'

const Nav = (props) => {
  let { getInfo } = props;
  return (
    <div className="nav">
      <button
        onClick={getInfo}
        className="people"
        name="people">PEOPLE
      </button>
      <button
        onClick={getInfo}
        className="planets"
        name="planets">PLANETS
      </button>
      <button
        onClick={getInfo}
        className="vehicles"
        name="vehicles">VEHICLES
      </button>
    </div>
  )
}

export default Nav;