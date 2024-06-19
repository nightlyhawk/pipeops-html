import React from 'react'
import { TaskContainer } from './style'
import TaskItem from './task'
import { task_data } from '../../data/task-data'

const DisplayedTasks = () => {
  return (
    <TaskContainer className='two'>
        {task_data.map((item, i) => (
            <TaskItem key={i} text={item.text} assigned_by={item.assigned_by} received={item.received} />
        ))}
    </TaskContainer>
  )
}

export default DisplayedTasks