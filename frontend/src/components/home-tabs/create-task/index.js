import React from 'react'
import { 
    CreateIcon, 
    CreateText, 
    CreateWrapper } from './style'
import create from '../../../assets/icons/create.svg'

const CreateTaskBtn = () => {
  return (
    <CreateWrapper>
        <CreateIcon src={create} />
        <CreateText>Create task</CreateText>
    </CreateWrapper>
  )
}

export default CreateTaskBtn