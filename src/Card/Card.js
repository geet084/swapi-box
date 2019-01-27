import React from 'react'
import './Card.scss'
import PropTypes from 'prop-types'

const Card = (props) => {
  const classes = `card ${props.choice}-bg`
  
 if (props.choice === 'people') {
    return (
      <div className={classes}>
        <span className="fave-icon">
          <i className="fas fa-jedi"></i>
        </span>
        <p>Name: {props.name}</p>
        <p>HomeWorld: {props.homeworld}</p>
        <p>Population: {props.population}</p>
        <p>Species: {props.species}</p>
      </div>
    )
 } else if (props.choice === 'planets') {
   console.log(props)
   let residents = props.residents.map((resident, i) => {
     if (i === 0) return `${resident}`
     else return `,  ${resident}`
   })

    return (
      <div className={classes}>
        <span className="fave-icon">
          <i className="fas fa-jedi"></i>
        </span>
        <p>Name: {props.name}</p>
        <p>Terrain: {props.terrain}</p>
        <p>Population: {props.population}</p>
        <p>Climate: {props.climate}</p>
        <p>Residents: {residents}</p>
      </div>
    )
  } else {
    return (
      <div className={classes}>
        <span className="fave-icon">
          <i className="fas fa-jedi"></i>
        </span>
        <p>Name: {props.name}</p>
        <p>Model: {props.model}</p>
        <p>Class: {props.vehicle_class}</p>
        <p>Passengers: {props.passengers}</p>
      </div>
    )
  }

}

Card.propTypes = {
  //IS THERE A BETTER WAY TO DO THIS?
  props: PropTypes.string
}
export default Card;