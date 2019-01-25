import React from 'react'
import Card from '../Card/Card'
import './Display.scss'

const Display = (props) => {
  let { choice } = props;
  // console.log(props)
  if (choice !== '') {
    return (
      <div className="display">
        {
          props[choice].map((selection, i) => {
            return <Card
              key={i}
              choice={choice}
              {...selection} />
          })
        }
      </div>
    )
  } else return (
    <div className="select-category">
      <span>select a category</span>
    </div>
  )
}

export default Display;