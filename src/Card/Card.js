import React from 'react'
import './Card.scss'
import PropTypes from 'prop-types'

const Card = (props) => {
  
  let content = Object.keys(props).map(item => {
    if (item === 'residents') {
      return item = props.residents.map((resident, i) => {
        if (i === 0) return `Residents: ${resident}`
        else return `,  ${resident}`
      })
    } else if (item !== 'choice') {
      return <p key={item}>{item}: {props[item]}</p>
    } else return ''
  })

  return (
    <div className={`card ${props.choice}-bg`}>
      <span className="fave-icon">
        <i className="fas fa-jedi"></i>
      </span>
      {content}
    </div>
  )
}

Card.propTypes = {
  //IS THERE A BETTER WAY TO DO THIS?
  props: PropTypes.string
}
export default Card;