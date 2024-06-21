import React from 'react'
import { TaskContainer, TaskHeader, TaskHeaderText, TaskIcon, TaskLength, TaskSpan } from './style'
import { ongoing_data } from '../../data/task-data'
import TaskItem from './task-item'
import arrowdown from '../../assets/icons/arrowdown.svg'

const TaskList = () => {
  return (
    <TaskContainer>
        <TaskHeader>
            <TaskHeaderText>
                ONGOING TASKS
            </TaskHeaderText>
            <TaskLength>
                All
                <TaskSpan>
                    <TaskIcon src={arrowdown} />
                </TaskSpan>
            </TaskLength>
        </TaskHeader>
        {ongoing_data.filter((item) => {
            if(item.status === 'ongoing'){
                return true
            }
            return false
        }).map((item, i) => (
            <TaskItem key={i} text={item.task} date={item.date} status={false} />
        ))}
        <TaskHeader>
            <TaskHeaderText>
                COMPLETED TASKS
            </TaskHeaderText>
            <TaskLength>
                Recents
                <TaskSpan>
                    <TaskIcon src={arrowdown} />
                </TaskSpan>
            </TaskLength>
        </TaskHeader>
        {ongoing_data.filter((item) => {
            if(item.status === 'completed'){
                return true
            }
            return false
        }).map((item, i) => (
            <TaskItem key={i} text={item.task} date={item.date} status={true} />
        ))}
    </TaskContainer>
  )
}

export default TaskList