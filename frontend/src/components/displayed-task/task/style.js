import styled from 'styled-components'


export const TaskWrapper = styled.div`
    display: flex;
    flex-direction: column;
    border: none;
    border-radius: 11px;
    width: 32%;
    justify-content: space-between;
    padding: 2%;
    background-color: var(--glass);
`

export const TaskHeader = styled.h3`
    color: var(--secondary);
    display: flex;
    display: flex;
    gap: 2%;
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
