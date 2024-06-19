import React from 'react'
import { 
    ActiveHeader, 
    ActiveIcon, 
    ActiveItem, 
    ActiveItemWrapper, 
    ActiveStatus, 
    ActiveText, 
    ActiveTitle } from './style'
import message from '../../../assets/icons/message.svg'


const ActiveTabItem = ({color, name, title, text}) => {
  return (
    <ActiveItemWrapper>
        <ActiveItem>
            <ActiveStatus color={color}/>
            <ActiveHeader>
                {name}
                <ActiveTitle>{title}</ActiveTitle>
            </ActiveHeader>
            <ActiveText>{text}</ActiveText>
        </ActiveItem>
        <ActiveItem icon='true'>
            <ActiveIcon src={message} />
            <ActiveText>Send a message</ActiveText>
        </ActiveItem>
    </ActiveItemWrapper>
  )
}

export default ActiveTabItem