import React, { useContext } from 'react'
import { 
    MenuLink, 
    MenuWrapper } from './style'
import { ThemeDataContext } from '../../../context/themeContext'

const MenuTab = ({src, title, className, href}) => {
  const { setThemeStatus } = useContext(ThemeDataContext);

  return (
    <MenuWrapper onClick={() => setThemeStatus(href === '/dashboard'? 'dark' : 'light')}>
        {src}
        <MenuLink className={className} to={href}>{title}</MenuLink>
    </MenuWrapper>
  )
}

export default MenuTab;