import React from 'react'
import './ScrollBox.scss'

const scrollBox = ({ movie }) => {
  return (
    <marquee
      className="scroll"
      behavior="scroll"
      direction="up"
      scrollamount="1.5">
      {movie}
    </marquee>
  )
}

export default scrollBox;