import React from 'react'
import { ProfileImg, ProfileWrapper } from './style'

const Profile = ({profile}) => {
  return (
    <ProfileWrapper>
        <ProfileImg src={profile} />
    </ProfileWrapper>
  )
}

export default Profile