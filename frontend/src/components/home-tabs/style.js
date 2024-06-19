import styled from 'styled-components'



export const TabWrapper = styled.div`
    display: flex;
`
export const TabContainer = styled.section`
    display: flex;
    flex-direction: column;

    &.one {
        grid-column: 1 / 2;
        grid-row: 1 / 2;
    }
`

export const TabHeader = styled.h2``