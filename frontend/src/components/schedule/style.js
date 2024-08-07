import styled from "styled-components";


export const TableWrapper = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    padding: 7% 3%;
    margin-bottom: 2%;

    &.four {
        grid-column: 1 / 3;
        grid-row: 3 / 4;
    }
`
