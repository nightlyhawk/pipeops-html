import styled from 'styled-components'



export const FormTextArea = styled.textarea`
    border-radius: 6px;
    height: 150px;
    resize: none;
    padding-left: 1%;
    &.task_right {
        grid-column: 1 / 2;
        grid-row: 2 / 3;
    }
`