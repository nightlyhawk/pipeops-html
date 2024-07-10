import React from 'react'
import { Wrapper } from './style'
import AllStatus from '../../components/task-status'
import { Outlet } from 'react-router-dom'

const DoMe = () => {
  return (
    <Wrapper className='base_three'>
        <AllStatus data={[{title: 'Total tasks', count: '205'}, {title: 'Ongoing tasks', count: '205'}, {title: 'Completed tasks', count: '205'}, {title: 'Pending tasks', count: '205'},]}/>
        <Outlet />
    </Wrapper>
  )
}

export default DoMe