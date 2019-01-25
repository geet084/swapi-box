import React from 'react'
import './ScrollBox.scss'

const scrollBox = ({ crawlText }) => {
  return (
    <marquee
      className="scroll"
      behavior="scroll"
      direction="up"
      scrollamount="1.5">
      {crawlText}
    </marquee>
  )
}

export default scrollBox;