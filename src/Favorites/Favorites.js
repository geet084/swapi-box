import React from 'react'
import './Favorites.scss'
import Icon from '../Icon/Icon'
import PropTypes from 'prop-types'

const baseURL = "http://icons.iconarchive.com/icons/sensibleworld/starwars/64/";

const Favorites = ({showFavorites, active, numFaves, newScroll}) => {
  let classes;
  active === 'faves' ? classes = 'active' : classes = 'inactive'
  
  return (
    <div className="favorites">
      <h2
        className="swapi"
        onClick={newScroll}
      >
        SWAPI BOX
      </h2>
      <Icon
        url={baseURL + 'R2D2-icon.png'}
        getInfo={showFavorites}
        classes={classes}
        optText={numFaves + ' favorites'}
      />
    </div>
  )
}

Favorites.propTypes = {
  showFavorites: PropTypes.array,
  active: PropTypes.string,
  numFaves: PropTypes.number,
  newScroll: PropTypes.func
}
export default Favorites;