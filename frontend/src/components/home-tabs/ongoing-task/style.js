import styled from 'styled-components'



export const OngoingWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--peach); 
    border: none;
    border-radius: 11px;
    height: 168px;
    width: 31%;
    padding: 1%;
`

export const OngoingHeader = styled.h2`
    display: flex;
    gap: 1%;
    margin-bottom: 3%;
`

export const OngoingList = styled.ul`
    list-style: none;
`
export const OngoingListItems = styled.li`
    display: flex;
    gap: 4%;
    margin-bottom: 1%;
`
export const OngoingIcons = styled.img`
    height: ${props => props.bigger? '30px' : '15px'};
    width: ${props => props.bigger? '30px' : '15px'};
`

export const OngoingText = styled.p`
    font-size: small;
    width: 54%;
`

export const OngoingStatus = styled.span`
    font-size: smaller;
    font-weight: 700;
`