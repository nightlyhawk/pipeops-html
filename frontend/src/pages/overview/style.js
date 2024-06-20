import styled from 'styled-components'



export const PageWrapper = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr 250px;
    grid-template-rows: 200px 232px 500px;
    gap: 2%;

    &.base_three {
        grid-column: 2 / 4;
        grid-row: 2 / 4;
    }
`