import React from 'react'
import { NavRightGroup, NavWrapper } from './style'
import Logo from './logo'
import SearchBar from './search-bar'
import NavExtra from './nav-extras'

const NavBar = () => {
  return (
    <NavWrapper className='base_one'>
        <NavRightGroup>
          <Logo />
          <SearchBar />
        </NavRightGroup>
        <NavExtra />
    </NavWrapper>
  )
}

export default NavBar