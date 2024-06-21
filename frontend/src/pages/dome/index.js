import React from 'react'
import { Wrapper } from './style'
import TaskList from '../../components/list-tasks'
import TaskForm from '../../components/forms/task-form'

const DoMe = () => {
  return (
    <Wrapper className='base_three'>
        <TaskForm />
        <TaskList />
    </Wrapper>
  )
}

export default DoMe