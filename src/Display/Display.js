import React from 'react'
import Card from '../Card/Card'
import './Display.scss'

const Display = (props) => {
  let { choice, people, planets } = props;
  
  if (choice === 'people') {
    return (
      <div className="display">
        {
          people.map((person, i) => {
            return <Card
              key={i}
              choice={choice}
              {...person} />
          })
        }
      </div>
    )
  } else if (choice === 'planets') {
    return (
      <div className="display">
        {
          planets.map((planet, i) => {
            return <Card
              key={i}
              choice={choice}
              {...planet} />
          })
        }
      </div>
    )
  } else return <div></div>
  
}

export default Display;