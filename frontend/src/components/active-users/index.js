import React from 'react'
import { ActiveContainer, ActiveContainerHeader } from './style'
import { data } from '../../data/active-data'
import ActiveTabItem from './active-tabs'

const ActiveUsers = () => {
  return (
    <ActiveContainer className='three'>
        <ActiveContainerHeader>Active Staff</ActiveContainerHeader>
        {data.map((item, i) => (
            <ActiveTabItem key={i} color={item.status} name={item.name} title={item.title} text={item.text}/>
        ))}
    </ActiveContainer>
  )
}

export default ActiveUsers