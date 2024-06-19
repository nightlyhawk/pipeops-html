import React from 'react'
import { TabContainer, TabHeader, TabWrapper } from './style'
import Profile from './profile'
import CreateTaskBtn from './create-task'
import OngoingTasks from './ongoing-task'
import profile from '../../assets/images/profile.png'

const HomeTabs = () => {
  return (
    <TabContainer className='one'>
        <TabHeader>Hey Johnny! Good afternoon.</TabHeader>
        <TabWrapper>
            <Profile profile={profile} />
            <OngoingTasks />
            <CreateTaskBtn />
        </TabWrapper>
    </TabContainer>
  )
}

export default HomeTabs