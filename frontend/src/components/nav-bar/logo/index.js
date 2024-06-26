import React from 'react'
import logo from '../../../assets/icons/logo.svg'
import { LogoIcon, LogoLink, LogoWrapper } from './style'

const Logo = () => {
  return (
    <LogoWrapper>
        <LogoIcon src={logo} alt='logo' />
        <LogoLink to='/'>PURPLEEDUSUITE</LogoLink>
    </LogoWrapper>
  )
}

export default Logo