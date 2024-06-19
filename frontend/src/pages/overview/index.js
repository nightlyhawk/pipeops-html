import React from 'react'
import { PageWrapper } from './style'
import HomeTabs from '../../components/home-tabs'
import DisplayedTasks from '../../components/displayed-task'
import ActiveUsers from '../../components/active-users'

const Overview = () => {
  return (
    <PageWrapper className='base_three'>
      <HomeTabs />
      <DisplayedTasks />
      <ActiveUsers />
    </PageWrapper>
  )
}

export default Overview