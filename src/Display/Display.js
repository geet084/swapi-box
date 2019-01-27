import React from 'react'
import Card from '../Card/Card'
import './Display.scss'
import PropTypes from 'prop-types'

const Display = ({ choice, selection }) => {
  
  if (choice !== '' && choice !== 'faves') {
    let cards = selection.map((selected, i) => {
      if (selected.residents && selected.residents.length < 1) {
        selected.residents = ['none']
      }
      return <Card key={i} choice={choice} {...selected} />
    })

    return (
      <div className="display">
        {cards}
      </div>
    )
  } else if (choice === 'faves') { 
    return (
      <div>
      </div>
    )
  } else {
    return (
    <div className="select-category">
      <span className="select">SELECT A CATEGORY</span>
      <span className="category"></span>
    </div>
    )
  }

}

Display.protoTypes = {
  choice: PropTypes.string,
  selection: PropTypes.string
}
export default Display;