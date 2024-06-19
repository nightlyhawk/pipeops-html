import styled from 'styled-components'


export const TaskWrapper = styled.div`
    display: flex;
    flex-direction: column;
    border: none;
    border-radius: 11px;
    background-color: var(--transparent);
`

export const TaskHeader = styled.h3`
    color: var(--secondary);
`

export const TaskIcon = styled.img`
    height: 20px;
    width: 20px;
`

export const TaskText = styled.p`
    font-size: smaller;
    color: var(--secondary);
`
export const TaskMiniWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`
