import React from 'react'
import Card from '../Card/Card'
import './Display.scss'

const Display = (props) => {
  let { choice } = props;
  
  if (choice !== '') {
    let cards = props[choice].map((selection, i) => {
      return <Card key={i} choice={choice} {...selection} />
    })

    return (
      <div className="display">
        {cards}
      </div>
    )
  } else return (
    <div className="select-category">
      <span>select a category</span>
    </div>
  )
}

export default Display;