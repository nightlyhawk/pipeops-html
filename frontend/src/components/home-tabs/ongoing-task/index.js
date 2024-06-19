import React from 'react'
import { OngoingHeader, OngoingIcons, OngoingList, OngoingListItems, OngoingStatus, OngoingText, OngoingWrapper } from './style'
import { ongoing_data } from '../../../data/ongoing-data'
import almostdone from '../../../assets/icons/almostdone.svg'
import threequarter from '../../../assets/icons/threequarter.svg'
import pending from '../../../assets/icons/pending.svg'
import board from '../../../assets/icons/board.svg'

const OngoingTasks = () => {

    function checkStatus(item){
        switch(item){
            case "pending":
                return pending
            case "96% done":
                return almostdone
            case "75% done":
                return threequarter
            default:
              return pending
        }
    }
  return (
    <OngoingWrapper>
        <OngoingHeader>
            <OngoingIcons bigger='true' src={board} />
            Ongoing Tasks
        </OngoingHeader>
        <OngoingList>
            {ongoing_data.map((item, i) => (
              <OngoingListItems key={i}>
                <OngoingIcons src={checkStatus(item.status)} />
                <OngoingText>{item.text}</OngoingText>
                <OngoingStatus>{item.status}</OngoingStatus>
              </OngoingListItems>
        ))}
        </OngoingList>
    </OngoingWrapper>
  )
}

export default OngoingTasks