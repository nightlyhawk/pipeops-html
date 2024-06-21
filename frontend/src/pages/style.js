import styled from 'styled-components'



export const Wrapper = styled.section`
    display: grid;
    grid-template-columns: 200px 1fr 1fr;
    grid-template-rows: 100px 1fr 1fr 100px;
    background-color: ${props => props.theme.primary};
`
export const OutletWrapper = styled.section`
    grid-column: 2 / 4;
    grid-row: 2 / 4;
`
