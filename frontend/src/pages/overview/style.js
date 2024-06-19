import styled from 'styled-components'



export const PageWrapper = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 3;

    &.base_three {
        grid-column: 2 / 4;
        grid-row: 2 / 4;
    }
`