import React from 'react'
import './ScrollBox.scss'

const scrollBox = ({ crawlText, title, date }) => {
  const scroll = (
    <div>
      <p>{crawlText}</p>
      <p className="title"><span>{title}  &nbsp; &nbsp; {date}</span></p> 
    </div>
  )
  return (
    <marquee
      className="scroll"
      behavior="scroll"
      direction="up"
      scrollamount="1.5">
      {scroll}
    </marquee>
  )
}

export default scrollBox;