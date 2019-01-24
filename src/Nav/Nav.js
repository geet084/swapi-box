import React from 'react'

const Nav = (props) => {
  // console.log(props)
  return (
    <div>
      <button onClick={props.showMore}>PEOPLE</button>
    </div>
  )
}

export default Nav;