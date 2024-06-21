import React from 'react'
import { 
    TaskButton, 
    TaskCheckBox, 
    TaskDate, 
    TaskDetails, 
    TaskLabel, 
    TaskWrapper } from './style'

const TaskItem = ({text, date, status}) => {
  return (
    <TaskWrapper>
        <TaskCheckBox id='taskText' checked={status} />
        <TaskDetails>
            <TaskLabel for='taskText'>{text}</TaskLabel>
            <TaskDate>{date}</TaskDate>
            <TaskButton>End task</TaskButton>
        </TaskDetails>
    </TaskWrapper>
  )
}

export default TaskItem