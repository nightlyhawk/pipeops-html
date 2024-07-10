import styled from 'styled-components'



export const Wrapper = styled.section`
    display: grid;
    padding-right: 2%;
    grid-template-columns: 1fr 0.7fr;
    grid-template-rows: 100px 1fr;
    gap: 2%;
    &.base_three {
        grid-column: 2 / 4;
        grid-row: 2 / 4;
    }
`