import styled from 'styled-components'


export const TaskContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2%;
    /* width: 40%; */
    &.two {
        grid-column: 1 / 3;
        grid-row: 2 / 3;
    }
`