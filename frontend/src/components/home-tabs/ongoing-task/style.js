import styled from 'styled-components'



export const OngoingWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--peach); 
    border: none;
    border-radius: 11px;
    height: 120px;
`

export const OngoingHeader = styled.h2``

export const OngoingList = styled.ul`
    list-style: none;
`
export const OngoingListItems = styled.li`

`
export const OngoingIcons = styled.img`
    height: ${props => props.bigger? '30px' : '15px'};
    width: ${props => props.bigger? '30px' : '15px'};
`

export const OngoingText = styled.p`
    font-size: small;
`

export const OngoingStatus = styled.span`
    font-size: smaller;
    font-weight: 700;
`