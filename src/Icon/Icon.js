import React from 'react'
import './Icon.scss'
import PropTypes from 'prop-types'

const Icon = ({url, choice, classes, getInfo, optText}) => {
  
  return (
    <div className="section">
      <input type="image"
        src={url}
        alt={choice}
        onClick={getInfo}
        className={classes}
        name={choice}
      />
      <span className="tag">{optText}{choice}</span>
    </div>
  )
}

Icon.protoTypes = {
  url: PropTypes.string,
  choice: PropTypes.string,
  classes: PropTypes.string,
  getInfo: PropTypes.func,
  opText: PropTypes.string
}
export default Icon;