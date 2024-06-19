import React from 'react'
import { ExtraIcon, ExtraItem, ExtraWrapper } from './style'
import notification from '../../../assets/icons/notification.svg'


const NavExtra = () => {
  return (
    <ExtraWrapper>
        <ExtraItem>
            <ExtraIcon src={notification} alt='notifications'/>
        </ExtraItem>
    </ExtraWrapper>
  )
}

export default NavExtra