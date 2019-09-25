import React from 'react'
import { NavLink } from 'react-router-dom'

import { StyleBase, Browse } from './style'
import SearchInput from './Search'

const NavBar = () => {
  return (
    <StyleBase>
      <Browse>
        <NavLink exact activeClassName="selected-tab" to="/">Home</NavLink>
        <NavLink activeClassName="selected-tab" to="/discovery">Discovery</NavLink>
        <NavLink activeClassName="selected-tab" to="/watchlist">My Watchlist</NavLink>
        <NavLink activeClassName="selected-tab" to="/favorites">Favorites</NavLink>
      </Browse>
      <SearchInput />
    </StyleBase>
  )
}

export default NavBar
