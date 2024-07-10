import React from 'react'
import { useLocation } from 'react-router-dom'
import { StatusContainer, StatusHeader, StatusWrapper, StatusText } from './style'

const AllStatus = ({data}) => {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <StatusWrapper className='task_top'>
        {data && data.map((item, i) => {
          const isActive =  pathname.endsWith(item.href);
          return(
            <StatusContainer key={i} className={isActive? 'active' : '' } to={item.title.replace(" ", "_").toLowerCase()}>
                <StatusHeader>{item.title}</StatusHeader>
                <StatusText>{item.count}</StatusText>
            </StatusContainer>
        )})}
    </StatusWrapper>
  )
}

export default AllStatus