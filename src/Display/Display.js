import React from 'react'

const Display = (props) => {
  
  return (
    <div>
      <h4>DISPLAY AREA</h4>
      {
        props.people.map((person, i) => {
          return (
            <p key={person.name}>
              {i + 1}..Name: {person.name}...World: {person.world}...Pop: {person.population}...spec: {person.spec}
            </p>
          )
        })
      }
    </div>
  )
}

export default Display;