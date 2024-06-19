import React from 'react'
import { 
    CreateIcon, 
    CreateText, 
    CreateWrapper } from './style'
import create from '../../../assets/icons/create.svg'

const CreateTaskBtn = () => {
  return (
    <CreateWrapper>
        <CreateText>Create task</CreateText>
        <CreateIcon src={create} />
    </CreateWrapper>
  )
}

export default CreateTaskBtn