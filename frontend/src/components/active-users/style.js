import styled from "styled-components";


export const ActiveContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: none;
    border-radius: 11px;
    background-color: var(--pinkwhite);
    padding: 6% 3% 1% 3%;
    gap: 5%;
    margin-right: 2%;
    &.three {
        grid-column: 3 / 4;
        grid-row: 1 / 3;
    }
`

export const ActiveContainerHeader = styled.h2`
    margin-bottom: 4%;
`

