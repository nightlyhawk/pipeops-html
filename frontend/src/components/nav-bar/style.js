import styled from 'styled-components'


export const NavWrapper = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2%;
    &.base_one {
        grid-column: 1 / 4;
        grid-row: 1 / 2;
    }
`

export const NavRightGroup = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 51%;
`