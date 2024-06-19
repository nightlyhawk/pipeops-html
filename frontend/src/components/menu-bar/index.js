import React from 'react'
import { 
    MenuBarContainer, 
    MenuInnerContainer, 
    MenuTitle} from './style'
import { bottom_data, top_data } from '../../data/menu-data'
import MenuTab from './menu-tab'
import { useLocation } from 'react-router-dom'
import logout from '../../assets/icons/logout.svg'

const MenuBar = ({props}) => {
    const location = useLocation();
    const pathname = location.pathname
  return (
    <MenuBarContainer className='base_two'>
        <MenuInnerContainer>
        <MenuInnerContainer>
            <MenuTitle>Home</MenuTitle>
            {
                top_data.map((item, i) => {
                    const isActive =  pathname.startsWith(item.href)
                    return (
                        <MenuTab key={i} src={isActive? item.bicon : item.icon} className={isActive? 'active' : '' } title={item.title} />
                    )
                    
                })
            }
        </MenuInnerContainer>
        <MenuInnerContainer>
            <MenuTitle>Records</MenuTitle>
            {
                bottom_data.map((item, i) => {
                    const isActive =  pathname.startsWith(item.href)
                    return (
                        <MenuTab key={i} src={isActive? item.bicon : item.icon} className={isActive? 'active' : ''} href={item.href} title={item.title} />
                    )
                    
                })
            }
        </MenuInnerContainer>
        </MenuInnerContainer>
        <MenuTab src={pathname.startsWith('/logout')? logout : logout} className={pathname.startsWith('/logout')? 'active' : ''} href={'/logout'} title='Logout' />
    </MenuBarContainer>
  )
}

export default MenuBar