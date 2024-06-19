import styled from "styled-components";


export const ActiveContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: none;
    border-radius: 11px;
    background-color: var(--pink-white);
    width: 20%;

    &.three {
        grid-column: 2 / 3;
        grid-row: 1 / 3
    }
`

export const ActiveContainerHeader = styled.h2``

