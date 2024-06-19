import styled from 'styled-components'


export const TaskContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 4%;
    /* width: 40%; */
    &.two {
        grid-column: 1 / 2;
        grid-row: 2 / 3;
    }
`