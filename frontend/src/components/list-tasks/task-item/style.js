import styled from 'styled-components'

export const TaskWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding: 2%;
    border: none;
    border-radius: 9px;
    background-color: var(--glass);
`
export const TaskCheckBox = styled.input.attrs({
    type: 'checkbox'
})`
    height: 15px;
    width: 16px;
    border: 1px solid white;
    border-radius: 6px;
    margin-top: 0.8%;
    background-color: var(--transparent)
`
export const TaskLabel = styled.label`
    display: flex;
    flex-direction: column;
    color: white;
`
export const TaskButton = styled.button`
    border: none;
    border-radius: 15px;
    color: var(--primary);
    background-color: var(--secondary);
    width: 27%;
    font-size: small;
    height: 25px;
    align-self: flex-end;
`
export const TaskDetails = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2%;
`
export const TaskDate = styled.span`
    font-size: small;
    color: var(--secondary);
`