import styled from "styled-components";


export const ActiveItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid black;
`

export const ActiveItem = styled.div`
    display: flex;
    justify-content: ${props => props.icon? '' : 'space-between'};
`

export const ActiveStatus = styled.div`
    border: none;
    border-radius: 999px;
    background: ${props => props.color};
`

export const ActiveHeader = styled.h3`
    display: flex;
    flex-direction: column;
`

export const ActiveText = styled.p`
    font-size: smaller;
`

export const ActiveTitle = styled.span``

export const ActiveIcon = styled.img`
    height: 20px;
    width: 20px;
`