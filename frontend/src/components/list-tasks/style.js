import styled from 'styled-components'



export const TaskContainer = styled.section`
    display: flex;
    flex-direction: column;
    background-color: var(--primary);
    border: none;
    border-radius: 9px;
    width: 36%;
    padding: 2%;
    gap: 1rem;
`
export const TaskHeader = styled.div`
    display: flex;
    justify-content: space-between;
`
export const TaskHeaderText = styled.h3`
    color: var(--secondary);
`

export const TaskLength = styled.p`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--secondary);
`

export const TaskSpan = styled.span`
color: var(--secondary);
`

export const TaskIcon = styled.img`
    height: 10px;
    width: 10px;
`