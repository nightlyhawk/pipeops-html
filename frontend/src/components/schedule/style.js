import styled from "styled-components";


export const TableWrapper = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    background: var(--pinkwhite);
    padding: 7% 3%;
    margin-bottom: 2%;

    &.four {
        grid-column: 1 / 3;
        grid-row: 3 / 4;
    }
`
export const TableHeading = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: center;
    padding-bottom: 3%;
`
export const TableExtraHead = styled.h1`
    font-weight: 700;
`

export const TableIcon = styled(Image)``

export const TableProfile = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 999px;
    background: ${({bg}) => bg};
`

export const TableContainer = styled.table`
`
export const TableHead = styled.thead`
`


export const TableBody = styled.tbody`
`

export const TableHeader = styled.th`
    font-weight: 500;
    font-size: 14px;
`

export const TableRow = styled.tr`
    background-color: ${props => props.color};
    height: 55px;
`

export const TableData = styled.td`
    text-align: center;
    font-size: small;
    color: ${props => props.color};
`

