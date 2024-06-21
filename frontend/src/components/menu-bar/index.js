import React, { useContext } from 'react'
import { 
    MenuBarContainer, 
    MenuInnerContainer, 
    MenuTitle} from './style'
import { bottom_data, top_data, } from '../../data/menu-data'
import MenuTab from './menu-tab'
import { useLocation } from 'react-router-dom'
import { Logout } from '../../assets/icons/js-icons'
import { ThemeDataContext } from '../../context/themeContext'

const MenuBar = ({props}) => {
    const { themestatus } = useContext(ThemeDataContext);
    const location = useLocation();
    const pathname = location.pathname;
    let colors = {
        light: {
            primary: '#33333399',
            secondary: 'black'
        },
        dark: {
            primary: '#83768C73',
            secondary: 'white'
        }
    }
  return (
    <MenuBarContainer className='base_two'>
        <MenuInnerContainer>
        <MenuInnerContainer>
            <MenuTitle>Home</MenuTitle>
            {
                top_data.map((item, i) => {
                    const isActive =  pathname.endsWith(item.href);
                    return (
                        <MenuTab key={i} src={<item.icon color={isActive? colors[themestatus].secondary : colors[themestatus].primary} />} className={isActive? 'active remove' : 'remove' } href={item.href} title={item.title} />
                    )
                    
                })
            }
        </MenuInnerContainer>
        <MenuInnerContainer>
            <MenuTitle>Records</MenuTitle>
            {
                bottom_data.map((item, i) => {
                    const isActive =  pathname.endsWith(item.href);
                    return (
                        <MenuTab key={i} src={<item.icon color={isActive? colors[themestatus].secondary : colors[themestatus].primary} />} className={isActive? 'active' : ''} href={item.href} title={item.title} />
                    )
                    
                })
            }
        </MenuInnerContainer>
        </MenuInnerContainer>
        <MenuTab src={<Logout color={pathname.startsWith('/logout')? colors[themestatus].secondary : colors[themestatus].primary} />} className={pathname.startsWith('/logout')? 'active' : ''} href={'/logout'} title='Logout' />
    </MenuBarContainer>
  )
}

export default MenuBar