import styled from 'styled-components'



export const TaskContainer = styled.section`
    display: flex;
    flex-direction: column;
    background-color: var(--glass);
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
export const TaskHeaderText = styled.h3``

export const TaskLength = styled.p`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`

export const TaskSpan = styled.span``

export const TaskIcon = styled.img`
    height: 10px;
    width: 10px;
`