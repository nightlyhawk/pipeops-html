import styled from "styled-components";


export const TableHeading = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: center;
    padding-bottom: 3%;
    background: var(--pinkwhite);
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
    background: ${props => props.blank || 'var(--pinkwhite)'};
`


export const TableBody = styled.tbody`
    background: var(--pinkwhite);
`

export const TableHeader = styled.th`
    font-weight: 500;
    font-size: 14px;
`

export const TableRow = styled.tr`
    background-color: ${props => props.color};
    height: 55px;
    padding: ${props => props.padding};
`

export const TableData = styled.td`
    text-align: center;
    font-size: small;
    color: ${props => props.color};
`

