import React from 'react'
import './Nav.scss'
import Icon from '../Icon/Icon'

const baseURL = 'http://icons.iconarchive.com/icons/sensibleworld/starwars/64/';

const Nav = ({ choice, getInfo }) => {
  let iconList = ['people', 'planets', 'vehicles']
  let iconURL = ['Leia-icon.png', 'Death-Star-icon.png', 'Millennium-Falcon-icon.png']

  let icons = iconList.map((icon, i) => {
    let selectedIcon = choice === icon

    if (selectedIcon) {
      return (
        <Icon key={i}
          url={baseURL + iconURL[i]}
          choice={icon}
          getInfo={getInfo}
          classes={'active'}
        />
      )
    } else {
      return (
        <Icon key={i}
          url={baseURL + iconURL[i]}
          choice={icon}
          getInfo={getInfo}
          classes={'inactive'}
        />
      )
    }
  })

  return (
    <div className="nav">
      {icons}
  </div>
  )
}

export default Nav;