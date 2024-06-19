import styled from 'styled-components'


export const MenuBarContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 80vh;
    justify-content: space-between;
    
    &.base_two {
        grid-column: 1 / 2;
        grid-row: 2 / 4;
    }
`

export const MenuInnerContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const MenuTitle = styled.p`
    padding: 0 9%;
    color: var(--pinkwhite);
`