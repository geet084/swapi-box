import React from 'react'
import Card from '../Card/Card'
import './Display.scss'

const Display = (props) => {
  let { choice } = props;
  
  if (choice !== '' && choice !== 'faves') {
    let cards = props[choice].map((selection, i) => {
      return <Card key={i} choice={choice} {...selection} />
    })

    return (
      <div className="display">
        {cards}
      </div>
    )
  } else if (choice === 'faves') { 
    return (<div></div>)

  } else {
    return (
    <div className="select-category">
      <span className="select">SELECT A CATEGORY</span>
      <span className="category"></span>
    </div>
    )
  }

}

export default Display;