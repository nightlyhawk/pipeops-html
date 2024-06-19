import React from 'react'
import { 
    MenuIcon, 
    MenuLink, 
    MenuWrapper } from './style'

const MenuTab = ({src, title, className, href}) => {
  return (
    <MenuWrapper>
        <MenuIcon src={src} />
        <MenuLink className={className} to={href}>{title}</MenuLink>
    </MenuWrapper>
  )
}

export default MenuTab