import React from 'react'
import './Icon.scss'

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

export default Icon;