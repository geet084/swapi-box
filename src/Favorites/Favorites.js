import React from 'react'
import './Favorites.scss'

const Favorites = (props) => {
  let { showFavorites } = props;
  return (
    <div className="favorites">
      <h2>SWAPI BOX</h2>
      <button
        onClick={showFavorites}
        className="faves">
        Favorites
      </button>
    </div>
  )
}

export default Favorites;