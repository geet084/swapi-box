import React from 'react'
import './Card.scss'

const Card = (props) => {
  
  console.log(props)
  if (props.choice === 'people') {
    return (
      <div className="card">
        <p>Name: {props.name}</p>
        <p>HomeWorld: {props.world}</p>
        <p>Population: {props.population}</p>
        <p>Species: {props.spec}</p>
      </div>
    )
  } else if (props.choice === 'planets') {
    return (
      <div className="card">
        <p>Name: {props.name}</p>
        <p>Terrain: {props.terrain}</p>
        <p>Population: {props.population}</p>
        <p>Climate: {props.climate}</p>
        <p>Residents: ?</p>
      </div>
    )
  }

}

export default Card;