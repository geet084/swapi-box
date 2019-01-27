import React from 'react'
import './ScrollBox.scss'
import PropTypes from 'prop-types'

const scrollBox = ({ crawlText, title, date }) => {
  const scroll = (
    <div>
      <p>{crawlText}</p>
      <p className="title">
        <span>{title}  &nbsp; &nbsp; {date}</span>
      </p> 
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

scrollBox.propTypes = {
  crawlText: PropTypes.string,
  title: PropTypes.string,
  data: PropTypes.string
}
export default scrollBox;