import React from 'react'
import { 
    TaskHeader, 
    TaskIcon, 
    TaskMiniWrapper, 
    TaskText, 
    TaskWrapper } from './style'
import task from '../../../assets/icons/task.svg'

const TaskItem = ({text, assigned_by, received}) => {
  return (
    <TaskWrapper>
        <TaskHeader>
            <TaskIcon src={task} />
            {text}
        </TaskHeader>
        <TaskMiniWrapper>
            <TaskText>{assigned_by}</TaskText>
            <TaskText>{received}</TaskText>
        </TaskMiniWrapper>
    </TaskWrapper>
  )
}

export default TaskItem