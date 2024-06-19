import React from 'react'
import { 
    BannerWrapper, 
    BannerIcon, 
    BannerRow, 
    BannerText } from './style'
import logo from '../../assets/icons/white_logo.svg'
import siginBanner from '../../assets/images/signinBanner.png'

const AuthBanner = () => {
  return (
    <BannerWrapper url={siginBanner}>
        <BannerRow>
            <BannerIcon src={logo} />
            <BannerText>PURPLEDUSUITE</BannerText>
        </BannerRow>
    </BannerWrapper>
  )
}

export default AuthBanner